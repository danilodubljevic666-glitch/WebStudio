import { useEffect, useRef, useState } from 'react'

function useCountUp(target, duration = 1500, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])

  return count
}

function StatCard({ target, suffix, labelKey, language, t, delay, active }) {
  const count = useCountUp(target, 1500, active)

  return (
    <div
      className={`transition-all duration-700 transform ${
        active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl font-black text-accent">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-400">{t(language, `about.stats.${labelKey}`)}</div>
    </div>
  )
}

export default function About({ language, t }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = ['feature1', 'feature2', 'feature3']

  const stats = [
    { target: 30,  suffix: '+',  key: 'projects' },
    { target: 25,  suffix: '+',  key: 'clients' },
    { target: 5,   suffix: '+',  key: 'years' },
    { target: 100, suffix: '%',  key: 'satisfaction' },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-darker to-dark relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.4) 0%, transparent 70%)',
            right: '10%',
            bottom: '20%',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Content */}
        <div
          className={`transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">{t(language, 'about.title')}</span>
          </h2>

          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            {t(language, 'about.desc')}
          </p>

          {/* Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature}
                className={`flex items-start gap-4 transition-all duration-700 transform ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent to-accentAlt flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-bold text-dark">✓</span>
                </div>
                <p className="text-gray-300">{t(language, `about.features.${feature}`)}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-12">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.key}
                target={stat.target}
                suffix={stat.suffix}
                labelKey={stat.key}
                language={language}
                t={t}
                delay={index * 100}
                active={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Right - Mockup image */}
        <div
          className={`transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`}
        >
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="/mockup.png"
              alt="WebStudio mockup"
              className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-110"
              style={{ mixBlendMode: 'lighten' }}
            />
            {/* Shine overlay */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)',
                boxShadow: 'inset 0 0 40px rgba(0, 102, 255, 0.15)',
              }}
            />
            {/* Glow border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: '0 0 40px rgba(0, 102, 255, 0.3)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
