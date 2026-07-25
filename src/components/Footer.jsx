import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { CONTACT } from '../data/data'

export default function Footer() {
  return (
    <footer style={{ background: '#514832' }} className="text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
        {/* Brand */}
        <div>
          <div className="font-display text-2xl font-bold mb-1">Vijaya</div>
          <div className="font-label text-xs tracking-widest2 uppercase text-teal-sage mb-4">Developers</div>
          <p className="text-white/70 text-sm leading-relaxed mb-5">
            Trusted builders of DTCP-approved open plots, premium villas and gated communities in Vijayawada since 2007.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal flex items-center justify-center transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-label text-xs uppercase tracking-widest2 text-teal-sage mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {['Home','About Us','Projects','Gallery','Blogs','Contact'].map((l) => (
              <li key={l}>
                <Link to={l === 'Home' ? '/' : `/${l.toLowerCase().replace(' ','')}`} className="hover:text-white transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h4 className="font-label text-xs uppercase tracking-widest2 text-teal-sage mb-4">Projects</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              ['Vijaya Green City', '/projects/vijaya-green-city'],
              ['Vijaya Villas', '/projects/vijaya-villas'],
              ['Vijaya Enclave', '/projects/vijaya-enclave'],
              ['Vijaya Spring Fields', '/projects/vijaya-spring-fields'],
            ].map(([name, to]) => (
              <li key={name}>
                <Link to={to} className="hover:text-white transition-colors">{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-label text-xs uppercase tracking-widest2 text-teal-sage mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin size={15} className="mt-0.5 shrink-0 text-teal-sage" />{CONTACT.address}</li>
            <li className="flex gap-2"><Phone size={15} className="shrink-0 text-teal-sage" /><a href={CONTACT.tel} className="hover:text-white">{CONTACT.phone}</a></li>
            <li className="flex gap-2"><Mail size={15} className="shrink-0 text-teal-sage" /><a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a></li>
          </ul>
          {/* Newsletter */}
          <div className="mt-5 flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-l-lg bg-white/10 text-white placeholder-white/40 text-sm outline-none border border-white/10 focus:border-teal"
            />
            <button className="px-4 py-2 bg-teal hover:bg-teal-dark rounded-r-lg text-sm font-label font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Vijaya Developers. All rights reserved.</p>
        <div className="flex gap-4">
          {['Privacy Policy','Terms','Disclaimer'].map((l) => (
            <a key={l} href="#" className="hover:text-white/70 transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
