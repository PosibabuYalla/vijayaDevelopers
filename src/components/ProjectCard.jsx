import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { IMAGES } from '../data/data'

const STATUS_STYLES = {
  current:   { label: 'Available Now', bg: 'bg-gradient-brand text-white' },
  future:    { label: 'New Launch', bg: 'bg-sand text-white' },
  completed: { label: 'Sold Out', bg: 'bg-charcoal text-white' },
}

export default function ProjectCard({ project }) {
  const { slug, name, location, status, price, tagline, image } = project
  const pill = STATUS_STYLES[status] || STATUS_STYLES.current

  return (
    <Link
      to={`/projects/${slug}`}
      className="group block bg-white rounded-xl3 overflow-hidden border border-sand-beige shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
        <img
          src={IMAGES[image]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-label font-semibold ${pill.bg}`}>
          {pill.label}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-1">{location}</p>
          <h3 className="font-display text-xl font-bold mb-1">{name}</h3>
          <p className="text-white/75 text-sm mb-3 line-clamp-2">{tagline}</p>
          <div className="flex items-center justify-between">
            <span className="font-label text-sm font-semibold text-gradient-light">{price}</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-gradient-brand transition-colors">
              <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
