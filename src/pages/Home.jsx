import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown, CheckCircle2, Star, ChevronLeft, ChevronRight, Plus, Minus,
  LandPlot, Home as HomeIcon, Building2, TrendingUp, FileText, Landmark, ClipboardCheck, MapPin,
  ShieldCheck, FileCheck, Compass, Construction, Wallet, Users, Headphones,
  Phone, MessageCircle, Route, TreePine,
} from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { CONTACT, PROJECTS, PRICING, PROGRAMS } from '../data/data'
import villaExteriorImg from '../assets/HeroPageImages/Ram Architects.jpeg'
import openPlotLayoutImg from '../assets/HeroPageImages/Vijaya Developers open Plot.jpeg'
import townhomesDuskImg from '../assets/HeroPageImages/Ra, Architects.jpeg'
import heroImg from '../assets/heroImg.png'

const BROCHURE_WHATSAPP = `${CONTACT.whatsapp}?text=${encodeURIComponent('Hi, I would like to download the project brochure.')}`

const HERO_HIGHLIGHTS = [
  'Expert Land Investment Company',
  'Premium Gated Communities',
  '100% Legal Verification',
  'Bank Loan Assistance',
  'Secure Registration',
  'Trusted by Hundreds of Families',
]

const PROJECT_LOCATIONS = ['Kesarapalli · Gannavaram', 'Ramavarappadu', 'Gandigunta Village', 'Kondapavuluru Village']

/* ── TRUST STATS ── */
function useCountUp(target, active) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = Math.ceil(target / 60)
    const id = setInterval(() => {
      start += step
      if (start >= target) { setVal(target); clearInterval(id) }
      else setVal(start)
    }, 24)
    return () => clearInterval(id)
  }, [active, target])
  return val
}

const STATS = [
  { value: 18, suffix: '+', label: 'Years Experience' },
  { value: 220, suffix: '+', label: 'Acres Developed' },
  { value: 950, suffix: '+', label: 'Happy Families' },
  { value: 14, suffix: '', label: 'Projects Delivered' },
  { value: 6, suffix: '', label: 'Ongoing Projects' },
  { value: 24, suffix: '', label: 'Govt Approvals' },
]

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const count = useCountUp(value, active)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <div className="font-label text-xs uppercase tracking-widest2 text-gradient-light">{label}</div>
    </div>
  )
}

/* ── SERVICES ── */
const SERVICES = [
  { icon: LandPlot, title: 'Open Plot Development', desc: 'DTCP & CRDA-approved layouts, ready to build your dream on.', image: openPlotLayoutImg, featured: true },
  { icon: HomeIcon, title: 'Villa Development', desc: 'Contemporary villas with premium finishes.' },
  { icon: Building2, title: 'Gated Communities', desc: 'Secure, amenity-rich planned townships.' },
  { icon: TrendingUp, title: 'Investment Consulting', desc: 'Expert guidance to maximise your returns.' },
  { icon: FileText, title: 'Documentation Support', desc: 'End-to-end paperwork, handled for you.' },
  { icon: Landmark, title: 'Bank Loan Assistance', desc: 'Fast-tracked approvals with partner banks.' },
  { icon: ClipboardCheck, title: 'Registration Support', desc: 'Smooth, transparent registration process.' },
  { icon: MapPin, title: 'Site Visits', desc: 'Free guided visits at your convenience.' },
]

/* ── WHY US ── */
const WHY = [
  { icon: ShieldCheck, title: 'DTCP & CRDA Approved', desc: 'Every layout carries full government approval.', image: 'enclave', featured: true },
  { icon: FileCheck, title: 'Clear Legal Docs', desc: 'Title-verified, dispute-free documentation.' },
  { icon: Compass, title: 'Prime Locations', desc: 'Handpicked plots in high-growth corridors.' },
  { icon: Construction, title: 'Premium Infrastructure', desc: 'Wide roads, drainage and underground cabling.' },
  { icon: TrendingUp, title: 'High Appreciation', desc: '25–40% value growth across our projects.' },
  { icon: Wallet, title: 'Transparent Pricing', desc: 'No hidden costs, ever.' },
  { icon: Users, title: 'Trusted Team', desc: '18+ years of proven, honest service.' },
  { icon: Headphones, title: 'Customer Support', desc: "We're with you well beyond registration." },
]

