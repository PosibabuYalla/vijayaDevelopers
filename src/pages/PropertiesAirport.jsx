import { Phone, MessageCircle, Plane, Route, TrainFront, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { CONTACT, PROJECTS, IMAGES } from '../data/data'

const SITE_URL = 'https://vijayadeveloper.in'

const LOCATION_ADVANTAGES = [
  { icon: Plane, title: '~4 km to Airport', desc: "Gannavaram International Airport is approximately 4 km from Kesarapalli — one of Andhra Pradesh's fastest-growing residential corridors." },
  { icon: TrainFront, title: '~2 km to Railway', desc: 'Railway station connectivity within 2 km makes daily commuting straightforward for working professionals and families.' },
  { icon: Route, title: '~3 km to NH-16', desc: 'Direct access to NH-16 — the arterial highway between Chennai, Vijayawada and Kolkata — adds significant long-term value.' },
  { icon: ShieldCheck, title: 'DTCP & CRDA Approved', desc: 'All listed projects carry DTCP & CRDA approval, clear title and bank loan eligibility — mandatory before any purchase decision.' },
]

const TRUST_STATS = [
  ['18+', 'Years Experience'],
  ['220+', 'Acres Developed'],
  ['950+', 'Happy Families'],
  ['14', 'Projects Delivered'],
  ['6', 'Ongoing Projects'],
  ['24', 'Govt Approvals'],
]

const AIRPORT_PROJECTS = PROJECTS.filter((p) =>
  ['luxury-villas-kesarapalli-gannavaram', 'premium-villas-Kesarapalli', 'premium-open-plots-kondapavuluru-village'].includes(p.slug)
)

export default function PropertiesAirport() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Properties Near Vijayawada Airport — Plots & Villas in Gannavaram | Vijaya Developers',
    description: 'Find DTCP & CRDA-approved properties near Vijayawada Gannavaram Airport — open plots and premium villas in Kesarapalli, 4 km from the airport. Vijaya Developers — 18+ years of trusted real estate.',
    url: `${SITE_URL}/properties-near-vijayawada-airport`,
    provider: { '@type': 'Organization', name: 'Vijaya Developers', url: SITE_URL },
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Properties Near Vijayawada Airport', item: `${SITE_URL}/properties-near-vijayawada-airport` },
    ],
  }

  return (
    <div>
      <SEO
        title="Properties Near Vijayawada Airport — Plots & Villas in Gannavaram"
        description="Find DTCP & CRDA-approved properties near Vijayawada Gannavaram Airport — open plots and premium villas in Kesarapalli, approx 4 km from the airport. Vijaya Developers — 18+ years of trusted real estate."
        keywords="properties near Vijayawada airport, plots near Gannavaram airport, villas near Vijayawada airport, Kesarapalli plots, Gannavaram real estate, properties near airport Vijayawada"
        path="/properties-near-vijayawada-airport"
        jsonLd={[webPageSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative h-80 sm:h-[32rem] overflow-hidden flex items-end">
        <img
          src={IMAGES.enclave}
          alt="Properties near Vijayawada Gannavaram Airport — open plots and villas in Kesarapalli by Vijaya Developers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(27,36,48,0.72)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 text-white w-full">
          <Reveal>
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-3">Gannavaram Airport Corridor · Vijayawada</p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold mb-4 leading-tight max-w-2xl">
              Properties Near Vijayawada Airport
            </h1>
            <p className="font-label text-base sm:text-lg text-white/80 mb-6 max-w-xl">
              DTCP &amp; CRDA-approved open plots and premium villas near Gannavaram International Airport — Kesarapalli's most trusted real estate.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-label font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <a
                href={CONTACT.tel}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-white font-label font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-charcoal py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-3 sm:grid-cols-6 gap-6">
          {TRUST_STATS.map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">{val}</div>
              <div className="font-label text-xs uppercase tracking-widest2 text-gradient-light mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Location advantages */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="mb-10">
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Why This Corridor</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">The Airport Corridor Advantage</h2>
          <p className="text-charcoal/70 mt-3 max-w-2xl">
            Kesarapalli and Kondapavuluru sit in the zone where airport proximity, highway access and railway connectivity converge — a combination that has historically driven consistent land appreciation near Vijayawada.
          </p>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATION_ADVANTAGES.map((adv) => (
            <RevealItem key={adv.title} className="bg-offwhite border border-sand-beige rounded-xl3 p-6">
              <adv.icon size={28} className="text-teal mb-3" />
              <h3 className="font-display text-lg font-bold text-charcoal mb-2">{adv.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">{adv.desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Airport area projects */}
      <section className="py-16 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="mb-10">
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Properties Near the Airport</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">Projects in the Gannavaram Corridor</h2>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AIRPORT_PROJECTS.map((p) => (
              <RevealItem key={p.slug}>
                <ProjectCard project={p} />
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="mt-8">
            <Link to="/projects" className="inline-flex items-center gap-2 font-label font-semibold text-gradient hover:underline">
              View All Projects →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-brand text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-4xl font-bold mb-4">Enquire About Airport Corridor Properties</h2>
            <p className="font-label text-white/80 mb-8 text-lg">Schedule a site visit to Kesarapalli or Kondapavuluru — our team will show you the properties and answer all your questions, with no pressure.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-charcoal font-label font-semibold hover:bg-white/90 transition-colors"
              >
                <MessageCircle size={20} /> WhatsApp Us
              </a>
              <a
                href={CONTACT.tel}
                className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-label font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone size={20} /> {CONTACT.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Blogs */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="mb-8">
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Further Reading</p>
          <h2 className="font-display text-2xl font-bold text-charcoal">Guides for the Gannavaram–Vijayawada Corridor</h2>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { to: '/blog/properties-near-vijayawada-airport', category: 'Market Insights', title: 'Properties Near Vijayawada Airport — Why the Gannavaram Corridor Attracts Investors' },
            { to: '/blog/plots-for-sale-in-gannavaram-kesarapalli', category: 'Buying Guide', title: "Plots for Sale in Gannavaram & Kesarapalli — Buyer's Area Guide 2026" },
            { to: '/blogs/vijayawada-investment-hub', category: 'Market Insights', title: "5 Signs Vijayawada Is Andhra Pradesh's Next Big Investment Hub" },
          ].map((b) => (
            <RevealItem key={b.to}>
              <Link
                to={b.to}
                className="block bg-white border border-sand-beige rounded-xl3 p-6 hover:shadow-md transition-shadow"
              >
                <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">{b.category}</p>
                <h3 className="font-display text-lg font-bold text-charcoal leading-snug">{b.title}</h3>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </div>
  )
}
