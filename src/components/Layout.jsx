import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingContact from './FloatingContact'
import LeadCaptureModal from './LeadCaptureModal'

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
      <LeadCaptureModal />
    </div>
  )
}
