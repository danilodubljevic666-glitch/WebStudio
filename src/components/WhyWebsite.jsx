import { useEffect, useRef, useState } from 'react'

const reasons = [
  {
    icon: '🌍',
    key: 'visibility',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '💰',
    key: 'revenue',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: '🏆',
    key: 'trust',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '📊',
    key: 'growth',
    color: 'from-orange-500 to-red-500',
  },
]

export default function WhyWebsite({ language, t }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-dark to-darker relative overflow-hidden"
    >
      {/* Decorative blur */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.5) 0%, transparent 70%)',
            right: '5%',
            top: '10%',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div
          className={`text-center mb-6 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-gradient">{t(language, 'why.title')}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-accentAlt mx-auto rounded-full" />
        </div>

        {/* Paragraph */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 delay-150 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-400 text-lg leading-relaxed">
            {t(language, 'why.paragraph')}
          </p>
        </div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.key}
              className={`group relative transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 2) * 120}ms` }}
            >
              {/* Card */}
              <div className="relative rounded-2xl p-6 border border-gray-800 group-hover:border-accent/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent/10 h-full"
                style={{ background: 'linear-gradient(135deg, rgba(18,18,18,0.98) 0%, rgba(10,10,10,0.98) 100%)' }}
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r ${reason.color}`} />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent rounded-2xl transition-all duration-300" />

                <div className="relative">
                  {/* Icon */}
                  <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {reason.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                    {t(language, `why.reasons.${reason.key}.title`)}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                    {t(language, `why.reasons.${reason.key}.desc`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
