import { useEffect, useState } from 'react'

export default function Navigation({ language, setLanguage, t, scrollPos }) {
  const [isOpen, setIsOpen] = useState(false)
  const [bgOpacity, setBgOpacity] = useState(0)

  useEffect(() => {
    setBgOpacity(Math.min(scrollPos / 100, 0.95))
  }, [scrollPos])

  return (
    <nav 
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{ 
        backgroundColor: `rgba(10, 10, 10, ${bgOpacity})`,
        backdropFilter: bgOpacity > 0.5 ? 'blur(10px)' : 'none',
        borderBottom: scrollPos > 50 ? '1px solid rgba(0, 102, 255, 0.1)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center animate-slideInLeft hover-glow transition-all">
            <img
              src="/logo.png"
              alt="WebStudio"
              className="h-12 w-12 object-contain transition-transform hover:scale-110"
              style={{ mixBlendMode: 'screen' }}
            />
            <span className="ml-2 text-sm font-light text-gray-400">WebStudio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['services', 'portfolio', 'about', 'contact'].map((item, i) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-accent transition-colors duration-300 text-sm font-medium"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {t(language, `nav.${item}`)}
              </a>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="flex bg-darker rounded-full p-1 border border-gray-700 hover-glow transition-all">
              <button
                onClick={() => setLanguage('me')}
                className={`px-4 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                  language === 'me'
                    ? 'bg-accent text-dark'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                SR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-accent text-dark'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-gray-700 hover:border-accent transition-all duration-300 hover:bg-accent/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={`block h-0.5 bg-accent rounded-full transition-all duration-300 ${isOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`} />
              <span className={`block h-0.5 bg-accent rounded-full transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-3.5'}`} />
              <span className={`block h-0.5 bg-accent rounded-full transition-all duration-300 ${isOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-5'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 rounded-2xl overflow-hidden border border-gray-700/60"
            style={{ background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(20px)' }}
          >
            {/* Gradient top line */}
            <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, #0066FF, #7C3AED, #FF8C00)' }} />

            <div className="px-4 py-2">
              {['services', 'portfolio', 'about', 'contact'].map((item, i) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-gray-800/60 last:border-0 text-gray-300 hover:text-accent transition-colors duration-200 group"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="font-medium tracking-wide">{t(language, `nav.${item}`)}</span>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1 transform">→</span>
                </a>
              ))}
            </div>

            {/* Bottom glow */}
            <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,102,255,0.3), transparent)' }} />
          </div>
        )}
      </div>
    </nav>
  )
}
