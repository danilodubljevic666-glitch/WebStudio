import { useEffect, useRef, useState } from 'react'

export default function Services({ language, t }) {
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

  const services = [
    {
      key: 'webdev',
      icon: '🌐',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'ecommerce',
      icon: '🛒',
      color: 'from-purple-500 to-pink-500',
    },
    {
      key: 'uiux',
      icon: '🎨',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-dark to-darker relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.5) 0%, transparent 70%)',
            right: '10%',
            top: '20%',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-gradient">{t(language, 'services.title')}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-accentAlt mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={service.key}
              className={`group relative transition-all duration-700 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-darker rounded-2xl border border-gray-800 group-hover:border-accent transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-accent/20" />

              {/* Animated gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 from-accent to-accentAlt" />

              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="text-6xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 block">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                  {t(language, `services.${service.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-grow mb-6">
                  {t(language, `services.${service.key}.desc`)}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm font-semibold">{t(language, 'services.learnMore')}</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
