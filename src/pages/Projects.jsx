import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { IMAGES, PROJECTS } from '../data/data'

const FILTERS = [
  { label: 'All', value: '' },
  { label: 'Current', value: 'current' },
  { label: 'Future', value: 'future' },
  { label: 'Completed', value: 'completed' },
]

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeStatus = searchParams.get('status') || ''

  const filtered = activeStatus
    ? PROJECTS.filter((p) => p.status === activeStatus)
    : PROJECTS

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden flex items-end">
        <img src={IMAGES.enclave} alt="Projects" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(79,111,110,0.65)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 text-white">
          <p className="font-label text-xs uppercase tracking-widest2 text-teal-sage mb-2">Portfolio</p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold">Our Projects</h1>
        </div>
      </section>

      {/* Filter pills */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setSearchParams(f.value ? { status: f.value } : {})}
              className={`px-5 py-2 rounded-full font-label text-sm font-semibold border transition-colors ${
                activeStatus === f.value
                  ? 'bg-teal text-white border-teal'
                  : 'bg-white text-charcoal border-sand-beige hover:border-teal'
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <RevealGroup key={activeStatus} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <RevealItem key={p.slug}>
              <ProjectCard project={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </div>
  )
}
