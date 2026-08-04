import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'
import ZigzagGallery from '../components/ZigzagGallery'
import { GALLERY, CONSTRUCTION_IMAGES, CLIENT_DISCUSSION_IMAGES, TREKKING_IMAGES } from '../data/data'

const ZIGZAG_SECTIONS = [
  { title: 'Constructions', subtitle: 'Progress on the Ground', images: CONSTRUCTION_IMAGES, columns: 2 },
  { title: 'Client Discussions', subtitle: 'Building Relationships', images: CLIENT_DISCUSSION_IMAGES, columns: 3 },
  { title: 'Treakings', subtitle: 'Team Adventures', images: TREKKING_IMAGES, columns: 2 },
]

const CATEGORIES = ['All', ...Array.from(new Set(GALLERY.map((g) => g.category)))]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIdx, setLightboxIdx] = useState(null)

  const filtered = activeCategory === 'All'
    ? GALLERY
    : GALLERY.filter((g) => g.category === activeCategory)

  const openLightbox = (idx) => setLightboxIdx(idx)
  const closeLightbox = () => setLightboxIdx(null)
  const showNext = () => setLightboxIdx((i) => (i + 1) % filtered.length)
  const showPrev = () => setLightboxIdx((i) => (i - 1 + filtered.length) % filtered.length)

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden flex items-end">
        <img src={CONSTRUCTION_IMAGES[3]} alt="Gallery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(27,36,48,0.65)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 text-white">
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-2">A Visual Tour</p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold">Gallery</h1>
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
                  ? 'bg-gradient-brand text-white border-transparent'
                  : 'bg-white text-charcoal border-sand-beige hover:border-gradient-brand'
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <RevealGroup key={activeCategory} className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {filtered.map((g, idx) => (
            <RevealItem key={g.id} className="mb-5 break-inside-avoid">
              <button
                onClick={() => openLightbox(idx)}
                className="group relative block w-full rounded-xl3 overflow-hidden border border-sand-beige"
              >
                <img
                  src={g.image}
                  alt={g.caption}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-0.5">{g.category}</p>
                  <p className="font-label text-sm font-semibold">{g.caption}</p>
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Zig-zag category galleries */}
      {ZIGZAG_SECTIONS.map((s) => (
        <section key={s.title} className="py-14 max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-10">
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">{s.subtitle}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">{s.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ZigzagGallery images={s.images} columns={s.columns} />
          </Reveal>
        </section>
      ))}

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[200] bg-charcoal/95 flex items-center justify-center p-4 sm:p-10"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showPrev() }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIdx].image}
              alt={filtered[lightboxIdx].caption}
              className="w-full max-h-[75vh] object-contain rounded-xl2"
            />
            <div className="text-center mt-4">
              <p className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-1">
                {filtered[lightboxIdx].category}
              </p>
              <p className="font-label text-white text-sm font-semibold">{filtered[lightboxIdx].caption}</p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); showNext() }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  )
}
