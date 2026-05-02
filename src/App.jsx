import { useState, useEffect } from 'react'
import { t } from './i18n'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [language, setLanguage] = useState('me')
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-dark text-white overflow-hidden">
      <Navigation language={language} setLanguage={setLanguage} t={t} scrollPos={scrollPos} />
      <Hero language={language} t={t} />
      <Services language={language} t={t} />
      <Portfolio language={language} t={t} />
      <About language={language} t={t} />
      <Contact language={language} t={t} />
      <Footer language={language} t={t} />
    </div>
  )
}