/* ── JOURNEY ── */
const JOURNEY = [
  { step: '01', title: 'Explore', desc: 'Browse our projects online or visit our office.' },
  { step: '02', title: 'Site Visit', desc: 'Schedule a free guided site visit at your convenience.' },
  { step: '03', title: 'Select Plot', desc: 'Choose your ideal plot size, facing and location.' },
  { step: '04', title: 'Documentation', desc: 'We handle all legal paperwork and due diligence.' },
  { step: '05', title: 'Registration', desc: 'Smooth, transparent registration process.' },
  { step: '06', title: 'Build Your Dream Home', desc: 'Start construction and live your dream.' },
]

/* ── TESTIMONIALS ── */
const TESTIMONIALS = [
  { name: 'Suresh Reddy', project: 'Vijaya Green City', rating: 5, text: 'Excellent experience from site visit to registration. The team was transparent and professional throughout. My plot in Green City has already appreciated 30% in two years!' },
  { name: 'Lakshmi Prasad', project: 'Vijaya Villas', rating: 5, text: 'The villa exceeded our expectations. Premium finishes, beautiful landscaping, and the Vijaya team was with us every step of the way. Highly recommend!' },
  { name: 'Anil Kumar', project: 'Vijaya Enclave', rating: 5, text: 'Booked a pre-launch plot in Enclave. The location is strategic and the team\'s credibility gave us full confidence. Looking forward to a great investment.' },
]

