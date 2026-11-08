import { Phone, MessageCircle, ShieldCheck, FileCheck, LandPlot, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { CONTACT, PROJECTS } from '../data/data'
import openPlotLayoutImg from '../assets/HeroPageImages/Vijaya Developers open Plot.jpeg'

const SITE_URL = 'https://vijayadeveloper.in'

const FEATURES = [
  { icon: ShieldCheck, title: 'DTCP & CRDA Approved', desc: 'All layouts carry government approval for roads, drainage and utilities — a legal commitment, not a marketing promise.' },
  { icon: FileCheck, title: 'Clear Title & Survey Settlement', desc: 'Full legal verification and survey settlement documents provided with every project.' },
  { icon: LandPlot, title: 'Bank Loan Eligible', desc: 'Layouts pre-verified by banks, making plot financing straightforward for buyers.' },
  { icon: MapPin, title: 'Strategic Vijayawada Locations', desc: 'Plots near Vijayawada, Gannavaram Airport, NH-16 and the Amaravati development zone.' },
]

const TRUST_STATS = [
  ['18+', 'Years Experience'],
  ['220+', 'Acres Developed'],
  ['950+', 'Happy Families'],
  ['14', 'Projects Delivered'],
  ['6', 'Ongoing Projects'],
  ['24', 'Govt Approvals'],
]

export default function OpenPlotsVijayawada() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Open Plots in Vijayawada — DTCP & CRDA Approved Layouts | Vijaya Developers',
    description: 'Find DTCP & CRDA-approved open plots in Vijayawada with clear title, bank loan eligibility and full infrastructure. Vijaya Developers — 18+ years of trusted real estate.',
    url: `${SITE_URL}/open-plots-in-vijayawada`,
    provider: { '@type': 'Organization', name: 'Vijaya Developers', url: SITE_URL },
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Open Plots in Vijayawada', item: `${SITE_URL}/open-plots-in-vijayawada` },
    ],
  }

  const availablePlotProjects = PROJECTS.filter((p) => p.status !== 'completed')

  return (
    <div>
      <SEO
        title="Open Plots in Vijayawada — DTCP & CRDA Approved Layouts"
        description="Find DTCP & CRDA-approved open plots in Vijayawada with clear title, bank loan eligibility and full infrastructure. Vijaya Developers — 18+ years, 950+ happy families."
        keywords="open plots in Vijayawada, DTCP CRDA approved plots Vijayawada, plots for sale Vijayawada, buy land Vijayawada, residential plots Vijayawada, gated community plots Vijayawada"
        path="/open-plots-in-vijayawada"
        jsonLd={[webPageSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative h-80 sm:h-[32rem] overflow-hidden flex items-end">
        <img
          src={openPlotLayoutImg}
          alt="Open plots in Vijayawada — DTCP & CRDA approved gated community layouts by Vijaya Developers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(27,36,48,0.72)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 text-white w-full">
          <Reveal>
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-3">Vijaya Developers · Vijayawada</p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold mb-4 leading-tight max-w-2xl">
              Open Plots in Vijayawada
            </h1>
            <p className="font-label text-base sm:text-lg text-white/80 mb-6 max-w-xl">
              DTCP &amp; CRDA-approved layouts with clear title, bank loan eligibility and full infrastructure.
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

      {/* Features */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="mb-10">
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Why Vijaya Developers</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">Every Plot, Every Promise</h2>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <RevealItem key={f.title} className="bg-offwhite border border-sand-beige rounded-xl3 p-6">
              <f.icon size={28} className="text-teal mb-3" />
              <h3 className="font-display text-lg font-bold text-charcoal mb-2">{f.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">{f.desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Available Projects */}
      <section className="py-16 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="mb-10">
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Current Listings</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">Available Open Plots &amp; Villas</h2>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {availablePlotProjects.map((p) => (
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
            <h2 className="font-display text-2xl sm:text-4xl font-bold mb-4">Ready to Find Your Plot?</h2>
            <p className="font-label text-white/80 mb-8 text-lg">Talk to our team for a free, no-obligation site visit and investment guidance.</p>
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
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Learn More</p>
          <h2 className="font-display text-2xl font-bold text-charcoal">Guides for Plot Buyers in Vijayawada</h2>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { to: '/blog/open-plots-in-vijayawada', category: 'Buying Guide', title: "Open Plots in Vijayawada — A Complete Buyer's Guide for 2026" },
            { to: '/blogs/why-dtcp-crda-approval-matters', category: 'Buying Guide', title: 'Why DTCP & CRDA Approval Matters When Buying Open Plots' },
            { to: '/blog/crda-rera-approved-plots-vijayawada', category: 'Legal & Documentation', title: 'CRDA & RERA Approved Plots — What Buyers Must Verify' },
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
