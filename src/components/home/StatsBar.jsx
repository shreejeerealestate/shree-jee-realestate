import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import site from '../../data/site.json'

function Counter({ value }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const steps = 60
    const duration = 1800
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + increment, value)
      setCount(Math.round(current))
      if (current >= value) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref}>{count}</span>
}

export default function StatsBar() {
  return (
    <section className="bg-primary py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {site.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-heading text-4xl lg:text-5xl text-white mb-2">
                <Counter value={stat.value} />
                <span className="text-accent">+</span>
              </p>
              <p className="text-white/50 text-sm font-body tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