/* ── FAQ ── */
const FAQS = [
  { q: 'Are all your projects DTCP & CRDA approved?', a: 'Yes. All our current and completed projects carry full DTCP & CRDA approval from the Andhra Pradesh government, ensuring legal clarity and bank loan eligibility.' },
  { q: 'Can I get a bank loan for your plots?', a: 'Absolutely. Our projects are approved by leading nationalised and private banks. We assist with the entire loan documentation process at no extra charge.' },
  { q: 'Is the pricing all-inclusive?', a: 'Our quoted price per sq.yd is transparent. Registration charges, development charges and any applicable taxes are clearly communicated upfront — no hidden costs.' },
  { q: 'How do I schedule a site visit?', a: 'Simply call us, WhatsApp, or fill the contact form. We arrange free guided site visits Monday–Saturday, 9:30 AM to 7:00 PM.' },
  { q: 'What is the expected appreciation on your plots?', a: 'Plots in our completed projects have appreciated 25–40% over 3 years. Vijayawada\'s infrastructure growth and connectivity make it one of AP\'s top investment destinations.' },
  { q: 'How long does registration take?', a: 'Once documentation is complete, registration is typically done within 7–10 working days. Our team coordinates with the sub-registrar office on your behalf.' },
]

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const id = setInterval(() => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length), 6500)
    return () => clearInterval(id)
  }, [])

  const FEATURED_IMAGES = [villaExteriorImg, openPlotLayoutImg, townhomesDuskImg]
  const featured = PROJECTS.filter((p) => p.status === 'current').slice(0, 3)
    .map((p, i) => ({ ...p, image: FEATURED_IMAGES[i % FEATURED_IMAGES.length] }))

  return (
    <div>
      {/* ── 1. HERO ── */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-28 pb-16">
        <img
          src={heroImg}
          alt="Vijaya Developers aerial view"
          className="absolute inset-0 w-full h-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(27,36,48,0.35) 0%, rgba(27,36,48,0.25) 40%, rgba(27,36,48,0.55) 100%)' }} />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <Reveal>
            <p className="font-label text-xs uppercase tracking-widest3 text-gradient-light mb-4">
              DTCP & CRDA-Approved · Vijayawada
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Invest in Tomorrow.<br />Own Premium Open Plots &amp; Villas.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/80 text-lg mb-3 max-w-xl mx-auto">
              18+ years of trust. DTCP & CRDA-approved gated communities, premium villas and open plots in Vijayawada's fastest-growing corridors.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="font-label text-sm font-semibold text-gradient-light mb-2">
              Open Plots from {PRICING.openPlotGannavaram} · Villas from {PRICING.villaStarting}
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="text-white/60 text-xs font-label uppercase tracking-widest2 mb-8">
              {PROJECT_LOCATIONS.join(' · ')}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/projects"
                className="px-8 py-3 rounded-full bg-white text-charcoal font-label font-semibold hover:bg-offwhite transition-colors"
              >
                Explore Projects
              </Link>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 rounded-full border border-white/50 text-white font-label font-semibold backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                Book Site Visit
              </a>
              <a
                href={BROCHURE_WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 rounded-full border border-white/50 text-white font-label font-semibold backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                Download Brochure
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
              {HERO_HIGHLIGHTS.map((h) => (
                <span key={h} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/85 text-xs font-label backdrop-blur-sm">
                  <CheckCircle2 size={12} className="text-teal-sage shrink-0" /> {h}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60">
          <span className="font-label text-xs uppercase tracking-widest2">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </div>
      </section>

      {/* ── 2. TRUST STATS ── */}
      <section style={{ background: '#1B2430' }} className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {STATS.map((s) => <StatCounter key={s.label} {...s} />)}
        </div>
      </section>

      {/* ── 3. ABOUT ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="relative">
            <div className="relative rounded-xl3 overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img src={villaExteriorImg} alt="About Vijaya Developers" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-6 right-6 bg-white rounded-xl2 shadow-lg px-5 py-4 text-center">
              <div className="font-display text-3xl font-bold text-gradient">18+</div>
              <div className="font-label text-xs uppercase tracking-widest2 text-charcoal">Years of Trust</div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-3">About Vijaya Developers</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-5">
                A legacy of trust, built one plot at a time.
              </h2>
              <p className="text-charcoal/70 mb-6">
                Since 2007, Vijaya Developers has been transforming Vijayawada's landscape with DTCP & CRDA-approved open plots, premium villas and thoughtfully planned gated communities. Our commitment to transparency, legal clarity and customer satisfaction has earned the trust of 950+ families.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['DTCP & CRDA Approved Projects','Clear Legal Documentation','Prime Location Selection','Transparent Pricing','Bank Loan Assistance','18+ Years Experience','950+ Happy Families','24 Govt Approvals'].map((v) => (
                  <div key={v} className="flex items-center gap-2 text-sm text-charcoal/80">
                    <CheckCircle2 size={15} className="text-teal shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-white font-label font-semibold hover:bg-gradient-brand-dark transition-colors">
                Know More
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="hairline mx-auto max-w-5xl" />

      {/* ── 4. SERVICES ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12">
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">What We Offer</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">Our Services</h2>
        </Reveal>
        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[190px]">
          {SERVICES.map((s) => (
            <RevealItem
              key={s.title}
              className={s.featured ? 'sm:col-span-2 sm:row-span-2' : ''}
            >
              {s.featured ? (
                <div className="group relative h-full rounded-xl3 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <div className="w-11 h-11 rounded-full bg-gradient-brand flex items-center justify-center mb-3">
                      <s.icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-white/75 text-sm">{s.desc}</p>
                  </div>
                </div>
              ) : (
                <div className="h-full bg-white border border-sand-beige rounded-xl2 p-5 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mb-3 shrink-0">
                    <s.icon size={18} className="text-teal" />
                  </div>
                  <p className="font-label text-sm font-semibold text-charcoal mb-1">{s.title}</p>
                  <p className="text-charcoal/60 text-xs leading-relaxed">{s.desc}</p>
                </div>
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ── 5. WHY US ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="mb-10">
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Why Choose Us</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">8 Reasons to Trust Vijaya</h2>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY.map((w) => (
              <RevealItem key={w.title}>
                <div className="h-full bg-offwhite border border-sand-beige rounded-xl2 p-6 hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                    <w.icon size={20} className="text-teal" />
                  </div>
                  <p className="font-label text-sm font-semibold text-charcoal mb-1.5">{w.title}</p>
                  <p className="text-charcoal/60 text-xs leading-relaxed">{w.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── 6. FEATURED PROJECTS ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Our Portfolio</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">Featured Projects</h2>
          </div>
          <Link to="/projects" className="font-label text-sm font-semibold text-gradient hover:text-gradient-dark flex items-center gap-1">
            View All Projects →
          </Link>
        </Reveal>
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <RevealItem key={p.slug}>
              <ProjectCard project={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ── 7. INVESTMENT BENEFITS ── */}
      <section style={{ background: '#1B2430' }} className="py-20 relative overflow-hidden">
        {/* faint grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-3">Why Invest</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Land is the only asset that never depreciates.
            </h2>
            <p className="text-white/70">
              Vijayawada is one of Andhra Pradesh's fastest-growing cities. Strategic infrastructure, connectivity and government investment make it a prime destination for real estate investment.
            </p>
          </Reveal>
          <RevealGroup className="grid grid-cols-2 gap-4">
            {[
              { icon: TrendingUp, title: 'Consistent Appreciation', desc: '25–40% appreciation in 3 years across our projects.' },
              { icon: Construction, title: 'Growth Corridors', desc: 'Plots near Amaravati, Gannavaram, Gandigunta and Kondapavuluru.' },
              { icon: Route, title: 'Connectivity', desc: 'NH-16, airport, railway and expressway access.' },
              { icon: TreePine, title: 'Infrastructure Development', desc: 'Wide roads, underground cabling, parks and security.' },
            ].map((b) => (
              <RevealItem key={b.title}>
                <div className="bg-white/10 border border-white/10 rounded-xl2 p-5 hover:bg-white/15 transition-colors">
                  <b.icon size={22} className="text-teal-sage mb-2" />
                  <h4 className="font-label text-sm font-semibold text-white mb-1">{b.title}</h4>
                  <p className="text-white/60 text-xs">{b.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── 8. CUSTOMER JOURNEY ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12">
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">How It Works</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">Your Journey to Ownership</h2>
        </Reveal>
        <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {JOURNEY.map((j, i) => (
            <RevealItem key={j.step}>
              <div className="relative text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-brand text-white font-display font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {j.step}
                </div>
                {i < JOURNEY.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] right-[-50%] h-px bg-sand-beige" />
                )}
                <h4 className="font-label text-sm font-semibold text-charcoal mb-1">{j.title}</h4>
                <p className="text-charcoal/60 text-xs">{j.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ── 8.5 OUR PROGRAMS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4 text-center sm:text-left">
            <div>
              <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">More Than Business</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">Our Programs</h2>
            </div>
            <Link to="/programs" className="font-label text-sm font-semibold text-gradient hover:text-gradient-dark flex items-center gap-1 justify-center sm:justify-start">
              View All Programs →
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-charcoal/60 text-sm max-w-2xl mb-10">
              Beyond plots and villas, we show up for our community — through spiritual traditions, selfless seva like blanket and food distribution, and an unwavering commitment to trust and safety. Not for business. Simply because it matters.
            </p>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((p) => (
              <RevealItem key={p.title}>
                <div className="h-full bg-offwhite border border-sand-beige rounded-xl3 p-7 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-3">
                    <p.icon size={22} className="text-teal" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-1">{p.title}</h3>
                  <p className="text-charcoal/60 text-sm mb-4">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-charcoal/80">
                        <CheckCircle2 size={14} className="text-teal shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── 9. TESTIMONIALS ── */}
      <section style={{ background: '#1B2430' }} className="py-20 relative overflow-hidden">
        <div className="absolute top-4 left-8 font-display text-[12rem] font-bold text-white/5 leading-none select-none">"</div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-8">What Our Clients Say</p>
          </Reveal>
          <div className="min-h-[180px] flex flex-col items-center justify-center">
            <div className="flex gap-1 mb-4">
              {Array(TESTIMONIALS[testimonialIdx].rating).fill(0).map((_, i) => (
                <Star key={i} size={16} fill="#FF6300" color="#FF6300" />
              ))}
            </div>
            <p className="font-display text-xl sm:text-2xl text-white mb-6 italic leading-relaxed">
              "{TESTIMONIALS[testimonialIdx].text}"
            </p>
            <p className="font-label text-sm font-semibold text-white">{TESTIMONIALS[testimonialIdx].name}</p>
            <p className="font-label text-xs text-gradient-light">{TESTIMONIALS[testimonialIdx].project}</p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => setTestimonialIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)} className={`w-2 h-2 rounded-full transition-colors ${i === testimonialIdx ? 'bg-white' : 'bg-white/30'}`} />
              ))}
            </div>
            <button onClick={() => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length)} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ── */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12">
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Common Questions</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">Frequently Asked Questions</h2>
        </Reveal>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="bg-white border border-sand-beige rounded-xl2 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-label text-sm font-semibold text-charcoal pr-4">{faq.q}</span>
                  {openFaq === i ? <Minus size={16} className="text-teal shrink-0" /> : <Plus size={16} className="text-teal shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-charcoal/70 text-sm">{faq.a}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 11. FINAL CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <img src={townhomesDuskImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(27,36,48,0.75)' }} />
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Book Your Free Site Visit Today.</h2>
            <p className="text-white/75 mb-8">Experience the plots in person. Our team will guide you through every detail.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CONTACT.tel} className="flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-charcoal font-label font-semibold hover:bg-offwhite transition-colors">
                <Phone size={16} /> Call Us
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-green-500 text-white font-label font-semibold hover:bg-green-600 transition-colors">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <Link to="/contact" className="px-7 py-3 rounded-full border border-white/50 text-white font-label font-semibold hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
