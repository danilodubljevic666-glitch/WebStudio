import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_3ruybs2'
const TEMPLATE_ID = 'template_511qp8h'
const PUBLIC_KEY = 'ASltbUGew2GCqRWiC'

export default function OrderModal({ isOpen, onClose, packageName, language, t }) {
  const [form, setForm] = useState({ ime: '', prezime: '', email: '', telefon: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setStatus('idle')
      setForm({ ime: '', prezime: '', email: '', telefon: '' })
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ime: form.ime,
          prezime: form.prezime,
          email: form.email,
          telefon: form.telefon,
          paket: packageName,
        },
        PUBLIC_KEY
      )
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors duration-200 text-sm'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-gray-700/60 shadow-2xl"
        style={{ background: 'linear-gradient(135deg, rgba(15,15,15,0.98) 0%, rgba(8,8,8,0.98) 100%)' }}
      >
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-accent via-purple-500 to-accentAlt" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-accent transition-all duration-200 text-lg"
        >
          ×
        </button>

        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-white mb-2">{t(language, 'order.successTitle')}</h3>
              <p className="text-gray-400 text-sm">{t(language, 'order.successDesc')}</p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 bg-accent text-white rounded-xl font-semibold text-sm hover:bg-blue-600 transition-colors duration-200"
              >
                {t(language, 'order.close')}
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-1">
                  {t(language, 'order.subtitle')}
                </p>
                <h3 className="text-2xl font-black text-white">{t(language, 'order.title')}</h3>
              </div>

              {/* Selected package badge */}
              <div className="mb-6 flex items-center gap-2">
                <span className="text-gray-400 text-sm">{t(language, 'order.selectedPackage')}:</span>
                <span className="bg-accent/15 text-accent text-xs font-bold px-3 py-1 rounded-full border border-accent/30">
                  {packageName}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5 font-medium">{t(language, 'order.ime')}</label>
                    <input
                      type="text"
                      name="ime"
                      required
                      value={form.ime}
                      onChange={handleChange}
                      placeholder="Marko"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5 font-medium">{t(language, 'order.prezime')}</label>
                    <input
                      type="text"
                      name="prezime"
                      required
                      value={form.prezime}
                      onChange={handleChange}
                      placeholder="Marković"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-1.5 font-medium">{t(language, 'order.email')}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="marko@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-1.5 font-medium">{t(language, 'order.telefon')}</label>
                  <input
                    type="tel"
                    name="telefon"
                    required
                    value={form.telefon}
                    onChange={handleChange}
                    placeholder="+382 6X XXX XXX"
                    className={inputClass}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs">{t(language, 'order.error')}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 bg-gradient-to-r from-accent to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-accent/30 hover:scale-[1.02] transition-all duration-300 text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 mt-2"
                >
                  {status === 'sending' ? t(language, 'order.sending') : t(language, 'order.submit')}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
