import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import testimonials from '../../data/testimonials.json'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex(i => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIndex(i => (i === testimonials.length - 1 ? 0 : i + 1))

  const t = testimonials[index]

  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-accent text-xs tracking-widest uppercase font-body mb-3">What clients say</p>
        <h2 className="font-heading text-4xl text-primary mb-12">Testimonials</h2>

        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={16} className="fill-accent text-accent" />
          ))}
        </div>

        <blockquote className="font-heading text-xl md:text-2xl text-primary leading-relaxed mb-8 italic">
          "{t.text}"
        </blockquote>

        <p className="font-body font-semibold text-primary text-sm">{t.name}</p>
        <p className="font-body text-gray-400 text-xs mt-1">{t.location}</p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-accent hover:text-accent transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-accent' : 'bg-gray-200'}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-accent hover:text-accent transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
