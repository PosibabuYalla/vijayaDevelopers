import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { CONTACT } from '../data/data'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Projects',
    to: '/projects',
    mega: [
      { label: 'All Projects', to: '/projects', status: '' },
      { label: 'Current Projects', to: '/projects?status=current', status: 'current' },
      { label: 'Future Projects', to: '/projects?status=future', status: 'future' },
      { label: 'Completed Projects', to: '/projects?status=completed', status: 'completed' },
    ],
  },
  { label: 'Our Programs', to: '/programs' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const activeMegaStatus =
    location.pathname === '/projects'
      ? new URLSearchParams(location.search).get('status') || ''
      : null

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
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Vijaya Developers" className="h-20 sm:h-24 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.mega ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setMegaOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-1 font-label text-sm font-medium transition-colors ${
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
                    {link.label} <ChevronDown size={14} />
                  </NavLink>
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
                          className={`block w-full text-left px-4 py-2 font-label text-sm transition-colors ${
                            activeMegaStatus === item.status
                              ? 'text-teal font-semibold bg-offwhite'
                              : 'text-charcoal hover:bg-offwhite hover:text-teal'
                          }`}
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
            <img src={logo} alt="Vijaya Developers" className="h-16 w-auto" />
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={28} color="#fff" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) =>
              link.mega ? (
                <div key={link.label}>
                  <button
                    onClick={() => handleMegaNav(link.to)}
                    className="font-display text-2xl text-white hover:text-teal-sage transition-colors mb-2 text-left"
                  >
                    {link.label}
                  </button>
                  {link.mega.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleMegaNav(item.to)}
                      className={`block font-label text-lg mb-1 pl-2 ${
                        activeMegaStatus === item.status
                          ? 'text-teal-sage font-semibold'
                          : 'text-white/80 hover:text-white'
                      }`}
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
