import { Church, Handshake, ShieldCheck, HandHeart, School, Hospital, GraduationCap, Plane, TrainFront, Route } from 'lucide-react'
import villaExteriorImg from '../assets/HeroPageImages/Ram Architects.jpeg'
import openPlotLayoutImg from '../assets/HeroPageImages/Vijaya Developers open Plot.jpeg'
import townhomesDuskImg from '../assets/HeroPageImages/Ra, Architects.jpeg'
import buyingPropertyImg from '../assets/Buying Property.webp'
import marketInsightsImg from '../assets/Market Insights.jpg'
import dtcpApprovalImg from '../assets/DTCP.webp'
import stepByStepGuideImg from '../assets/STEP BY STEP GUIDE.webp'
import gatedCommunityAmenitiesImg from '../assets/TOP AMENTITIES OF GATED COMMUNITIES.webp'

function naturalSort(a, b) {
  const numA = parseInt((a.match(/(\d+)(?!.*\d)/) || [0])[0], 10)
  const numB = parseInt((b.match(/(\d+)(?!.*\d)/) || [0])[0], 10)
  return numA - numB
}

function loadImages(globResult) {
  return Object.keys(globResult).sort(naturalSort).map((key) => globResult[key])
}

export const DONATION_IMAGES = loadImages(import.meta.glob('../assets/Donations/*.jpeg', { eager: true, import: 'default' }))
export const CONSTRUCTION_IMAGES = loadImages(import.meta.glob('../assets/Constructions/*.jpeg', { eager: true, import: 'default' }))
export const CLIENT_DISCUSSION_IMAGES = loadImages(import.meta.glob('../assets/ClientDiscussions/*.jpeg', { eager: true, import: 'default' }))
export const TREKKING_IMAGES = loadImages(import.meta.glob('../assets/Treakings/*.jpeg', { eager: true, import: 'default' }))

export const IMAGES = {
  hero:      'https://media.base44.com/images/public/6a64eeb899fbb45e892de8cb/cf93a377e_generated_64cc84eb.png',
  about:     'https://media.base44.com/images/public/6a64eeb899fbb45e892de8cb/3c70627db_generated_43e76a3a.png',
  greenCity: 'https://media.base44.com/images/public/6a64eeb899fbb45e892de8cb/53d15bc4f_generated_e344a6ae.png',
  villas:    'https://media.base44.com/images/public/6a64eeb899fbb45e892de8cb/8e751dc08_generated_cda39a5b.png',
  enclave:   'https://media.base44.com/images/public/6a64eeb899fbb45e892de8cb/fc9e4d3b5_generated_e570838c.png',
  cta:       'https://media.base44.com/images/public/6a64eeb899fbb45e892de8cb/6114e3424_generated_948f08d5.png',
}

export const PROGRAMS = [
  {
    icon: Church,
    title: 'Spiritual Activities',
    desc: 'Grounding our work in community and tradition.',
    items: ['Temple Visits', 'Spiritual Gatherings', 'Festival Celebrations'],
  },
  {
    icon: HandHeart,
    title: 'Seva',
    desc: 'Acts of kindness for the communities around us — not for business, simply because it matters.',
    items: ['Blanket Distribution to the Homeless', 'Fruit & Food Distribution in Hospitals', 'Donations to the Underprivileged', 'Support for Orphanages & Old-Age Homes'],
  },
  {
    icon: Handshake,
    title: 'Bharosa',
    desc: 'Our promise of trust to the communities and villages we work alongside — not just our customers.',
    items: ['Fair Dealings with Local Landowners', 'Honest Commitments to the Community', 'Long-Term Village Relationships', 'Transparent Communication with Society'],
  },
  {
    icon: ShieldCheck,
    title: 'Suraksha',
    desc: 'Standing for the safety and wellbeing of the wider community, not only our projects.',
    items: ['Community Safety Awareness Camps', 'Support During Natural Calamities', 'Health & Safety Camps for Villagers', 'Protecting Local Livelihoods'],
  },
]

export const CONTACT = {
  address:   '1st Floor, 11th Line, Currency Nagar, Ramavarappadu, Vijayawada, Andhra Pradesh 520008',
  hours:     'Open 24 Hours',
  phone:     '+91 83281 21717',
  tel:       'tel:+918328121717',
  whatsapp:  'https://wa.me/918328121717',
  email:     'info.vijayadevelopers@gmail.com',
}

export const SOCIAL = {
  facebook:  'https://www.facebook.com/share/1DSzUtsu9e/',
  youtube:   'https://youtube.com/@vijayawadavijayadevelopers?si=UAurl3Fvl_LJdUN9',
  instagram: 'https://www.instagram.com/vijayadevelopers5',
}

