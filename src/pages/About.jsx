import { Link } from 'react-router-dom'
import { CheckCircle2, HeartHandshake, Scale, Leaf, Gem } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'
import { IMAGES, CONTACT } from '../data/data'
import buildingFutureImg from "../assets/Building Vijayawada's future, one plot at a time..webp"

const TIMELINE = [
  { year: '2007', event: 'Founded in Vijayawada with a vision to deliver transparent, DTCP & CRDA-approved real estate.' },
  { year: '2012', event: 'Launched our first gated community — setting a new standard for planned layouts.' },
  { year: '2017', event: 'Crossed 100+ happy families milestone across multiple projects.' },
  { year: '2022', event: 'Entered the premium villa segment with Premium Villas @ Ramavarappadu.' },
  { year: '2026', event: '220+ acres developed, 950+ families, new launches at Gandigunta and Kondapavuluru.' },
]

const VALUES = [
  { icon: HeartHandshake, title: 'Integrity', desc: 'Transparent dealings, clear documentation, no hidden costs.' },
  { icon: Scale, title: 'Legal Clarity', desc: 'Every project is DTCP & CRDA-approved with clear title and survey settlement.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Green spaces, avenue plantation and eco-conscious planning.' },
  { icon: Gem, title: 'Excellence', desc: 'Premium infrastructure and quality that stands the test of time.' },
]

const COMPANY_INTRO = [
  'Expert in Land Investment',
  'Trusted Real Estate Company',
  'Customer First Approach',
  'Transparent Business Practices',
  'Premium Project Development',
]

const MANAGEMENT_TEAM = [
  { title: 'Directors', desc: "Steering the company's long-term strategy, project selection and growth across Vijayawada's key corridors." },
  { title: 'Management Team', desc: 'Overseeing day-to-day operations, project execution and quality across every ongoing development.' },
  { title: 'Sales Team', desc: 'Guiding customers through every project, plot size and pricing option to find the right fit for their needs.' },
  { title: 'Customer Support Team', desc: 'Available before, during and after your purchase — for site visits, documentation queries and after-sales assistance.' },
]

const GOVERNANCE = [
  { title: 'Ethical Business Practices', desc: 'Every deal is conducted fairly, with honesty as our foundation.' },
  { title: 'Transparency', desc: 'Clear pricing, clear documentation — no hidden terms.' },
  { title: 'Customer Commitment', desc: 'Support that continues well beyond registration.' },
  { title: 'Compliance', desc: 'Full adherence to DTCP & CRDA, RERA and local regulatory requirements.' },
  { title: 'Professional Management', desc: 'Experienced leadership overseeing every project end-to-end.' },
]

