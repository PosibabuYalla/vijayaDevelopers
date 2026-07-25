import { IMAGES } from '../data/data'

export default function Img({ src, alt = '', className = '', style = {} }) {
  const url = IMAGES[src] || src
  return (
    <img
      src={url}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
    />
  )
}
