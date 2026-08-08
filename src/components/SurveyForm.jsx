import { useState, useEffect, useRef } from 'react'
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Loader2, Home, TrendingUp, GraduationCap } from 'lucide-react'
import logo from '../assets/logo.png'

/* ─── Data ─────────────────────────────────────────────────────────────── */
const STEPS = [
  {
    id: 'name',
    q: 'మీ పేరు',
    sub: 'Your full name',
    type: 'text',
    field: 'name',
    placeholder: 'మీ పూర్తి పేరు రాయండి',
    required: true,
  },
  {
    id: 'mobile_number',
    q: 'మొబైల్ నెంబర్',
    sub: 'Your 10-digit mobile number',
    type: 'tel',
    field: 'mobile_number',
    placeholder: '10-అంకెల నెంబర్',
    required: true,
  },
  {
    id: 'purchase_purpose',
    q: 'ప్లాట్ కొనుగోలు చేయడానికి మీ ఉద్దేశ్యం ఏమిటి?',
    sub: 'Select all that apply',
    type: 'checkbox',
    field: 'purchase_purpose',
    required: true,
    options: [
      { value: 'home_construction', label: 'ఇంటి నిర్మాణం కోసం', icon: '🏠' },
      { value: 'investment', label: 'పెట్టుబడి కోసం', icon: '📈' },
      { value: 'children_future', label: 'పిల్లల భవిష్యత్ కోసం', icon: '🎓' },
    ],
  },
  {
    id: 'budget',
    q: 'మీ బడ్జెట్ ఎంత?',
    sub: 'Select your budget range',
    type: 'radio',
    field: 'budget',
    required: true,
    options: [
      { value: '20_30_lakhs', label: 'రూ. 20 – 30 లక్షలు' },
      { value: '30_40_lakhs', label: 'రూ. 30 – 40 లక్షలు' },
      { value: '40_50_lakhs', label: 'రూ. 40 – 50 లక్షలు' },
      { value: '50_lakhs_above', label: 'రూ. 50 లక్షలు పైగా' },
    ],
  },
  {
    id: 'price_per_sq_yard',
    q: 'ఒక గజం (Sq.Yd) ధర ఎంత వరకు ఉంటే కొనడానికి ఆసక్తి చూపుతారు?',
    sub: 'Price per square yard preference',
    type: 'radio',
    field: 'price_per_sq_yard',
    required: true,
    options: [
      { value: 'below_15000', label: 'రూ. 15,000 లోపు' },
      { value: '15000_20000', label: 'రూ. 15,000 – 20,000' },
      { value: '20000_25000', label: 'రూ. 20,000 – 25,000' },
      { value: '25000_above', label: 'రూ. 25,000 పైగా' },
    ],
  },
  {
    id: 'plot_size',
    q: 'మీకు ఏ సైజ్ ప్లాట్ కావాలి?',
    sub: 'Choose your preferred plot size',
    type: 'radio',
    field: 'plot_size',
    required: true,
    options: [
      { value: '150_sqyd', label: '150 గజాలు', sub: '≈ 1,350 sq.ft' },
      { value: '200_sqyd', label: '200 గజాలు', sub: '≈ 1,800 sq.ft' },
      { value: '267_sqyd', label: '267 గజాలు', sub: '≈ 2,403 sq.ft' },
      { value: '300_sqyd_above', label: '300+ గజాలు', sub: '≈ 2,700+ sq.ft' },
    ],
  },
  {
    id: 'development_requirements',
    q: 'మీకు ముఖ్యమైన డెవలప్మెంట్స్ ఏవి?',
    sub: 'అన్ని వర్తించే టిక్ చేయండి',
    type: 'checkbox',
    field: 'development_requirements',
    required: true,
    options: [
      { value: '40_60_bt_road', label: '40/60 అడుగుల BT రోడ్డు', icon: '🛣️' },
      { value: 'underground_drainage', label: 'అండర్ గ్రౌండ్ డ్రైనేజ్', icon: '🚰' },
      { value: 'water_supply', label: 'నీటి సదుపాయం', icon: '💧' },
      { value: 'electricity', label: 'ఎలక్ట్రిక్ సదుపాయం', icon: '⚡' },
      { value: 'park', label: 'పార్క్', icon: '🌳' },
      { value: 'club_house', label: 'క్లబ్ హౌస్', icon: '🏛️' },
      { value: 'childrens_play_area', label: 'పిల్లల ఆట స్థలం', icon: '🎠' },
      { value: 'security', label: 'సెక్యూరిటీ', icon: '👮' },
      { value: 'cctv', label: 'CCTV కెమెరాలు', icon: '📹' },
      { value: 'walking_track', label: 'వాకింగ్ ట్రాక్', icon: '🚶' },
    ],
  },
  {
    id: 'bank_loan_required',
    q: 'బ్యాంక్ లోన్ అవసరమా?',
    sub: 'Do you need bank loan assistance?',
    type: 'yesno',
    field: 'bank_loan_required',
    required: true,
  },
  {
    id: 'emi_interest',
    q: 'EMI సదుపాయం ఉంటే కొనడానికి ఆసక్తి ఉందా?',
    sub: 'Are you interested if EMI option is available?',
    type: 'yesno',
    field: 'emi_interest',
    required: true,
  },
  {
    id: 'purchase_timeline',
    q: 'మీరు కొనుగోలు చేయడానికి ఎప్పుడు ప్లాన్ చేస్తున్నారు?',
    sub: 'When are you planning to purchase?',
    type: 'radio',
    field: 'purchase_timeline',
    required: true,
    options: [
      { value: '30_days', label: '30 రోజుల్లో', icon: '🔥' },
      { value: '3_months', label: '3 నెలల్లో', icon: '📅' },
      { value: '6_months', label: '6 నెలల్లో', icon: '🗓️' },
      { value: 'undecided', label: 'ఇంకా నిర్ణయం లేదు', icon: '🤔' },
    ],
  },
  {
    id: 'immediate_registration',
    q: 'రిజిస్ట్రేషన్ వెంటనే కావాలనుకుంటున్నారా?',
    sub: 'Do you want immediate registration?',
    type: 'yesno',
    field: 'immediate_registration',
    required: true,
  },
  {
    id: 'additional_requirements',
    q: 'మీరు ఈ వెంచర్లో ఇంకా ఏమి ఉండాలని కోరుకుంటున్నారు?',
    sub: 'Any additional features or requirements?',
    type: 'textarea',
    field: 'additional_requirements',
    placeholder: 'మీ అభిప్రాయం ఇక్కడ రాయండి...',
    required: false,
  },
  {
    id: 'site_visit_interest',
    q: 'లాంచింగ్ ఆఫర్ / ప్రత్యేక ఆఫర్ ఉంటే ప్లాట్ విజిట్కు వస్తారా?',
    sub: 'Would you visit the site if a special offer is available?',
    type: 'yesno',
    field: 'site_visit_interest',
    required: true,
  },
]

