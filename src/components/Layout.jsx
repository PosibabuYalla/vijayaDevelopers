import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingContact from './FloatingContact'
import LeadCaptureModal from './LeadCaptureModal'
import { PROJECTS, BLOGS } from '../data/data'

const STATIC_PATHS = ['/', '/about', '/projects', '/programs', '/careers', '/gallery', '/blogs', '/contact']

function isKnownRoute(pathname) {
  if (STATIC_PATHS.includes(pathname)) return true
  const projectMatch = pathname.match(/^\/projects\/([^/]+)$/)
  if (projectMatch) return PROJECTS.some((p) => p.slug === projectMatch[1])
  const blogMatch = pathname.match(/^\/blogs\/([^/]+)$/)
  if (blogMatch) return BLOGS.some((b) => b.slug === blogMatch[1])
  return false
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  // Once React has mounted, react-helmet-async owns per-route SEO tags.
  // Drop the static index.html fallbacks (kept for non-JS crawlers) to avoid duplicate meta/canonical tags.
  useEffect(() => {
    document.head.querySelectorAll('[data-default="true"]').forEach((el) => el.remove())
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
      {isKnownRoute(pathname) && <LeadCaptureModal />}
    </div>
  )
}
