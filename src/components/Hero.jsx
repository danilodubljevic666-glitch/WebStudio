import Aurora from './Aurora'

export default function Hero({ language, t, ready }) {

  return (
    <section
      className="relative min-h-screen pt-20 pb-20 overflow-hidden flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #050505 0%, #0a0a0a 100%)' }}
    >
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dark" />
        <Aurora
          colorStops={['#0066FF', '#7C3AED']}
          amplitude={1.2}
          blend={0.55}
          speed={0.4}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Welcome */}
        <div
          className={`transition-all duration-1000 transform ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm md:text-base mb-4">
            {t(language, 'hero.welcome')}
          </p>
        </div>

        {/* Headline */}
        <div
          className={`transition-all duration-1000 transform delay-100 ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 text-white"
            style={{
              textShadow: '0 0 40px rgba(99, 102, 241, 0.8), 0 2px 8px rgba(0,0,0,0.9)',
              WebkitTextStroke: '1px rgba(255,255,255,0.15)',
            }}
          >
            {t(language, 'hero.headline')}
          </h1>
        </div>

        {/* Subheadline */}
        <div
          className={`transition-all duration-1000 transform delay-200 ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-3xl mx-auto">
            {t(language, 'hero.subheadline')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`transition-all duration-1000 transform delay-300 flex flex-col sm:flex-row gap-6 justify-center items-center ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            className="px-8 py-4 bg-gradient-to-r from-accent to-purple-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 transform hover:scale-105 text-lg"
            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
          >
            {t(language, 'hero.ctaPricing')}
          </button>
          <button
            className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 hover-glow text-lg"
            onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
          >
            {t(language, 'hero.cta2')}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
