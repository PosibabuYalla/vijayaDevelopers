import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'
import { IMAGES, BLOGS } from '../data/data'

const CATEGORIES = ['All', ...Array.from(new Set(BLOGS.map((b) => b.category)))]

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? BLOGS
    : BLOGS.filter((b) => b.category === activeCategory)

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden flex items-end">
        <img src={IMAGES.about} alt="Blogs" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(81,72,50,0.65)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 text-white">
          <p className="font-label text-xs uppercase tracking-widest2 text-teal-sage mb-2">Insights & Guides</p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold">Blogs</h1>
        </div>
      </section>

      {/* Filter pills + grid */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-5 py-2 rounded-full font-label text-sm font-semibold border transition-colors ${
                activeCategory === c
                  ? 'bg-teal text-white border-teal'
                  : 'bg-white text-charcoal border-sand-beige hover:border-teal'
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <RevealGroup key={activeCategory} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <RevealItem key={post.slug}>
              <Link
                to={`/blogs/${post.slug}`}
                className="group block bg-white rounded-xl3 overflow-hidden border border-sand-beige shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <img
                    src={IMAGES[post.image]}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-label font-semibold bg-teal text-white">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="font-label text-xs uppercase tracking-widest2 text-charcoal/40 mb-2">
                    {formatDate(post.date)} · {post.readTime}
                  </p>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-2 leading-snug">{post.title}</h3>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 font-label text-sm font-semibold text-teal group-hover:text-teal-dark transition-colors">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </div>
  )
}
