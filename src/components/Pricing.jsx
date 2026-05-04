import { useEffect, useRef, useState } from 'react'
import OrderModal from './OrderModal'

const plans = [
  {
    key: 'starter',
    price: 140,
    popular: false,
    color: 'from-blue-500 to-cyan-500',
    features: [
      { labelKey: 'pricing.features.pages5', included: true },
      { labelKey: 'pricing.features.responsive', included: true },
      { labelKey: 'pricing.features.seoBasic', included: true },
      { labelKey: 'pricing.features.contactForm', included: true },
      { labelKey: 'pricing.features.ecommerce', included: false },
      { labelKey: 'pricing.features.payment', included: false },
      { labelKey: 'pricing.features.support1', included: true },
    ],
  },
  {
    key: 'business',
    price: 220,
    popular: true,
    color: 'from-purple-500 to-blue-500',
    features: [
      { labelKey: 'pricing.features.pages10', included: true },
      { labelKey: 'pricing.features.responsive', included: true },
      { labelKey: 'pricing.features.seoAdvanced', included: true },
      { labelKey: 'pricing.features.contactForm', included: true },
      { labelKey: 'pricing.features.ecommerceBasic', included: true },
      { labelKey: 'pricing.features.payment', included: false },
      { labelKey: 'pricing.features.support3', included: true },
    ],
  },
  {
    key: 'premium',
    price: 300,
    popular: false,
    color: 'from-orange-500 to-red-500',
    features: [
      { labelKey: 'pricing.features.pages15', included: true },
      { labelKey: 'pricing.features.responsive', included: true },
      { labelKey: 'pricing.features.seoPremium', included: true },
      { labelKey: 'pricing.features.contactForm', included: true },
      { labelKey: 'pricing.features.ecommerceAdvanced', included: true },
      { labelKey: 'pricing.features.payment', included: true },
      { labelKey: 'pricing.features.support6', included: true },
    ],
  },
]

export default function Pricing({ language, t }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

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

  const openModal = (planName) => {
    setSelectedPlan(planName)
    setModalOpen(true)
  }

  return (
    <>
      <section
        id="pricing"
        ref={sectionRef}
        className="py-20 px-4 bg-gradient-to-b from-darker to-dark relative overflow-hidden"
      >
        {/* Decorative blur */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, transparent 70%)',
              left: '15%',
              top: '25%',
            }}
          />
          <div
            className="absolute w-64 h-64 rounded-full blur-3xl opacity-10 animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(0, 102, 255, 0.5) 0%, transparent 70%)',
              right: '10%',
              bottom: '20%',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div
            className={`text-center mb-16 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-gradient">{t(language, 'pricing.title')}</span>
            </h2>
            <p className="text-gray-400 text-lg mt-3">{t(language, 'pricing.subtitle')}</p>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-accentAlt mx-auto rounded-full mt-5" />
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <div
                key={plan.key}
                className={`relative transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${plan.popular ? 'md:-translate-y-5' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-accent to-purple-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-accent/30 whitespace-nowrap">
                      {t(language, 'pricing.popular')}
                    </span>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`group relative rounded-2xl p-8 flex flex-col border transition-all duration-300 ${
                    plan.popular
                      ? 'border-accent/50 shadow-2xl shadow-accent/20'
                      : 'border-gray-800 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10'
                  }`}
                  style={{
                    background: plan.popular
                      ? 'linear-gradient(135deg, rgba(0,102,255,0.07) 0%, rgba(124,58,237,0.07) 100%)'
                      : 'linear-gradient(135deg, rgba(18,18,18,0.98) 0%, rgba(10,10,10,0.98) 100%)',
                  }}
                >
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r ${plan.color}`} />

                  {/* Plan name & desc */}
                  <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-accent' : 'text-white'}`}>
                    {t(language, `pricing.${plan.key}.name`)}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">{t(language, `pricing.${plan.key}.desc`)}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-5xl font-black text-white">€{plan.price}</span>
                    <span className="text-gray-500 ml-2 text-sm">{t(language, 'pricing.oneTime')}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <span
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                            feature.included
                              ? 'bg-accent/15 text-accent'
                              : 'bg-gray-800/80 text-gray-600'
                          }`}
                        >
                          {feature.included ? '✓' : '✕'}
                        </span>
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}>
                          {t(language, feature.labelKey)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => openModal(t(language, `pricing.${plan.key}.name`))}
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-accent to-purple-500 text-white shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-105'
                        : 'border border-gray-700 text-gray-300 hover:border-accent hover:text-accent hover:bg-accent/5'
                    }`}
                  >
                    {t(language, 'pricing.cta')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageName={selectedPlan}
        language={language}
        t={t}
      />
    </>
  )
}
