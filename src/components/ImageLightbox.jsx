import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageLightbox({ images, index, onClose, onPrev, onNext }) {
  if (index === null) return null

  return (
    <div
      className="fixed inset-0 z-[200] bg-charcoal/95 flex items-center justify-center p-4 sm:p-10"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <X size={20} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous image"
        className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[index]}
          alt={`Photo ${index + 1} of ${images.length}`}
          className="w-full max-h-[80vh] object-contain rounded-xl2"
        />
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next image"
        className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
