import { useParams, Link } from 'react-router-dom'
import { CheckCircle2, Phone, MessageCircle, FileText, ArrowLeft, MapPin, School, Hospital, GraduationCap, Plane, TrainFront, Route } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'
import { IMAGES, CONTACT, PROJECTS } from '../data/data'

const STATUS_STYLES = {
  current:   { label: 'Available Now', bg: 'bg-gradient-brand text-white' },
  future:    { label: 'New Launch', bg: 'bg-sand text-white' },
  completed: { label: 'Sold Out', bg: 'bg-charcoal text-white' },
}

const LOCATION_TILES = [
  { icon: School, label: 'Schools', dist: '2 km' },
  { icon: Hospital, label: 'Hospitals', dist: '3 km' },
  { icon: GraduationCap, label: 'Colleges', dist: '5 km' },
  { icon: Plane, label: 'Airport', dist: '8 km' },
  { icon: TrainFront, label: 'Railway', dist: '12 km' },
  { icon: Route, label: 'Highway', dist: '1 km' },
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="font-display text-2xl text-charcoal">Project not found.</p>
        <Link to="/projects" className="text-gradient font-label font-semibold">← Back to Projects</Link>
      </div>
    )
  }

  const { name, location, status, price, area, plotSizes, tagline, image, description, amenities, approvals, availability } = project
  const pill = STATUS_STYLES[status]

  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 sm:h-[28rem] overflow-hidden flex items-end">
        <img src={IMAGES[image]} alt={name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(27,36,48,0.65)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 text-white w-full">
          <Link to="/projects" className="inline-flex items-center gap-1 text-white/70 hover:text-white font-label text-sm mb-4 transition-colors">
            <ArrowLeft size={14} /> Back to Projects
          </Link>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-label font-semibold mb-3 ${pill.bg}`}>{pill.label}</span>
          <div className="flex items-center gap-2 text-gradient-light font-label text-xs uppercase tracking-widest2 mb-2">
            <MapPin size={12} className="text-sand" /> {location}
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold mb-2">{name}</h1>
          <p className="text-white/75 text-lg">{tagline}</p>
        </div>
      </section>

      {/* Overview + Sidebar */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            {/* Stats */}
            <Reveal>
              <div className="grid grid-cols-3 gap-4">
                {[['Total Area', area], ['Plot Sizes', plotSizes], ['Starting Price', price]].map(([l, v]) => (
                  <div key={l} className="bg-white border border-sand-beige rounded-xl2 p-4 text-center">
                    <div className="font-display text-xl font-bold text-gradient mb-1">{v}</div>
                    <div className="font-label text-xs uppercase tracking-widest2 text-charcoal/60">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Description */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-3">Overview</h2>
              <p className="text-charcoal/70">{description}</p>
            </Reveal>

            {/* Amenities */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 bg-white border border-sand-beige rounded-xl p-3">
                    <CheckCircle2 size={15} className="text-teal shrink-0" />
                    <span className="text-sm text-charcoal">{a}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Approvals */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Approvals</h2>
              <div className="flex flex-wrap gap-3">
                {approvals.map((a) => (
                  <span key={a} className="flex items-center gap-1.5 px-4 py-2 bg-teal/10 border border-teal/20 rounded-full text-sm font-label text-gradient-dark">
                    <CheckCircle2 size={13} className="text-teal-dark" /> {a}
                    <span className="ml-1 text-xs bg-gradient-brand text-white px-2 py-0.5 rounded-full">Verified</span>
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Plot Availability */}
            {availability.length > 0 && (
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Plot Availability</h2>
                <div className="overflow-x-auto rounded-xl2 border border-sand-beige">
                  <table className="w-full text-sm">
                    <thead style={{ background: '#1B2430' }} className="text-white">
                      <tr>
                        {['Plot Size','Facing','Status','Price'].map((h) => (
                          <th key={h} className="px-4 py-3 text-left font-label text-xs uppercase tracking-widest2">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {availability.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}>
                          <td className="px-4 py-3 font-semibold text-charcoal">{row.size}</td>
                          <td className="px-4 py-3 text-charcoal/70">{row.facing}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-label font-semibold ${row.status === 'Available' || row.status === 'Pre-Launch' ? 'bg-teal/10 text-gradient-dark' : 'bg-charcoal/10 text-charcoal'}`}>
                              {row.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-semibold text-charcoal">{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            )}

            {/* Location Advantages */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Location Advantages</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {LOCATION_TILES.map((t) => (
                  <div key={t.label} className="bg-white border border-sand-beige rounded-xl2 p-4 text-center">
                    <t.icon size={22} className="text-teal mx-auto mb-1" />
                    <div className="font-label text-sm font-semibold text-charcoal">{t.label}</div>
                    <div className="text-xs text-gradient font-label">{t.dist}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sticky Sidebar */}
          <div>
            <div className="sticky top-24 bg-white border border-sand-beige rounded-xl3 p-6 shadow-sm space-y-4">
              <h3 className="font-display text-xl font-bold text-charcoal">Enquire Now</h3>
              <p className="text-charcoal/60 text-sm">Get pricing, availability and schedule a free site visit.</p>
              <a href={CONTACT.tel} className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-brand text-white font-label font-semibold hover:bg-gradient-brand-dark transition-colors">
                <Phone size={16} /> Call Us
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-green-500 text-white font-label font-semibold hover:bg-green-600 transition-colors">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <button className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-sand-beige text-charcoal font-label font-semibold hover:border-gradient-brand transition-colors">
                <FileText size={16} /> Download Brochure
              </button>
              <div className="pt-2 border-t border-sand-beige text-xs text-charcoal/50 text-center">
                Mon–Sat · 9:30 AM – 7:00 PM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        <img src={IMAGES.cta} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(27,36,48,0.75)' }} />
        <div className="relative z-10 text-center text-white max-w-xl mx-auto px-4">
          <Reveal>
            <h2 className="font-display text-3xl font-bold mb-4">Interested in {name}?</h2>
            <p className="text-white/75 mb-6">Book a free site visit and see it for yourself.</p>
            <Link to="/contact" className="inline-block px-8 py-3 rounded-full bg-gradient-brand text-white font-label font-semibold hover:bg-gradient-brand-dark transition-colors">
              Book Site Visit
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
