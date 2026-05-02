
import { useEffect, useRef, useState } from 'react'

export default function Portfolio({ language, t }) {
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

  const projects = [
    {
      id: 1,
      name: 'portfolio.project1',
      color: 'from-blue-600 to-cyan-500',
      image: '/lovcenwearsite.png',
      url: 'https://lovcenwear.com/',
    },
    {
      id: 2,
      name: 'portfolio.project2',
      color: 'from-purple-600 to-pink-500',
      image: '/stamparijamadex.png',
      url: 'https://stamparijamadex.com/',
    },
    {
      id: 3,
      name: 'portfolio.project3',
      color: 'from-orange-600 to-red-500',
      image: '/snkrz.png',
      url: 'https://snikrz.vercel.app/',
    },
    {
      id: 4,
      name: 'portfolio.project4',
      color: 'from-green-600 to-emerald-500',
      image: '/rentacar.png',
      url: 'https://rentacar555-jwgs.vercel.app/',
    },
  ]

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 px-4 bg-darker relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(255, 140, 0, 0.5) 0%, transparent 70%)',
            left: '10%',
            bottom: '10%',
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
            <span className="text-gradient">{t(language, 'portfolio.title')}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-accentAlt mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const inner = (
              <>
                {/* Project visual */}
                <div className="h-72 relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={t(language, project.name)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`h-full bg-gradient-to-br ${project.color} relative`}>
                      <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 transform group-hover:scale-110">
                          📱
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">{t(language, project.name)}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{t(language, 'portfolio.projectDesc')}</p>
                  <span className="bg-accent text-white px-6 py-2 rounded-lg font-bold hover:bg-accentAlt transition-all duration-300 transform hover:scale-105 w-fit inline-block">
                    {t(language, 'portfolio.viewProject')}
                  </span>
                </div>

                {/* Border glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent rounded-2xl transition-all duration-300 pointer-events-none" />
              </>
            )

            const cardClass = `group relative overflow-hidden rounded-2xl transition-all duration-700 transform cursor-pointer ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`

            return project.url ? (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {inner}
              </a>
            ) : (
              <div
                key={project.id}
                className={cardClass}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
