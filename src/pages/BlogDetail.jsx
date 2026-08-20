import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal'
import SEO, { SITE_URL } from '../components/SEO'
import { IMAGES, CONTACT, BLOGS } from '../data/data'

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

export default function BlogDetail() {
  const { slug } = useParams()
  const post = BLOGS.find((b) => b.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="font-display text-2xl text-charcoal">Article not found.</p>
        <Link to="/blogs" className="text-gradient font-label font-semibold">← Back to Blogs</Link>
      </div>
    )
  }

  const related = BLOGS.filter((b) => b.slug !== post.slug && b.category === post.category).slice(0, 3)
  const moreRelated = related.length > 0 ? related : BLOGS.filter((b) => b.slug !== post.slug).slice(0, 3)
  const imgSrc = IMAGES[post.image] || post.image
  const absoluteImg = typeof imgSrc === 'string' ? (imgSrc.startsWith('http') ? imgSrc : `${SITE_URL}${imgSrc.startsWith('/') ? '' : '/'}${imgSrc}`) : undefined

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: absoluteImg,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Vijaya Developers' },
    publisher: { '@type': 'Organization', name: 'Vijaya Developers', logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
    mainEntityOfPage: `${SITE_URL}/blogs/${post.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${SITE_URL}/blogs` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blogs/${post.slug}` },
    ],
  }

  return (
    <div>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, Vijayawada real estate, ${post.title}`}
        path={`/blogs/${post.slug}`}
        image={absoluteImg}
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      {/* Hero */}
      <section className="relative h-80 sm:h-[28rem] overflow-hidden flex items-end">
        <img src={imgSrc} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(27,36,48,0.65)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-10 text-white w-full">
          <Link to="/blogs" className="inline-flex items-center gap-1 text-white/70 hover:text-white font-label text-sm mb-4 transition-colors">
            <ArrowLeft size={14} /> Back to Blogs
          </Link>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-label font-semibold mb-3 bg-gradient-brand text-white">
            {post.category}
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold mb-3 leading-tight">{post.title}</h1>
          <p className="text-white/70 font-label text-sm">{formatDate(post.date)} · {post.readTime}</p>
        </div>
      </section>

      {/* Article */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <Reveal>
          <p className="text-charcoal/80 text-lg leading-relaxed mb-8 font-medium">{post.excerpt}</p>
        </Reveal>
        <div className="space-y-6">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-charcoal/70 leading-relaxed">{para}</p>
            </Reveal>
          ))}
        </div>

        {/* Inline CTA */}
        <Reveal delay={0.1}>
          <div className="mt-12 bg-offwhite border border-sand-beige rounded-xl3 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="font-display text-xl font-bold text-charcoal mb-1">Have questions about investing?</h3>
              <p className="text-charcoal/60 text-sm">Talk to our team for free, no-obligation guidance.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href={CONTACT.tel} className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-brand text-white font-label font-semibold hover:bg-gradient-brand-dark transition-colors">
                <Phone size={16} /> Call Us
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-green-500 text-white font-label font-semibold hover:bg-green-600 transition-colors">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Related posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="mb-10">
            <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">Keep Reading</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">Related Articles</h2>
          </Reveal>
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreRelated.map((r) => (
              <RevealItem key={r.slug}>
                <Link
                  to={`/blogs/${r.slug}`}
                  className="group block bg-offwhite rounded-xl3 overflow-hidden border border-sand-beige hover:shadow-md transition-shadow h-full"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                    <img
                      src={IMAGES[r.image] || r.image}
                      alt={r.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-label text-xs uppercase tracking-widest2 text-gradient mb-2">{r.category}</p>
                    <h3 className="font-display text-lg font-bold text-charcoal leading-snug">{r.title}</h3>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  )
}
