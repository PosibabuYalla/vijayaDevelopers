import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { CONTACT, SOCIAL, PROJECTS } from '../data/data'
import logo from '../assets/logo.png'
import footerBg from '../assets/footerBg.png'

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#1B2430' }}
      className="relative overflow-hidden text-white pt-16 pb-6"
    >
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative overflow-hidden">
        <img
          src={footerBg}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-auto pointer-events-none select-none"
          style={{
            filter: 'brightness(0)',
            opacity: 0.3,
            width: '85%',
            transform: 'translate(-50%, 15.5%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Vijaya Developers" className="h-30 w-auto -mb-2" />
            <p className="font-display italic text-gold text-sm tracking-wide mb-4">
              We Construct Your Dreams
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Trusted builders of DTCP & CRDA-approved open plots, premium villas and gated communities in Vijayawada since 2007.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: SOCIAL.facebook },
                { Icon: Instagram, href: SOCIAL.instagram },
                { Icon: Youtube, href: SOCIAL.youtube },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-brand flex items-center justify-center transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Projects', '/projects'],
                ['Our Programs', '/programs'],
                ['Gallery', '/gallery'],
                ['Blogs', '/blogs'],
                ['Careers', '/careers'],
                ['Contact', '/contact'],
              ].map(([l, to]) => (
                <li key={l}>
                  <Link to={to} className="hover:text-white transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-4">Projects</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {PROJECTS.map((p) => (
                <li key={p.slug}>
                  <Link to={`/projects/${p.slug}`} className="hover:text-white transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-4">Get in Touch</h4>
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
                className="flex-1 px-3 py-2 rounded-l-lg bg-white/10 text-white placeholder-white/40 text-sm outline-none border border-white/10 focus:border-gradient-brand"
              />
              <button className="px-4 py-2 bg-gradient-brand hover:bg-gradient-brand-dark rounded-r-lg text-sm font-label font-medium transition-colors">
                Subscribe
              </button>
            </div>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 text-center text-xs text-white/40">
        <p>
          Website Designed &amp; Developed by{' '}
          <a
            href="https://www.sabariyatech.in"
            target="_blank"
            rel="noreferrer"
            className="text-gradient-light font-semibold hover:text-white transition-colors"
          >
            SabariyaTech
          </a>
        </p>
      </div>
    </footer>
  )
}
