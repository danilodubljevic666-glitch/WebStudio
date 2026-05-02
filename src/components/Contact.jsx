import { useEffect, useRef, useState } from 'react'

export default function Contact({ language, t }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 bg-darker relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(255, 140, 0, 0.4) 0%, transparent 70%)',
            left: '5%',
            top: '20%',
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.4) 0%, transparent 70%)',
            right: '5%',
            bottom: '10%',
            animation: 'float 4s ease-in-out infinite',
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
            <span className="text-gradient">{t(language, 'contact.title')}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-accentAlt mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-8">{t(language, 'contact.directContact')}</h3>

            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:+38268048655"
                className="flex items-start gap-4 p-4 rounded-xl border border-gray-800 hover:border-accent transition-all duration-300 group hover-glow"
              >
                <div className="text-3xl">📞</div>
                <div>
                  <p className="text-gray-400 text-sm">{t(language, 'contact.phone_label')}</p>
                  <p className="text-white font-semibold group-hover:text-accent transition-colors">
                    {t(language, 'contact.phone')}
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/webstudiocg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl border border-gray-800 hover:border-accent transition-all duration-300 group hover-glow"
              >
                <div className="text-3xl">📱</div>
                <div>
                  <p className="text-gray-400 text-sm">Instagram</p>
                  <p className="text-white font-semibold group-hover:text-accent transition-colors">
                    {t(language, 'contact.instagram')}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-800">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="text-gray-400 text-sm">{t(language, 'contact.location_label')}</p>
                  <p className="text-white font-semibold">
                    {t(language, 'contact.location')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t(language, 'contact.form.name')}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-accent focus:outline-none transition-all duration-300 hover:border-gray-700 text-white placeholder-gray-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t(language, 'contact.form.email')}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-accent focus:outline-none transition-all duration-300 hover:border-gray-700 text-white placeholder-gray-500"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t(language, 'contact.form.message')}
                rows="5"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-accent focus:outline-none transition-all duration-300 hover:border-gray-700 text-white placeholder-gray-500 resize-none"
              />

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-accent to-accentAlt text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 hover-glow"
              >
                {submitted ? '✓ Poslano!' : t(language, 'contact.form.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
