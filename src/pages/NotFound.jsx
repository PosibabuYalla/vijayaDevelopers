import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 text-center px-4">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." noindex />
      <p className="font-display text-6xl font-bold text-gradient">404</p>
      <h1 className="font-display text-2xl font-bold text-charcoal">Page Not Found</h1>
      <p className="text-charcoal/60 max-w-md">
        The page you're looking for doesn't exist. It may have been moved, or the link may be incorrect.
      </p>
      <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-white font-label font-semibold hover:bg-gradient-brand-dark transition-colors">
        Back to Home
      </Link>
    </div>
  )
}
