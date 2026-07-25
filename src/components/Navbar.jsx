import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { CONTACT } from '../data/data'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Projects',
    mega: [
      { label: 'Current Projects', to: '/projects?status=current' },
      { label: 'Future Projects', to: '/projects?status=future' },
      { label: 'Completed Projects', to: '/projects?status=completed' },
    ],
  },
  { label: 'Gallery', to: '/#gallery' },
  { label: 'Blogs', to: '/#blogs' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMegaNav = (to) => {
    setMegaOpen(false)
    setMobileOpen(false)
    navigate(to)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span
              className="font-display text-xl font-bold"
              style={{ color: scrolled ? '#514832' : '#fff' }}
            >
              Vijaya
            </span>
            <span
              className="font-label text-xs tracking-widest2 uppercase"
              style={{ color: scrolled ? '#68A39F' : '#A3B8BB' }}
            >
              Developers
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.mega ? (
                <div key={link.label} className="relative">
                  <button
                    className={`flex items-center gap-1 font-label text-sm font-medium transition-colors ${
                      scrolled ? 'text-charcoal hover:text-teal' : 'text-white/90 hover:text-white'
                    }`}
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                    onClick={() => setMegaOpen((v) => !v)}
                  >
                    {link.label} <ChevronDown size={14} />
                  </button>
                  {megaOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl2 shadow-lg border border-sand-beige py-2"
                      onMouseEnter={() => setMegaOpen(true)}
                      onMouseLeave={() => setMegaOpen(false)}
                    >
                      {link.mega.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleMegaNav(item.to)}
                          className="block w-full text-left px-4 py-2 font-label text-sm text-charcoal hover:bg-offwhite hover:text-teal transition-colors"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    `font-label text-sm font-medium transition-colors ${
                      scrolled
                        ? isActive
                          ? 'text-teal'
                          : 'text-charcoal hover:text-teal'
                        : isActive
                        ? 'text-white'
                        : 'text-white/90 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-5 py-2 rounded-full font-label text-sm font-semibold bg-teal text-white hover:bg-teal-dark transition-colors"
            >
              Book Site Visit
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} color={scrolled ? '#514832' : '#fff'} />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-charcoal flex flex-col p-8">
          <div className="flex justify-between items-center mb-10">
            <span className="font-display text-2xl text-white font-bold">Vijaya Developers</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={28} color="#fff" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) =>
              link.mega ? (
                <div key={link.label}>
                  <p className="font-label text-teal-sage text-xs uppercase tracking-widest2 mb-2">
                    {link.label}
                  </p>
                  {link.mega.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleMegaNav(item.to)}
                      className="block font-label text-lg text-white/80 hover:text-white mb-1 pl-2"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-2xl text-white hover:text-teal-sage transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <div className="mt-auto">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="block text-center px-6 py-3 rounded-full bg-teal text-white font-label font-semibold text-base"
            >
              Book Site Visit
            </a>
          </div>
        </div>
      )}
    </>
  )
}
