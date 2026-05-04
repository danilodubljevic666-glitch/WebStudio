import { useState, useEffect, useCallback } from 'react'
import { t } from './i18n'
import Preloader from './components/Preloader'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhyWebsite from './components/WhyWebsite'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  const [language, setLanguage] = useState('me')
  const [scrollPos, setScrollPos] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDone = useCallback(() => setLoaded(true), [])

  return (
    <>
      {!loaded && <Preloader onDone={handleDone} />}

      <div
        className="bg-dark text-white overflow-hidden transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <Navigation language={language} setLanguage={setLanguage} t={t} scrollPos={scrollPos} />
        <Hero language={language} t={t} ready={loaded} />
        <WhyWebsite language={language} t={t} />
        <Services language={language} t={t} />
        <Portfolio language={language} t={t} />
        <About language={language} t={t} />
        <Pricing language={language} t={t} />
        <Contact language={language} t={t} />
        <Footer language={language} t={t} />
      </div>
    </>
  )
}