const LEGAL_TEAM = [
  { title: 'Legal Verification Members', desc: 'Dedicated specialists who verify every project before it is offered for sale.' },
  { title: 'Document Verification', desc: 'Thorough review of all sale, layout and identity documentation.' },
  { title: 'Title Verification', desc: 'Confirming clear, disputed-free ownership on every property.' },
  { title: 'Encumbrance Check', desc: 'Verifying the property is free of loans, liens or legal claims.' },
  { title: 'Registration Support', desc: 'Coordinating with the sub-registrar office through to final registration.' },
  { title: 'Layout Approval Verification', desc: 'Confirming DTCP & CRDA / RERA approval status before any plot is sold.' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden flex items-end">
        <img src={IMAGES.about} alt="About" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(27,36,48,0.65)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 text-white">
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-2">Our Story</p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold">About Vijaya Developers</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="rounded-xl3 overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img src={buildingFutureImg} alt="Building Vijayawada's future, one plot at a time" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-3">Who We Are</p>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-4">
                Building Vijayawada's future, one plot at a time.
              </h2>
              <p className="text-charcoal/70 mb-4">
                Vijaya Developers was founded in 2007 with a singular mission: to make premium, legally clear real estate accessible to every family in Vijayawada. Over 18 years, we have developed 220+ acres across Kesarapalli (Gannavaram), Ramavarappadu and Kankipadu — with new launches now underway at Gandigunta and Kondapavuluru villages.
              </p>
              <p className="text-charcoal/70 mb-6">
                Our projects are known for DTCP & CRDA approval, clear titles, bank loan eligibility and world-class infrastructure. We don't just sell plots — we build communities where families thrive.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {COMPANY_INTRO.map((v) => (
                  <div key={v} className="flex items-center gap-2 text-sm text-charcoal/80">
                    <CheckCircle2 size={15} className="text-teal shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-12">
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Leadership</p>
            <h2 className="font-display text-3xl font-bold text-charcoal">Vision, Mission &amp; Founder's Message</h2>
          </Reveal>
          <RevealGroup className="grid lg:grid-cols-2 gap-5 mb-6">
            <RevealItem>
              <div className="h-full bg-offwhite border border-sand-beige rounded-xl2 p-6">
                <h4 className="font-label text-sm font-semibold text-gradient uppercase tracking-widest2 mb-2">Our Vision</h4>
                <p className="text-charcoal/70 text-sm">
                  To be Andhra Pradesh's most trusted land investment company — transforming Vijayawada's growth corridors into thriving, legally secure communities where every family's investment is protected.
                </p>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="h-full bg-offwhite border border-sand-beige rounded-xl2 p-6">
                <h4 className="font-label text-sm font-semibold text-gradient uppercase tracking-widest2 mb-2">Our Mission</h4>
                <p className="text-charcoal/70 text-sm">
                  To deliver DTCP & CRDA-approved, legally verified open plots and premium villas with complete transparency — guiding every customer from first enquiry through registration and beyond.
                </p>
              </div>
            </RevealItem>
          </RevealGroup>
          <Reveal>
            <div className="bg-charcoal rounded-xl3 p-8 sm:p-10 text-center max-w-3xl mx-auto">
              <p className="font-display text-lg sm:text-xl text-white italic leading-relaxed mb-4">
                "When we started Vijaya Developers, we made one promise to ourselves — that every family who trusts us with their savings would get land that is legally clear, fairly priced, and genuinely valuable. Eighteen years and 950+ families later, that promise hasn't changed."
              </p>
              <p className="font-label text-sm font-semibold text-gradient-light">Founder &amp; Managing Director</p>
              <p className="font-label text-xs text-white/50">Vijaya Developers</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-12">
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Our People</p>
            <h2 className="font-display text-3xl font-bold text-charcoal">Management Team</h2>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MANAGEMENT_TEAM.map((m) => (
              <RevealItem key={m.title}>
                <div className="h-full bg-white border border-sand-beige rounded-xl2 p-6">
                  <h4 className="font-label text-sm font-semibold text-charcoal mb-2">{m.title}</h4>
                  <p className="text-charcoal/60 text-sm">{m.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-12">
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Governance</p>
            <h2 className="font-display text-3xl font-bold text-charcoal">Corporate Governance</h2>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {GOVERNANCE.map((g) => (
              <RevealItem key={g.title}>
                <div className="h-full bg-offwhite border border-sand-beige rounded-xl2 p-5 text-center">
                  <h4 className="font-label text-sm font-semibold text-charcoal mb-2">{g.title}</h4>
                  <p className="text-charcoal/60 text-xs">{g.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Legal Verification Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-12">
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Due Diligence</p>
            <h2 className="font-display text-3xl font-bold text-charcoal">Legal Verification Team</h2>
            <p className="text-charcoal/60 text-sm mt-3 max-w-xl mx-auto">Every project is screened by our dedicated legal verification team before it reaches a single customer.</p>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LEGAL_TEAM.map((l) => (
              <RevealItem key={l.title}>
                <div className="h-full bg-white border border-sand-beige rounded-xl2 p-5 flex gap-3">
                  <CheckCircle2 size={18} className="text-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-label text-sm font-semibold text-charcoal mb-1">{l.title}</h4>
                    <p className="text-charcoal/60 text-xs">{l.desc}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-charcoal">Our Core Values</h2>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <RevealItem key={v.title}>
                <div className="bg-offwhite border border-sand-beige rounded-xl2 p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-3">
                    <v.icon size={22} className="text-teal" />
                  </div>
                  <h4 className="font-label text-sm font-semibold text-charcoal mb-2">{v.title}</h4>
                  <p className="text-charcoal/60 text-sm">{v.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Stats band */}
      <section style={{ background: '#1B2430' }} className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[['18+','Years Experience'],['220+','Acres Developed'],['950+','Happy Families'],['24','Govt Approvals']].map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-4xl font-bold text-white mb-1">{v}</div>
              <div className="font-label text-xs uppercase tracking-widest2 text-gradient-light">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12">
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Our Journey</p>
          <h2 className="font-display text-3xl font-bold text-charcoal">Milestones That Define Us</h2>
        </Reveal>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-sand-beige" />
          <div className="space-y-8">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-brand text-white font-label text-xs font-bold flex items-center justify-center shrink-0 relative z-10">
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
        <div className="absolute inset-0" style={{ background: 'rgba(27,36,48,0.75)' }} />
        <div className="relative z-10 text-center text-white max-w-xl mx-auto px-4">
          <Reveal>
            <h2 className="font-display text-3xl font-bold mb-4">Ready to invest in your future?</h2>
            <p className="text-white/75 mb-6">Talk to our team today and find the perfect plot or villa for you.</p>
            <Link to="/contact" className="inline-block px-8 py-3 rounded-full bg-gradient-brand text-white font-label font-semibold hover:bg-gradient-brand-dark transition-colors">
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