const INITIAL = {
  name: '',
  mobile_number: '',
  purchase_purpose: [],
  budget: '',
  price_per_sq_yard: '',
  plot_size: '',
  development_requirements: [],
  bank_loan_required: '',
  emi_interest: '',
  purchase_timeline: '',
  immediate_registration: '',
  additional_requirements: '',
  site_visit_interest: '',
}

const TELUGU = { fontFamily: "'Noto Sans Telugu', sans-serif" }

/* ─── Validate single step ──────────────────────────────────────────────── */
function validateStep(step, form) {
  const v = form[step.field]
  if (!step.required) return null
  if (step.id === 'name' && !v.trim()) return 'పేరు నమోదు చేయండి'
  if (step.id === 'mobile_number' && !/^[6-9]\d{9}$/.test(v)) return 'సరైన 10-అంకెల మొబైల్ నెంబర్ నమోదు చేయండి'
  if (Array.isArray(v) && !v.length) return 'కనీసం ఒక ఎంపిక చేయండి'
  if (!Array.isArray(v) && !v) return 'దయచేసి ఒక ఎంపిక చేయండి'
  return null
}

/* ─── Option Card ───────────────────────────────────────────────────────── */
function OptionCard({ selected, onClick, label, sub, icon, multi }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-2xl border-2 transition-all duration-200 group
        ${selected
          ? 'border-[#FF6300] bg-orange-50 shadow-sm shadow-orange-100'
          : 'border-[#E5EAF1] bg-white hover:border-[#FF6300]/50 hover:bg-orange-50/40'
        }`}
    >
      {icon && <span className="text-xl shrink-0 w-7 text-center">{icon}</span>}
      <div className="flex-1 min-w-0">
        <span className="block text-sm font-medium text-[#1B2430] leading-snug" style={TELUGU}>{label}</span>
        {sub && <span className="block text-xs text-[#1B2430]/50 mt-0.5">{sub}</span>}
      </div>
      <div className={`shrink-0 w-5 h-5 rounded-${multi ? 'md' : 'full'} border-2 flex items-center justify-center transition-all duration-200
        ${selected ? 'border-[#FF6300] bg-[#FF6300]' : 'border-[#CBD5E1]'}`}
      >
        {selected && (
          multi
            ? <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            : <div className="w-2 h-2 rounded-full bg-white" />
        )}
      </div>
    </button>
  )
}

/* ─── YesNo ─────────────────────────────────────────────────────────────── */
function YesNo({ value, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-2">
      {[
        { v: 'yes', label: 'అవును ✅', en: 'Yes' },
        { v: 'no', label: 'కాదు ❌', en: 'No' },
      ].map((opt) => (
        <button
          key={opt.v}
          type="button"
          onClick={() => onChange(opt.v)}
          className={`py-5 rounded-2xl border-2 font-semibold text-base transition-all duration-200 flex flex-col items-center gap-1
            ${value === opt.v
              ? 'border-[#FF6300] bg-orange-50 text-[#FF6300] shadow-sm shadow-orange-100'
              : 'border-[#E5EAF1] bg-white text-[#1B2430]/70 hover:border-[#FF6300]/50'
            }`}
        >
          <span style={TELUGU} className="text-lg">{opt.label}</span>
          <span className="text-xs font-normal text-[#1B2430]/40">{opt.en}</span>
        </button>
      ))}
    </div>
  )
}

/* ─── Main Component ────────────────────────────────────────────────────── */
export default function SurveyForm() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(INITIAL)
  const [error, setError] = useState(null)
  const [dir, setDir] = useState(1) // 1 = forward, -1 = back
  const [visible, setVisible] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const cardRef = useRef(null)

  const current = STEPS[step]
  const progress = ((step) / STEPS.length) * 100

  /* animate transition */
  const goTo = (next, direction) => {
    setVisible(false)
    setDir(direction)
    setTimeout(() => {
      setStep(next)
      setError(null)
      setVisible(true)
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 220)
  }

  const getValue = () => form[current.field]

  const setValue = (val) => {
    setForm((f) => ({ ...f, [current.field]: val }))
    setError(null)
  }

  const toggleCheckbox = (val) => {
    const arr = form[current.field]
    setValue(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val])
  }

  const handleNext = () => {
    const err = validateStep(current, form)
    if (err) { setError(err); return }
    if (step < STEPS.length - 1) {
      goTo(step + 1, 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (step > 0) goTo(step - 1, -1)
  }

  /* just set value — user must press Next */
  const autoAdvance = (val) => {
    setValue(val)
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      await fetch('https://hook.eu1.make.com/vd4pgr21haq5a1okukth4t4er1guguxr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      }).catch(() => {}) // replace URL — silently ignore until live
      await new Promise((r) => setTimeout(r, 1000))
      setSubmitted(true)
    } catch {
      setError('సమర్పణలో లోపం జరిగింది. దయచేసి మళ్ళీ ప్రయత్నించండి.')
    } finally {
      setSubmitting(false)
    }
  }

  /* ── Success screen ── */
  if (submitted) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50/60 to-white">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 animate-[bounceIn_0.5s_ease]">
            <CheckCircle2 size={40} className="text-green-500" />
          </div>
          <img src={logo} alt="Vijaya Dhathri" className="h-12 mx-auto mb-4 object-contain" />
          <h3 className="font-display text-3xl font-bold text-[#1B2430] mb-2">ధన్యవాదాలు! 🙏</h3>
          <p className="text-[#1B2430]/60 leading-relaxed mb-6" style={TELUGU}>
            మీ అభిప్రాయం మా భవిష్యత్ విజయానికి బలం.<br />
            మా టీమ్ త్వరలో మీతో సంప్రదిస్తుంది.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5EAF1] p-5 text-sm text-[#1B2430]/50 font-label">
            మీ కల – మా నిబద్ధత | మంచి వెంచర్ – మంచి భవిష్యత్
          </div>
        </div>
      </section>
    )
  }

  const value = getValue()
  const isLast = step === STEPS.length - 1
  const canProceed = !validateStep(current, form)

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#FAFBFC] to-white">
      <div className="max-w-lg mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-8">
          <img src={logo} alt="Vijaya Dhathri Projects" className="h-14 mx-auto mb-3 object-contain" />
          <h2 className="font-bold text-2xl sm:text-3xl text-[#1B2430] mb-1" style={TELUGU}>
            కస్టమర్ సర్వే ఫారం
          </h2>
          <p className="text-[#1B2430]/50 text-xs" style={TELUGU}>
            మీ విలువైన అభిప్రాయం మా కొత్త వెంచర్ రూపకల్పనకు ఎంతో సహాయపడుతుంది.
          </p>
        </div>

        {/* ── Progress ── */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-label font-semibold text-[#FF6300]">
              {step + 1} / {STEPS.length}
            </span>
            <span className="text-xs font-label text-[#1B2430]/40">
              {Math.round(((step + 1) / STEPS.length) * 100)}% పూర్తయింది
            </span>
          </div>
          <div className="h-2 bg-[#E5EAF1] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FF6300] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>
          {/* Step dots */}
          <div className="flex justify-center gap-1.5 mt-3">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === step
                    ? 'w-5 h-2 bg-[#FF6300]'
                    : i < step
                    ? 'w-2 h-2 bg-[#FF6300]/40'
                    : 'w-2 h-2 bg-[#E5EAF1]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Question Card ── */}
        <div
          ref={cardRef}
          className="bg-white rounded-3xl border border-[#E5EAF1] shadow-lg shadow-slate-100/80 overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : `translateY(${dir > 0 ? '16px' : '-16px'})`,
            transition: 'opacity 0.22s ease, transform 0.22s ease',
          }}
        >
          {/* Card header */}
          <div className="bg-gradient-to-r from-[#1B2430] to-[#2d3a4a] px-6 py-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#FF6300] font-label font-bold text-xs uppercase tracking-widest">
                ప్రశ్న {step + 1}
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg leading-snug" style={TELUGU}>
              {current.q}
            </h3>
            {current.sub && (
              <p className="text-white/50 text-xs mt-1 font-label">{current.sub}</p>
            )}
          </div>

          {/* Card body */}
          <div className="px-6 py-5">

            {/* Text / Tel input */}
            {(current.type === 'text' || current.type === 'tel') && (
              <input
                autoFocus
                type={current.type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                placeholder={current.placeholder}
                maxLength={current.type === 'tel' ? 10 : undefined}
                style={TELUGU}
                className={`w-full px-4 py-4 rounded-2xl border-2 text-base outline-none transition-all duration-200 bg-[#FAFBFC]
                  ${error ? 'border-red-400 bg-red-50' : 'border-[#E5EAF1] focus:border-[#FF6300] focus:bg-white'}`}
              />
            )}

            {/* Textarea */}
            {current.type === 'textarea' && (
              <textarea
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={current.placeholder}
                rows={4}
                style={TELUGU}
                className="w-full px-4 py-4 rounded-2xl border-2 border-[#E5EAF1] focus:border-[#FF6300] text-base outline-none transition-all duration-200 bg-[#FAFBFC] focus:bg-white resize-none"
              />
            )}

            {/* Radio */}
            {current.type === 'radio' && (
              <div className="space-y-2.5">
                {current.options.map((opt) => (
                  <OptionCard
                    key={opt.value}
                    selected={value === opt.value}
                    onClick={() => autoAdvance(opt.value)}
                    label={opt.label}
                    sub={opt.sub}
                    icon={opt.icon}
                    multi={false}
                  />
                ))}
              </div>
            )}

            {/* Checkbox */}
            {current.type === 'checkbox' && (
              <div className="space-y-2.5">
                {current.options.map((opt) => (
                  <OptionCard
                    key={opt.value}
                    selected={value.includes(opt.value)}
                    onClick={() => toggleCheckbox(opt.value)}
                    label={opt.label}
                    icon={opt.icon}
                    multi={true}
                  />
                ))}
              </div>
            )}

            {/* Yes / No */}
            {current.type === 'yesno' && (
              <YesNo value={value} onChange={(v) => autoAdvance(v)} />
            )}

            {/* Error */}
            {error && (
              <p className="mt-3 text-red-500 text-sm font-label flex items-center gap-1.5" style={TELUGU}>
                ⚠️ {error}
              </p>
            )}
          </div>

          {/* Card footer / nav */}
          <div className="px-6 pb-6 flex items-center gap-3">
            {step > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-1.5 px-5 py-3 rounded-2xl border-2 border-[#E5EAF1] text-[#1B2430]/60 font-label font-semibold text-sm hover:border-[#1B2430]/30 transition-all duration-150"
              >
                <ArrowLeft size={15} /> వెనక్కి
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              disabled={submitting}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-label font-bold text-sm transition-all duration-200
                ${canProceed
                  ? 'bg-[#FF6300] text-white hover:bg-[#E65900] shadow-md shadow-orange-200 active:scale-[0.98]'
                  : 'bg-[#E5EAF1] text-[#1B2430]/40 cursor-not-allowed'
                }`}
            >
              {submitting ? (
                <><Loader2 size={16} className="animate-spin" /> సమర్పిస్తున్నారు...</>
              ) : isLast ? (
                <><Send size={15} /> సర్వే సమర్పించండి</>
              ) : (
                <>తదుపరి <ArrowRight size={15} /></>
              )}
            </button>
          </div>
        </div>

        {/* ── Skip optional ── */}
        {!current.required && (
          <div className="text-center mt-3">
            <button
              type="button"
              onClick={() => goTo(step + 1, 1)}
              className="text-xs text-[#1B2430]/40 hover:text-[#1B2430]/60 font-label underline underline-offset-2 transition-colors"
            >
              దాటవేయి (Skip)
            </button>
          </div>
        )}

        <p className="text-center text-xs text-[#1B2430]/30 font-label mt-6">
          మీ కల – మా నిబద్ధత | మంచి వెంచర్ – మంచి భవిష్యత్
        </p>
      </div>
    </section>
  )
}
