import { Phone, MessageCircle, LandPlot, Home as HomeIcon, ShieldCheck, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { CONTACT, PROJECTS, IMAGES } from '../data/data'

const SITE_URL = 'https://vijayadeveloper.in'

const PROPERTY_TYPES = [
  {
    icon: LandPlot,
    title: 'Open Plots',
    desc: 'DTCP & CRDA-approved residential plots in gated communities across Vijayawada and surrounding areas. Clear title, bank loan eligible, full infrastructure.',
    link: '/open-plots-in-vijayawada',
  },
  {
    icon: HomeIcon,
    title: 'Premium Villas',
    desc: 'Spacious 4+1 BHK villas with premium construction quality, modern elevation and lifestyle amenities. RERA registered and vastu compliant.',
    link: '/projects/luxury-villas-kesarapalli-gannavaram',
  },
  {
    icon: ShieldCheck,
    title: 'Gated Communities',
    desc: "Fully planned gated communities with compound walls, 40' BT roads, avenue plantation, children's parks, club houses and 24×7 security.",
    link: '/projects',
  },
  {
    icon: TrendingUp,
    title: 'Investment Land',
    desc: 'Strategic land holdings near Vijayawada Airport, NH-16 and the Amaravati development corridor — locations with strong long-term appreciation history.',
    link: '/blogs/vijayawada-investment-hub',
  },
]

const TRUST_STATS = [
  ['18+', 'Years Experience'],
  ['220+', 'Acres Developed'],
  ['950+', 'Happy Families'],
  ['14', 'Projects Delivered'],
  ['6', 'Ongoing Projects'],
  ['24', 'Govt Approvals'],
]

export default function PropertiesVijayawada() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Properties in Vijayawada — Open Plots & Villas | Vijaya Developers',
    description: 'Browse DTCP & CRDA-approved properties in Vijayawada — open plots and premium villas in Gannavaram, Kankipadu, Gandigunta and Kondapavuluru. Vijaya Developers — 18+ years of trusted real estate.',
    url: `${SITE_URL}/properties-in-vijayawada`,
    provider: { '@type': 'Organization', name: 'Vijaya Developers', url: SITE_URL },
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Properties in Vijayawada', item: `${SITE_URL}/properties-in-vijayawada` },
    ],
  }

  return (
    <div>
      <SEO
        title="Properties in Vijayawada — Open Plots & Villas by Vijaya Developers"
        description="Browse DTCP & CRDA-approved properties in Vijayawada — open plots and premium villas in Gannavaram, Kankipadu, Gandigunta and Kondapavuluru. 18+ years, 950+ happy families."
        keywords="properties in Vijayawada, real estate Vijayawada, open plots Vijayawada, villas Vijayawada, buy property Vijayawada, residential properties Vijayawada, DTCP CRDA approved Vijayawada"
        path="/properties-in-vijayawada"
        jsonLd={[webPageSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative h-80 sm:h-[32rem] overflow-hidden flex items-end">
        <img
          src={IMAGES.villas}
          alt="Properties in Vijayawada — open plots and premium villas by Vijaya Developers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(27,36,48,0.72)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 text-white w-full">
          <Reveal>
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-3">Vijaya Developers · Vijayawada</p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold mb-4 leading-tight max-w-2xl">
              Properties in Vijayawada
            </h1>
            <p className="font-label text-base sm:text-lg text-white/80 mb-6 max-w-xl">
              DTCP &amp; CRDA-approved open plots and premium villas across Vijayawada, Gannavaram and surrounding areas.
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

      {/* Property types */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="mb-10">
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">What We Offer</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">Property Types in Vijayawada</h2>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPERTY_TYPES.map((pt) => (
            <RevealItem key={pt.title}>
              <Link to={pt.link} className="block bg-offwhite border border-sand-beige rounded-xl3 p-6 hover:shadow-md transition-shadow h-full">
                <pt.icon size={28} className="text-teal mb-3" />
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">{pt.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{pt.desc}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="mb-10">
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Our Portfolio</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">Properties for Sale in Vijayawada</h2>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PROJECTS.map((p) => (
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
            <h2 className="font-display text-2xl sm:text-4xl font-bold mb-4">Find the Right Property in Vijayawada</h2>
            <p className="font-label text-white/80 mb-8 text-lg">Our team will help you identify the best option for your budget and goals — no obligation.</p>
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
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Buyer Resources</p>
          <h2 className="font-display text-2xl font-bold text-charcoal">Property Guides for Vijayawada Buyers</h2>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { to: '/blogs/vijayawada-investment-hub', category: 'Market Insights', title: "5 Signs Vijayawada Is Andhra Pradesh's Next Big Investment Hub" },
            { to: '/blogs/open-plot-vs-villa', category: 'Buying Guide', title: 'Open Plot vs. Villa: Which Investment Suits You?' },
            { to: '/blogs/property-registration-guide', category: 'Legal & Documentation', title: 'A Step-by-Step Guide to Registering Your Property' },
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