export const GALLERY = [
  { id: 1, image: CONSTRUCTION_IMAGES[0], category: 'Construction', caption: 'Construction in Progress' },
  { id: 2, image: CONSTRUCTION_IMAGES[1], category: 'Construction', caption: 'Building the Foundations' },
  { id: 3, image: CONSTRUCTION_IMAGES[2], category: 'Construction', caption: 'Site Development Underway' },
  { id: 4, image: CLIENT_DISCUSSION_IMAGES[0], category: 'Client Meetings', caption: 'Client Consultation' },
  { id: 5, image: CLIENT_DISCUSSION_IMAGES[1], category: 'Client Meetings', caption: 'Guided Site Visit' },
  { id: 6, image: CLIENT_DISCUSSION_IMAGES[2], category: 'Client Meetings', caption: 'Discussing Project Details' },
  { id: 7, image: DONATION_IMAGES[0], category: 'Community & Donations', caption: 'Community Donation Drive' },
  { id: 8, image: DONATION_IMAGES[1], category: 'Community & Donations', caption: 'Seva in Action' },
  { id: 9, image: TREKKING_IMAGES[0], category: 'Team Outings', caption: 'Team Trekking Adventure' },
  { id: 10, image: TREKKING_IMAGES[1], category: 'Team Outings', caption: 'Building Team Bonds' },
]

export const BLOGS = [
  {
    slug: 'why-dtcp-crda-approval-matters',
    title: 'Why DTCP & CRDA Approval Matters When Buying Open Plots',
    category: 'Buying Guide',
    date: '2026-06-02',
    readTime: '4 min read',
    image: dtcpApprovalImg,
    excerpt: 'DTCP & CRDA approval is the single most important checkbox before you sign on any open plot. Here\'s what it actually protects you from.',
    body: [
      'When you buy an open plot, the layout\'s approval status determines whether your investment is legally sound or a future headache. DTCP & CRDA (Directorate of Town and Country Planning) approval confirms that a layout meets government-mandated standards for roads, drainage, open spaces and utilities before a single plot is sold.',
      'Without DTCP & CRDA approval, a layout can face demolition orders, denial of building permission, and — critically — banks will refuse to sanction a home loan against the plot. This alone eliminates a huge pool of genuine buyers if you ever want to resell.',
      'Every current and completed Vijaya Developers project carries full DTCP & CRDA approval, along with clear title and survey settlement documents. Before you finalize any plot anywhere, always ask for the DTCP & CRDA approval number and verify it independently with the local authority.',
      'A clean approval also means your layout will actually get the roads, drainage and streetlights promised in the brochure — because the government has signed off on that infrastructure plan, not just the marketing one.',
    ],
  },
  {
    slug: 'vijayawada-investment-hub',
    title: '5 Signs Vijayawada Is Andhra Pradesh\'s Next Big Investment Hub',
    category: 'Market Insights',
    date: '2026-05-18',
    readTime: '5 min read',
    image: marketInsightsImg,
    excerpt: 'From highway expansions to its proximity to Amaravati, here\'s why land values around Vijayawada keep climbing.',
    body: [
      'Vijayawada sits at the crossroads of NH-16 and NH-65, giving it road connectivity that few other tier-2 cities in South India can match. That alone has historically been one of the strongest predictors of long-term land appreciation.',
      'Its proximity to Amaravati, the state\'s planned capital region, means every phase of government and private infrastructure investment nearby has a spillover effect on surrounding corridors like Gannavaram, Mangalagiri and Nandigama Road.',
      'Add to this an international airport, a major railway junction, and steady population growth, and you get a city where demand for well-planned residential layouts consistently outpaces supply.',
      'Plots in established layouts around Vijayawada have appreciated 25–40% over a 3-year horizon in recent years — a trend driven by real infrastructure delivery, not just speculation.',
    ],
  },
  {
    slug: 'open-plot-vs-villa',
    title: 'Open Plot vs. Villa: Which Investment Suits You?',
    category: 'Buying Guide',
    date: '2026-04-27',
    readTime: '4 min read',
    image: buyingPropertyImg,
    excerpt: 'Both build wealth differently. Here\'s how to decide between a blank canvas and a move-in-ready villa.',
    body: [
      'An open plot gives you flexibility — you decide when to build, how to design, and can hold it as a pure appreciation play with lower upfront cost. It suits buyers with a longer time horizon who don\'t need to move in immediately.',
      'A villa is a turnkey lifestyle upgrade. You pay a premium for architecture, finishes and amenities like clubhouses and landscaping, but you skip years of construction planning and get to live in — or rent out — the property right away.',
      'From a pure returns standpoint, plots typically show sharper percentage appreciation because land value (not the structure) drives most of the gain. Villas offer steadier rental yield potential and immediate usability.',
      'If you\'re building a long-term portfolio, a mix of both — a plot for growth and a villa for lifestyle or rental income — is a common and balanced approach.',
    ],
  },
  {
    slug: 'property-registration-guide',
    title: 'A Step-by-Step Guide to Registering Your Property',
    category: 'Legal & Documentation',
    date: '2026-03-14',
    readTime: '6 min read',
    image: stepByStepGuideImg,
    excerpt: 'Registration can feel intimidating on paper. Broken down into steps, it\'s a predictable, manageable process.',
    body: [
      'Registration formally transfers ownership in government records. It begins with document verification — sale deed, encumbrance certificate, approved layout plan and identity proofs — to confirm the property is free of legal disputes.',
      'Next comes valuation: the sub-registrar\'s office calculates stamp duty and registration charges based on the government\'s guideline value for that area, which is why it pays to confirm current rates before budgeting.',
      'Both parties then appear before the sub-registrar with witnesses to sign the sale deed, after which biometric verification and payment of applicable duties complete the transaction.',
      'Once registered, the deed is typically available within 7–10 working days. A good developer or documentation team will coordinate this entire process on your behalf so you\'re not chasing paperwork across offices.',
    ],
  },
  {
    slug: 'bank-loan-for-plot-purchase',
    title: 'How to Get a Bank Loan for Your Plot Purchase',
    category: 'Finance',
    date: '2026-02-20',
    readTime: '5 min read',
    image: villaExteriorImg,
    excerpt: 'Plot loans work differently from home loans. Here\'s what banks actually check before approving one.',
    body: [
      'Most nationalised and private banks offer plot loans, but only against layouts that are DTCP & CRDA or equivalent government-approved — this is the first thing an underwriter verifies, before even looking at your income documents.',
      'Expect to provide standard KYC, income proof, and the layout\'s approval and title documents. Banks typically fund 70–80% of the plot\'s value, with the remainder payable as your margin contribution.',
      'Unlike home loans, plot loans usually carry a marginally higher interest rate and a condition to begin construction within a fixed period (often 2–3 years), after which the loan may need to be converted or refinanced.',
      'Working with a developer that has pre-tied-up bank approvals for their layout speeds up this entire process significantly, since the bank has already vetted the project once.',
    ],
  },
  {
    slug: 'gated-community-amenities-checklist',
    title: 'Top Amenities to Look for in a Gated Community',
    category: 'Lifestyle',
    date: '2026-01-30',
    readTime: '4 min read',
    image: gatedCommunityAmenitiesImg,
    excerpt: 'Not all amenities add equal value. Here\'s a practical checklist for evaluating any gated layout.',
    body: [
      'Start with the basics that affect daily life: underground cabling, wide internal roads, stormwater drainage and 24×7 security. These aren\'t glamorous, but they\'re what separates a well-planned layout from one that looks good only in the brochure.',
      'Green infrastructure — avenue plantation, parks and jogging tracks — adds both quality of life and resale appeal. Buyers increasingly filter for walkable, tree-lined layouts over bare plots.',
      'Community-oriented amenities like children\'s play areas, clubhouses and grand entrance arches signal a developer\'s long-term commitment to the layout, not just a plot-and-exit approach.',
      'Finally, check who maintains these amenities post-handover. A layout with an active maintenance plan retains its value far better than one where common areas are left to degrade.',
    ],
  },
]

