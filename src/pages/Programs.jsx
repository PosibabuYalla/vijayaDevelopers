import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'
import { IMAGES, PROGRAMS } from '../data/data'

export default function Programs() {
  const seva = PROGRAMS.find((p) => p.title === 'Seva')
  const others = PROGRAMS.filter((p) => p.title !== 'Seva')

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden flex items-end">
        <img src={IMAGES.about} alt="Our Programs" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(81,72,50,0.65)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 text-white">
          <p className="font-label text-xs uppercase tracking-widest2 text-teal-sage mb-2">More Than Business</p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold">Our Programs</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <Reveal>
          <p className="text-charcoal/70 text-lg">
            These programs aren't marketing — they're who we are. Alongside every plot and villa we build, our team shows up for people simply because it's the right thing to do: temple visits and festival celebrations, blankets for the homeless, fruits for patients in hospitals, and a hand extended wherever it's needed. No cameras required, no business angle — just human kindness.
          </p>
        </Reveal>
      </section>

      {/* Seva — featured */}
      {seva && (
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="bg-charcoal rounded-xl3 p-8 sm:p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="w-14 h-14 rounded-full bg-teal/20 flex items-center justify-center mb-5">
                    <seva.icon size={26} className="text-teal-sage" />
                  </div>
                  <p className="font-label text-xs uppercase tracking-widest2 text-teal-sage mb-2">Our Seva Initiative</p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">{seva.title} — Selfless Service</h2>
                  <p className="text-white/70">{seva.desc}</p>
                </div>
                <RevealGroup className="grid sm:grid-cols-2 gap-4">
                  {seva.items.map((item) => (
                    <RevealItem key={item}>
                      <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl2 p-4 h-full">
                        <CheckCircle2 size={18} className="text-teal-sage shrink-0 mt-0.5" />
                        <span className="text-sm text-white/85">{item}</span>
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* Other Programs */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6">
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((p) => (
            <RevealItem key={p.title}>
              <div className="h-full bg-white border border-sand-beige rounded-xl3 p-8 hover:border-teal hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                  <p.icon size={26} className="text-teal" />
                </div>
                <h3 className="font-display text-2xl font-bold text-charcoal mb-2">{p.title}</h3>
                <p className="text-charcoal/60 text-sm mb-5">{p.desc}</p>
                <ul className="space-y-2.5">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-charcoal/80">
                      <CheckCircle2 size={15} className="text-teal shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={IMAGES.cta} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(81,72,50,0.75)' }} />
        <div className="relative z-10 text-center text-white max-w-xl mx-auto px-4">
          <Reveal>
            <h2 className="font-display text-3xl font-bold mb-4">Kindness needs no business reason.</h2>
            <p className="text-white/75 mb-6">Get in touch to learn more about our community and humanitarian initiatives.</p>
            <Link to="/contact" className="inline-block px-8 py-3 rounded-full bg-teal text-white font-label font-semibold hover:bg-teal-dark transition-colors">
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
