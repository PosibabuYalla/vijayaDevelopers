import { CheckCircle2, Target, Lightbulb, Award, Compass, Phone, MessageCircle } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'
import ZigzagGallery from '../components/ZigzagGallery'
import { CONTACT, TREKKING_IMAGES, CLIENT_DISCUSSION_IMAGES } from '../data/data'
import careersHero from '../assets/Careers Page hero image.jpeg'

const CAREERS_WHATSAPP = `${CONTACT.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in career opportunities at Vijaya Developers.")}`

const PURPOSE_POINTS = [
  'Every project helps a family own land, build a legacy and move closer to their dreams.',
  'Built by Indians, for Indians — shaping communities and real estate across the country.',
  'Your work becomes part of a larger story, not just another job.',
]

const CULTURE = [
  { icon: Target, title: 'Own What You Do', desc: 'We encourage ownership at every level — your work, your decisions, your impact.' },
  { icon: Lightbulb, title: 'Ideas That Matter', desc: "Good ideas aren't ranked by seniority. Every voice is heard and valued." },
  { icon: Award, title: 'Recognition That\'s Real', desc: 'Performance is seen and rewarded — not lost in the noise.' },
  { icon: Compass, title: 'Learn. Lead. Evolve.', desc: 'A culture of respect, transparency and teamwork built to grow you, not just use you.' },
]

const LIFE_GALLERY = [...TREKKING_IMAGES.slice(0, 4), ...CLIENT_DISCUSSION_IMAGES.slice(0, 3)]

export default function Careers() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden flex items-end">
        <img src={careersHero} alt="Careers at Vijaya Developers" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(27,36,48,0.65)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 text-white">
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient-light mb-2">Careers</p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold">Join the Vijaya Developers Journey</h1>
        </div>
      </section>

      {/* 1. Careers With Purpose — split image + copy */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative rounded-xl3 overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img src={CLIENT_DISCUSSION_IMAGES[4]} alt="Life at Vijaya Developers" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-6 right-6 bg-white rounded-xl2 shadow-lg px-5 py-4 text-center">
              <div className="font-display text-3xl font-bold text-gradient">18+</div>
              <div className="font-label text-xs uppercase tracking-widest2 text-charcoal">Years Building Careers</div>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-3">Why We Exist</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-5">
                Careers with purpose. Legacies that last.
              </h2>
              <p className="text-charcoal/70 mb-6">
                Behind every successful project is a committed team driven by trust, integrity and work that truly makes a difference. Vijaya Developers is built by Indians, for Indians — powered by people who take pride in shaping communities across the country. When you join us, your work becomes part of a larger story.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-3">
                {PURPOSE_POINTS.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-teal shrink-0 mt-0.5" />
                    <p className="text-sm text-charcoal/80">{point}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Culture / Growth */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-12 max-w-2xl mx-auto">
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">How We Work</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-4">A Culture Built to Grow You</h2>
            <p className="text-charcoal/60">
              We believe in growing together. Every individual is given the opportunity to learn, lead and evolve — in a culture built on respect, transparency and teamwork.
            </p>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CULTURE.map((c) => (
              <RevealItem key={c.title}>
                <div className="h-full bg-offwhite border border-sand-beige rounded-xl2 p-6 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                    <c.icon size={22} className="text-teal" />
                  </div>
                  <h4 className="font-label text-sm font-semibold text-charcoal mb-2">{c.title}</h4>
                  <p className="text-charcoal/60 text-sm">{c.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* 3. Life at Vijaya Developers — photo gallery */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12">
          <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Beyond the Desk</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-4">Life at Vijaya Developers</h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            Not just offices and targets — a team that works, travels and celebrates together. This is what a long-term career here actually looks like.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ZigzagGallery images={LIFE_GALLERY} columns={3} />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={TREKKING_IMAGES[3]} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(27,36,48,0.78)' }} />
        <div className="relative z-10 text-center text-white max-w-xl mx-auto px-4">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Build dreams. Build a future that lasts.</h2>
            <p className="text-white/75 mb-8">If you're looking for more than just a job — if you seek meaning, growth and impact — your journey begins here.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CAREERS_WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-brand text-white font-label font-semibold whitespace-nowrap hover:bg-gradient-brand-dark transition-colors">
                <MessageCircle size={16} /> Send Resume
              </a>
              <a href={CONTACT.tel} className="flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/50 text-white font-label font-semibold whitespace-nowrap hover:bg-white/10 transition-colors">
                <Phone size={16} /> Call Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