export const PRICING = {
  openPlotGannavaram: '₹21,000 / Sq. Yard',
  villaStarting: '₹1.20 Crore',
}

export const PROJECTS = [
  {
    slug: 'luxury-villas-kesarapalli-gannavaram',
    name: 'Luxury Villas @ Kesarapalli',
    location: 'Kesarapalli, Gannavaram',
    status: 'current',
    price: 'Plots ₹21,000/sq.yd · Villas ₹1.20 Cr+',
    area: '32 Acres',
    plotSizes: '167–300 sq.yd Plots · 4+1 BHK Villas',
    tagline: 'Premium villas and open plots in a DTCP & CRDA-approved gated community.',
    image: villaExteriorImg,
    amenities: ['Premium Villas','Premium Open Plots','Club House',"Children's Park",'40\' BT Roads','24×7 Security'],
    approvals: ['DTCP & CRDA Approved','Clear Title','Bank Loan Eligible','Survey Settlement'],
    description: 'Luxury Villas @ Kesarapalli, Gannavaram is a DTCP & CRDA-approved gated community offering both premium open plots and luxury villas. With a club house, children\'s park, 40\' BT roads and round-the-clock security, it\'s designed for families who want a resort-like everyday lifestyle.',
    availability: [
      { size: '167 sq.yd (Plot)', facing: 'East', status: 'Available', price: '₹35.07L' },
      { size: '200 sq.yd (Plot)', facing: 'North', status: 'Available', price: '₹42L' },
      { size: '300 sq.yd (Plot)', facing: 'East', status: 'Available', price: '₹63L' },
      { size: '4+1 BHK Villa', facing: 'East', status: 'Available', price: '₹1.20 Cr onwards' },
    ],
    locationTiles: [
      { icon: School, label: 'Schools & Colleges', dist: '4 km' },
      { icon: Plane, label: 'Airport', dist: '4 km' },
      { icon: TrainFront, label: 'Railway Station', dist: '2 km' },
      { icon: Route, label: 'Highway', dist: '3 km' },
    ],
  },
  {
    slug: 'premium-villas-Kesarapalli',
    name: 'Premium Villas @ Kesarapalli',
    location: 'Kesarapalli, Vijayawada',
    status: 'current',
    price: '₹1.20 Cr onwards',
    area: '12 Acres',
    plotSizes: '4+1 BHK',
    tagline: 'Spacious 4+1 bedroom villas with premium construction and modern elevation.',
    image: 'villas',
    amenities: ['4+1 Bedrooms','Premium Construction','Spacious Layout','Modern Elevation','Clubhouse','Smart Home Ready'],
    approvals: ['DTCP & CRDA Approved','RERA Registered','Bank Loan Eligible','Vastu Compliant'],
    description: 'Premium Villas @ Kesarapalli offers spacious 4+1 bedroom villas built with premium construction quality and a modern elevation. Contact our team for the latest floor plans and current availability.',
    availability: [
      { size: '4+1 BHK', facing: 'East', status: 'Available', price: '₹1.20 Cr onwards' },
    ],
  },
  {
    slug: 'premium-open-plots-gandigunta-village',
    name: 'Premium Open Plots @ Gandigunta Village',
    location: 'Gandigunta Village',
    status: 'future',
    price: 'Price on Request',
    area: 'Coming Soon',
    plotSizes: '165 & 200 sq.yd (more sizes to be announced)',
    tagline: 'New Launch — Premium gated community with wide internal roads and full infrastructure.',
    image: openPlotLayoutImg,
    amenities: ['Premium Gated Community','Wide Internal Roads','Avenue Plantation','Underground Drainage','Electricity & Water Connection','Compound Wall','Bank Loan Assistance','Legal Verified'],
    approvals: ['Legal Verified','Bank Loan Eligible','Registration Assistance'],
    description: 'Premium Open Plots @ Gandigunta Village is our newest launch — a premium gated community with wide internal roads, avenue plantation, underground drainage and full electricity & water connections. Bank loan assistance and complete legal verification included.',
    availability: [
      { size: '165 sq.yd', facing: 'TBD', status: 'Pre-Launch', price: 'On Request' },
      { size: '200 sq.yd', facing: 'TBD', status: 'Pre-Launch', price: 'On Request' },
    ],
    locationTiles: [
      { icon: School, label: 'Schools', dist: '4 km' },
      { icon: Hospital, label: 'Hospitals', dist: '3 km' },
      { icon: GraduationCap, label: 'Colleges', dist: '4 km' },
      { icon: Plane, label: 'Airport', dist: '4 km' },
      { icon: TrainFront, label: 'Railway', dist: '2 km' },
      { icon: Route, label: 'Highway', dist: '3 km' },
    ],
  },
  {
    slug: 'premium-open-plots-kondapavuluru-village',
    name: 'Premium Open Plots @ Kondapavuluru Village',
    location: 'Kondapavuluru Village',
    status: 'future',
    price: 'Price on Request',
    area: 'Coming Soon',
    plotSizes: 'Sizes to be announced',
    tagline: 'New Launch — Premium layout near Gannavaram Airport and NH-16.',
    image: 'enclave',
    amenities: ['Premium Layout','DTCP & CRDA / RERA (If Applicable)','Wide Roads','Underground Drainage','Water & Electricity','Avenue Plantation','Legal Verification','Registration Assistance'],
    approvals: ['Legal Verified','Registration Assistance'],
    description: 'Premium Open Plots @ Kondapavuluru Village is strategically located close to Gannavaram Airport, NH-16, Vijayawada and Amaravati — offering excellent connectivity alongside a premium, fully-planned layout.',
    availability: [],
  },
  {
    slug: 'vijaya-spring-fields',
    name: 'Vijaya Spring Fields',
    location: 'Kankipadu',
    status: 'completed',
    price: 'Resale Market',
    area: '18 Acres',
    plotSizes: '150–400 sq.yd',
    tagline: 'Delivered community of happy families. Fully Sold Out.',
    image: townhomesDuskImg,
    amenities: ['Fully Developed','Mature Plantation','Established Neighbourhood','All Utilities Live'],
    approvals: ['DTCP & CRDA Approved','Delivered & Registered','Title Cleared'],
    description: 'Vijaya Spring Fields in Kankipadu is a fully delivered and registered community. All plots are sold and families have built their dream homes in this thriving neighbourhood with mature plantation and complete utilities.',
    availability: [],
  },
]
