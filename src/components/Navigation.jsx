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
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-6 bg-accent transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-accent transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-accent transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4 animate-slideInDown">
            {['services', 'portfolio', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block py-2 text-gray-300 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t(language, `nav.${item}`)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
