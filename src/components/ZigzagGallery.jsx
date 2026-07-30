import { useState } from 'react'
import ImageLightbox from './ImageLightbox'

export default function ZigzagGallery({ images, columns = 2 }) {
  const [openIndex, setOpenIndex] = useState(null)

  const cols = Array.from({ length: columns }, () => [])
  images.forEach((src, i) => cols[i % columns].push({ src, i }))

  return (
    <>
      <div className="flex gap-4 sm:gap-5">
        {cols.map((col, colIdx) => (
          <div
            key={colIdx}
            className={`flex-1 flex flex-col gap-4 sm:gap-5 ${colIdx % 2 === 1 ? 'sm:mt-12' : ''}`}
          >
            {col.map(({ src, i }) => (
              <button
                key={i}
                onClick={() => setOpenIndex(i)}
                className="group relative block w-full rounded-xl2 overflow-hidden border border-sand-beige"
              >
                <img
                  src={src}
                  alt={`Photo ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors" />
              </button>
            ))}
          </div>
        ))}
      </div>
      <ImageLightbox
        images={images}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onPrev={() => setOpenIndex((i) => (i - 1 + images.length) % images.length)}
        onNext={() => setOpenIndex((i) => (i + 1) % images.length)}
      />
    </>
  )
}
