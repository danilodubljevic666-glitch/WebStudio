import { useEffect, useRef } from 'react'

const VERT = `
  attribute vec2 a_pos;
  void main() {
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`

const FRAG = `
  precision highp float;
  uniform float u_time;
  uniform float u_amplitude;
  uniform float u_speed;
  uniform float u_blend;
  uniform vec2 u_resolution;
  uniform vec3 u_c0;
  uniform vec3 u_c1;

  vec3 permute(vec3 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
  }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float t  = u_time * u_speed;

    float n0 = snoise(vec2(uv.x * 2.0 + t * 0.12, t * 0.25)) * u_amplitude;
    float n1 = snoise(vec2(uv.x * 3.0 + 1.7 + t * 0.08, t * 0.18)) * u_amplitude;

    float w0 = 0.35 + 0.18 * n0;
    float w1 = 0.65 + 0.18 * n1;

    float d0 = abs(uv.y - w0);
    float d1 = abs(uv.y - w1);

    float i0 = exp(-d0 * 14.0);
    float i1 = exp(-d1 * 14.0);

    vec3 color = u_c0 * i0 + u_c1 * i1;
    float alpha = (i0 + i1) * u_blend;

    gl_FragColor = vec4(color, clamp(alpha, 0.0, 1.0));
  }
`

function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255,
  ]
}

export default function Aurora({
  colorStops = ['#0066FF', '#7C3AED'],
  amplitude = 1.0,
  blend = 0.55,
  speed = 0.4,
}) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return

    const compile = (type, src) => {
      const s = gl.createShader(type)
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }

    const prog = gl.createProgram()
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const aPos = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uTime  = gl.getUniformLocation(prog, 'u_time')
    const uAmp   = gl.getUniformLocation(prog, 'u_amplitude')
    const uSpeed = gl.getUniformLocation(prog, 'u_speed')
    const uBlend = gl.getUniformLocation(prog, 'u_blend')
    const uRes   = gl.getUniformLocation(prog, 'u_resolution')
    const uC0    = gl.getUniformLocation(prog, 'u_c0')
    const uC1    = gl.getUniformLocation(prog, 'u_c1')

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    gl.uniform1f(uAmp, amplitude)
    gl.uniform1f(uSpeed, speed)
    gl.uniform1f(uBlend, blend)
    gl.uniform3fv(uC0, hexToRgb(colorStops[0] || '#0066FF'))
    gl.uniform3fv(uC1, hexToRgb(colorStops[1] || '#7C3AED'))

    const resize = () => {
      canvas.width  = canvas.clientWidth
      canvas.height = canvas.clientHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uRes, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const start = performance.now()
    const render = () => {
      gl.uniform1f(uTime, (performance.now() - start) / 1000)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      rafRef.current = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [colorStops, amplitude, blend, speed])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  )
}
