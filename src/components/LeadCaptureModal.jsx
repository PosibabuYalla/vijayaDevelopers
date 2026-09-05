import { useState, useEffect } from 'react'
import { X, CheckCircle2 } from 'lucide-react'
import { CONTACT } from '../data/data'

const SESSION_KEY = 'vd_lead_modal_shown'
const PHONE_PATTERN = /^[6-9]\d{9}$/

export default function LeadCaptureModal() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return
    const timer = setTimeout(() => setOpen(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    sessionStorage.setItem(SESSION_KEY, 'true')
    setOpen(false)
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!PHONE_PATTERN.test(form.phone)) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }
    setError(false)
    setSubmitting(true)
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Lead from ${form.name} — Vijaya Developers Website`,
          Name: form.name,
          Phone: form.phone,
          Source: 'Lead Capture Popup',
        }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok || !data || data.success === false || data.success === 'false') {
        console.error('FormSubmit error response:', data)
        throw new Error(data?.message || 'Submission failed')
      }
      sessionStorage.setItem(SESSION_KEY, 'true')
      setSubmitted(true)
    } catch (err) {
      setError(
        err.message && err.message !== 'Submission failed'
          ? err.message
          : 'Something went wrong. Please try again or call/WhatsApp us directly.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[150] bg-charcoal/70 flex items-center justify-center p-4"
      onClick={close}
    >
      <div
        className="relative w-full max-w-sm bg-white rounded-xl3 shadow-lg p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-offwhite hover:bg-sand-beige flex items-center justify-center text-charcoal/60 transition-colors"
        >
          <X size={16} />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center text-center gap-3 py-4">
            <CheckCircle2 size={44} className="text-teal" />
            <h3 className="font-display text-xl font-bold text-charcoal">Thank You!</h3>
            <p className="text-charcoal/70 text-sm">Our team will get in touch with you shortly.</p>
            <button
              onClick={close}
              className="mt-2 px-6 py-2 rounded-full bg-gradient-brand text-white font-label font-semibold hover:bg-gradient-brand-dark transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-1">Free Site Visit</p>
            <h3 className="font-display text-xl font-bold text-charcoal mb-1">Get a Callback</h3>
            <p className="text-charcoal/60 text-sm mb-5">Share your details and our team will reach out with the latest availability and pricing.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full px-4 py-3 rounded-xl border border-sand-beige bg-offwhite text-charcoal text-sm outline-none focus:border-gradient-brand transition-colors"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                inputMode="numeric"
                maxLength={10}
                required
                className="w-full px-4 py-3 rounded-xl border border-sand-beige bg-offwhite text-charcoal text-sm outline-none focus:border-gradient-brand transition-colors"
              />
              {error && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-full bg-gradient-brand text-white font-label font-semibold hover:bg-gradient-brand-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Request Callback'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
