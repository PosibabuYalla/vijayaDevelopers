import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { IMAGES, CONTACT } from '../data/data'

const INTERESTS = ['Open Plots','Premium Villas','Gated Community','Investment Consulting','General Enquiry']

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden flex items-end">
        <img src={IMAGES.cta} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(81,72,50,0.7)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 text-white">
          <p className="font-label text-xs uppercase tracking-widest2 text-teal-sage mb-2">Reach Us</p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold">Contact Us</h1>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-5">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Get in Touch</h2>
            </Reveal>
            {[
              { icon: MapPin, title: 'Visit Us', content: CONTACT.address },
              { icon: Phone, title: 'Call Us', content: CONTACT.phone, href: CONTACT.tel },
              { icon: Mail, title: 'Email Us', content: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: Clock, title: 'Working Hours', content: CONTACT.hours },
            ].map(({ icon: Icon, title, content, href }) => (
              <Reveal key={title}>
                <div className="flex gap-4 bg-white border border-sand-beige rounded-xl2 p-5">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-teal" />
                  </div>
                  <div>
                    <p className="font-label text-xs uppercase tracking-widest2 text-charcoal/50 mb-0.5">{title}</p>
                    {href ? (
                      <a href={href} className="text-charcoal hover:text-teal transition-colors text-sm">{content}</a>
                    ) : (
                      <p className="text-charcoal text-sm">{content}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Map placeholder */}
            <Reveal>
              <div className="rounded-xl2 overflow-hidden border border-sand-beige h-48 bg-sand-beige/30 flex items-center justify-center">
                <div className="text-center text-charcoal/40">
                  <MapPin size={32} className="mx-auto mb-2" />
                  <p className="font-label text-sm">1st Floor, 11th Line, Currency Nagar</p>
                  <p className="font-label text-xs">Ramavarappadu, Vijayawada, AP 520008</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal>
            <div className="bg-white border border-sand-beige rounded-xl3 p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                  <CheckCircle2 size={48} className="text-teal" />
                  <h3 className="font-display text-2xl font-bold text-charcoal">Thank You!</h3>
                  <p className="text-charcoal/70">We've received your enquiry. Our team will contact you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-2 px-6 py-2 rounded-full bg-teal text-white font-label font-semibold hover:bg-teal-dark transition-colors">
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-6">Book a Site Visit</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block font-label text-xs uppercase tracking-widest2 text-charcoal/60 mb-1">{f.label}</label>
                        <input
                          type={f.type}
                          name={f.name}
                          value={form[f.name]}
                          onChange={handleChange}
                          placeholder={f.placeholder}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-sand-beige bg-offwhite text-charcoal text-sm outline-none focus:border-teal transition-colors"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block font-label text-xs uppercase tracking-widest2 text-charcoal/60 mb-1">Interested In</label>
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sand-beige bg-offwhite text-charcoal text-sm outline-none focus:border-teal transition-colors"
                      >
                        <option value="">Select an option</option>
                        {INTERESTS.map((i) => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block font-label text-xs uppercase tracking-widest2 text-charcoal/60 mb-1">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-sand-beige bg-offwhite text-charcoal text-sm outline-none focus:border-teal transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-teal text-white font-label font-semibold hover:bg-teal-dark transition-colors"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
