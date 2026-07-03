import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function ImageGallery({ images }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = images.map(src => ({ src }))

  function openAt(i) {
    setIndex(i)
    setOpen(true)
  }

  if (!images.length) return null

  const [main, ...rest] = images

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 rounded-xl overflow-hidden">
        {/* Main large image — spans 2 cols and 2 rows */}
        <button
          onClick={() => openAt(0)}
          className="col-span-2 row-span-2 relative h-72 md:h-96 overflow-hidden group focus:outline-none"
          aria-label="Open gallery"
        >
          <img
            src={main}
            alt="Main view"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </button>

        {/* Side thumbnails */}
        {rest.slice(0, 4).map((src, i) => (
          <button
            key={i}
            onClick={() => openAt(i + 1)}
            className="relative h-36 md:h-48 overflow-hidden group focus:outline-none"
            aria-label={`View image ${i + 2}`}
          >
            <img
              src={src}
              alt={`View ${i + 2}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Overlay on last thumbnail if more images exist */}
            {i === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
                <span className="text-white font-heading text-2xl">+{images.length - 5}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </>
  )
}
