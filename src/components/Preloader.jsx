import { useEffect, useState } from 'react'

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const duration = 1800
    const interval = 16
    const steps = duration / interval
    let current = 0

    const timer = setInterval(() => {
      current++
      // ease-out curve: fast start, slow finish
      const p = Math.min(Math.round((1 - Math.pow(1 - current / steps, 2)) * 100), 100)
      setProgress(p)

      if (current >= steps) {
        clearInterval(timer)
        setFading(true)
        setTimeout(onDone, 600)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onDone])

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark transition-opacity duration-600"
      style={{ opacity: fading ? 0 : 1, pointerEvents: fading ? 'none' : 'all', transitionDuration: '600ms' }}
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-6">
        <img
          src="/logo.png"
          alt="WebStudio"
          className="h-20 w-20 object-contain animate-pulse"
          style={{ mixBlendMode: 'screen' }}
        />

        <div className="text-center">
          <div className="text-2xl font-black text-gradient tracking-widest">WEBSTUDIO</div>
          <div className="text-xs text-gray-500 tracking-[0.3em] mt-1 uppercase">Loading</div>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-px bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #0066FF, #7C3AED)',
            }}
          />
        </div>

        <div className="text-xs text-gray-600 font-mono">{progress}%</div>
      </div>
    </div>
  )
}
