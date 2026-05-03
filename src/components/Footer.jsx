import { useEffect, useState } from 'react'

export default function Footer({ language, t }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      if (docHeight - scrollPos < 200) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="relative bg-darker border-t border-gray-800 overflow-hidden">
      {/* Decorative top glow */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 blur-2xl opacity-30 -z-10"
        style={{ background: 'linear-gradient(90deg, #0066FF, #7C3AED, #FF8C00)' }}
      />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-2xl font-bold text-gradient mb-2">WebStudio</div>
            <p className="text-gray-400 text-sm">
              {t(language, 'footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-700 transform delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h4 className="font-semibold mb-4">{t(language, 'footer.linksTitle')}</h4>
            <ul className="space-y-2">
              {['services', 'portfolio', 'about'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {t(language, `nav.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div
            className={`transition-all duration-700 transform delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h4 className="font-semibold mb-4">{t(language, 'footer.followTitle')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/webstudiocg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>{t(language, 'footer.copyright')}</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <span>Made with</span>
              <span className="text-accent text-lg animate-pulse">❤️</span>
              <span>in Montenegro</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold hover:bg-accentAlt transition-all duration-300 transform hover:scale-110 hover-glow ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        ↑
      </button>
    </footer>
  )
}
