import { Link } from 'react-router-dom'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'
import { IMAGES, CONTACT } from '../data/data'

const TIMELINE = [
  { year: '2007', event: 'Founded in Vijayawada with a vision to deliver transparent, DTCP-approved real estate.' },
  { year: '2012', event: 'Launched our first gated community — setting a new standard for planned layouts.' },
  { year: '2017', event: 'Crossed 100+ happy families milestone across multiple projects.' },
  { year: '2022', event: 'Entered the premium villa segment with Vijaya Villas in Mangalagiri.' },
  { year: '2026', event: '220+ acres developed, 950+ families, 6 ongoing projects across Vijayawada.' },
]

const VALUES = [
  { icon: '🤝', title: 'Integrity', desc: 'Transparent dealings, clear documentation, no hidden costs.' },
  { icon: '⚖️', title: 'Legal Clarity', desc: 'Every project is DTCP-approved with clear title and survey settlement.' },
  { icon: '🌱', title: 'Sustainability', desc: 'Green spaces, avenue plantation and eco-conscious planning.' },
  { icon: '💎', title: 'Excellence', desc: 'Premium infrastructure and quality that stands the test of time.' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden flex items-end">
        <img src={IMAGES.about} alt="About" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(81,72,50,0.65)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 text-white">
          <p className="font-label text-xs uppercase tracking-widest2 text-teal-sage mb-2">Our Story</p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold">About Vijaya Developers</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="rounded-xl3 overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img src={IMAGES.greenCity} alt="Vijaya Green City" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-label text-xs uppercase tracking-widest2 text-teal mb-3">Who We Are</p>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-4">
                Building Vijayawada's future, one plot at a time.
              </h2>
              <p className="text-charcoal/70 mb-4">
                Vijaya Developers was founded in 2007 with a singular mission: to make premium, legally clear real estate accessible to every family in Vijayawada. Over 18 years, we have developed 220+ acres across Gannavaram, Mangalagiri, Nandigama Road and Kankipadu.
              </p>
              <p className="text-charcoal/70">
                Our projects are known for DTCP approval, clear titles, bank loan eligibility and world-class infrastructure. We don't just sell plots — we build communities where families thrive.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-charcoal">Our Mission, Vision & Values</h2>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <RevealItem key={v.title}>
                <div className="bg-offwhite border border-sand-beige rounded-xl2 p-6 text-center hover:border-teal transition-colors">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h4 className="font-label text-sm font-semibold text-charcoal mb-2">{v.title}</h4>
                  <p className="text-charcoal/60 text-sm">{v.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Stats band */}
      <section style={{ background: '#514832' }} className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[['18+','Years Experience'],['220+','Acres Developed'],['950+','Happy Families'],['24','Govt Approvals']].map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-4xl font-bold text-white mb-1">{v}</div>
              <div className="font-label text-xs uppercase tracking-widest2 text-teal-sage">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12">
          <p className="font-label text-xs uppercase tracking-widest2 text-teal mb-2">Our Journey</p>
          <h2 className="font-display text-3xl font-bold text-charcoal">Milestones That Define Us</h2>
        </Reveal>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-sand-beige" />
          <div className="space-y-8">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-teal text-white font-label text-xs font-bold flex items-center justify-center shrink-0 relative z-10">
                    {t.year}
                  </div>
                  <div className="bg-white border border-sand-beige rounded-xl2 p-4 flex-1">
                    <p className="text-charcoal/80 text-sm">{t.event}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={IMAGES.cta} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(81,72,50,0.75)' }} />
        <div className="relative z-10 text-center text-white max-w-xl mx-auto px-4">
          <Reveal>
            <h2 className="font-display text-3xl font-bold mb-4">Ready to invest in your future?</h2>
            <p className="text-white/75 mb-6">Talk to our team today and find the perfect plot or villa for you.</p>
            <Link to="/contact" className="inline-block px-8 py-3 rounded-full bg-teal text-white font-label font-semibold hover:bg-teal-dark transition-colors">
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
