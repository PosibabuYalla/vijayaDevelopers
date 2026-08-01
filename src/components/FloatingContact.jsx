import { useState, useEffect } from 'react'
import { Phone, MessageCircle, MapPin, Calendar } from 'lucide-react'
import { CONTACT } from '../data/data'

export default function FloatingContact() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Desktop: right-bottom round buttons */}
      <div className="hidden md:flex flex-col gap-3 fixed bottom-8 right-6 z-40">
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg transition-colors"
          title="WhatsApp"
        >
          <MessageCircle size={22} color="#fff" />
        </a>
        <a
          href={CONTACT.tel}
          className="w-12 h-12 rounded-full bg-gradient-brand hover:bg-gradient-brand-dark flex items-center justify-center shadow-lg transition-colors"
          title="Call"
        >
          <Phone size={22} color="#fff" />
        </a>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal flex">
        {[
          { icon: Phone, label: 'Call', href: CONTACT.tel, bg: '#FF6300' },
          { icon: MessageCircle, label: 'WhatsApp', href: CONTACT.whatsapp, bg: '#22c55e' },
          { icon: MapPin, label: 'Directions', href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`, bg: '#FF6300' },
          { icon: Calendar, label: 'Visit', href: '/contact', bg: '#E65900' },
        ].map(({ icon: Icon, label, href, bg }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-2 gap-0.5 text-white text-xs font-label"
            style={{ background: bg }}
          >
            <Icon size={18} />
            {label}
          </a>
        ))}
      </div>
    </>
  )
}
