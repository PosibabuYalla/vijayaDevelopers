import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Vijaya Developers'
const SITE_URL = 'https://vijayadeveloper.com'
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`

export default function SEO({ title, description, path = '/', image, keywords, jsonLd, noindex = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Best Real Estate in Vijayawada | Open Plots & Villas`
  const canonical = `${SITE_URL}${path}`
  const resolvedImage = image && !image.startsWith('http') ? `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}` : image
  const ogImage = resolvedImage || DEFAULT_IMAGE
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export { SITE_URL, SITE_NAME }
