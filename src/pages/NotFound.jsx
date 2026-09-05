import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const PLOTS = [
  { x: 20, y: 20, w: 190, h: 150, kind: 'tree', delay: 0 },
  { x: 230, y: 20, w: 180, h: 150, kind: 'house', delay: 0.08 },
  { x: 430, y: 20, w: 190, h: 150, kind: 'house', delay: 0.16 },
  { x: 20, y: 190, w: 190, h: 170, kind: 'house', delay: 0.24 },
  { x: 430, y: 190, w: 190, h: 170, kind: 'tree', delay: 0.32 },
]

const MISSING_PLOT = { x: 230, y: 190, w: 180, h: 170 }

function PlotHouse({ cx, cy }) {
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      <rect x={-22} y={-6} width={44} height={30} rx={2} fill="#FAFBFC" stroke="#C7D3E0" strokeWidth={1.5} />
      <polygon points="-27,-6 0,-28 27,-6" fill="#1B2430" />
      <rect x={-7} y={8} width={14} height={16} fill="#FF6300" opacity={0.85} />
    </g>
  )
}

function PlotTree({ cx, cy }) {
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      <rect x={-3} y={6} width={6} height={16} rx={1.5} fill="#8a6a4a" />
      <circle cx={0} cy={-4} r={17} fill="#CFE7D2" stroke="#AED4B3" strokeWidth={1.5} />
      <circle cx={-9} cy={2} r={10} fill="#CFE7D2" stroke="#AED4B3" strokeWidth={1.5} />
      <circle cx={9} cy={2} r={10} fill="#CFE7D2" stroke="#AED4B3" strokeWidth={1.5} />
    </g>
  )
}

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center gap-2 text-center px-4 pt-36 sm:pt-40 pb-16 bg-offwhite overflow-hidden">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." noindex />

      {/* Dark band behind the fixed navbar — matches the hero-section pattern every other page uses so the transparent nav stays legible */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-36 bg-charcoal" />

      <div className="relative z-10 w-full max-w-2xl mx-auto mb-4">
        <svg viewBox="0 0 640 380" className="w-full h-auto" role="img" aria-label="A map showing a missing plot, with a location pin searching for it">
          {/* Sky backdrop */}
          <defs>
            <radialGradient id="skyGlow" cx="50%" cy="0%" r="75%">
              <stop offset="0%" stopColor="#FFE9D6" />
              <stop offset="100%" stopColor="#FAFBFC" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="640" height="380" fill="url(#skyGlow)" />

          {/* Drifting clouds */}
          <motion.g
            animate={{ x: [0, 18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            opacity={0.8}
          >
            <ellipse cx="90" cy="30" rx="34" ry="12" fill="#fff" />
            <ellipse cx="115" cy="24" rx="22" ry="10" fill="#fff" />
          </motion.g>
          <motion.g
            animate={{ x: [0, -22, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            opacity={0.7}
          >
            <ellipse cx="510" cy="18" rx="30" ry="11" fill="#fff" />
            <ellipse cx="535" cy="24" rx="20" ry="9" fill="#fff" />
          </motion.g>

          {/* Roads dividing the layout, like a real gated-community plot map */}
          <rect x="210" y="0" width="20" height="380" fill="#D7DEE8" />
          <rect x="410" y="0" width="20" height="380" fill="#D7DEE8" />
          <rect x="0" y="170" width="640" height="20" fill="#D7DEE8" />
          <line x1="220" y1="0" x2="220" y2="380" stroke="#fff" strokeWidth="2" strokeDasharray="8 8" />
          <line x1="420" y1="0" x2="420" y2="380" stroke="#fff" strokeWidth="2" strokeDasharray="8 8" />
          <line x1="0" y1="180" x2="640" y2="180" stroke="#fff" strokeWidth="2" strokeDasharray="8 8" />

          {/* Developed plots */}
          {PLOTS.map((p, i) => (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: p.delay, ease: 'easeOut' }}
            >
              <rect x={p.x} y={p.y} width={p.w} height={p.h} rx={6} fill="#F0F4EC" stroke="#DCE6D6" strokeWidth={1.5} />
              {p.kind === 'house'
                ? <PlotHouse cx={p.x + p.w / 2} cy={p.y + p.h / 2 + 4} />
                : <PlotTree cx={p.x + p.w / 2} cy={p.y + p.h / 2 + 4} />}
            </motion.g>
          ))}

          {/* The missing plot */}
          <motion.rect
            x={MISSING_PLOT.x} y={MISSING_PLOT.y} width={MISSING_PLOT.w} height={MISSING_PLOT.h}
            rx={6}
            fill="#FF6300"
            fillOpacity={0.06}
            stroke="#FF6300"
            strokeWidth={2.5}
            strokeDasharray="10 7"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <text
            x={MISSING_PLOT.x + MISSING_PLOT.w / 2}
            y={MISSING_PLOT.y + MISSING_PLOT.h / 2 + 40}
            textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontWeight="700"
            fontSize="30"
            fill="#FF6300"
            opacity={0.55}
          >
            404
          </text>

          {/* Bouncing location pin, searching the empty plot */}
          <motion.g
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ellipse cx={MISSING_PLOT.x + MISSING_PLOT.w / 2} cy={MISSING_PLOT.y + 58} rx="14" ry="4" fill="#1B2430" opacity="0.12" />
            <path
              d={`M ${MISSING_PLOT.x + MISSING_PLOT.w / 2} ${MISSING_PLOT.y - 34}
                  c -20 0 -32 15 -32 33
                  c 0 22 32 55 32 55
                  s 32 -33 32 -55
                  c 0 -18 -12 -33 -32 -33 z`}
              fill="#FF6300"
              stroke="#E65900"
              strokeWidth="1.5"
            />
            <circle cx={MISSING_PLOT.x + MISSING_PLOT.w / 2} cy={MISSING_PLOT.y - 1} r="12" fill="#FAFBFC" />
            <text
              x={MISSING_PLOT.x + MISSING_PLOT.w / 2}
              y={MISSING_PLOT.y + 4}
              textAnchor="middle"
              fontFamily="'Playfair Display', serif"
              fontWeight="700"
              fontSize="15"
              fill="#FF6300"
            >
              ?
            </text>
          </motion.g>

          {/* Compass, quietly searching */}
          <g transform="translate(580, 335)">
            <circle r="26" fill="#fff" stroke="#DCE6D6" strokeWidth="2" />
            <text x="0" y="-13" textAnchor="middle" fontSize="8" fontFamily="Poppins, sans-serif" fill="#1B2430" opacity="0.5">N</text>
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              <polygon points="0,-16 4,0 0,16 -4,0" fill="#FF6300" />
            </motion.g>
            <circle r="2.5" fill="#1B2430" />
          </g>
        </svg>
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Error 404</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-3">This Plot Doesn't Exist</h1>
        <p className="text-charcoal/60 max-w-md mx-auto mb-8">
          Looks like this address isn't in our records. The page may have moved, sold out, or never existed —
          but we've got plenty of real, DTCP &amp; CRDA-approved plots waiting in Vijayawada &amp; Gannavaram.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-brand text-white font-label font-semibold hover:bg-gradient-brand-dark transition-colors">
            Back to Home
          </Link>
          <Link to="/projects" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-sand-beige text-charcoal font-label font-semibold hover:border-gradient-brand transition-colors">
            Explore Projects
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
