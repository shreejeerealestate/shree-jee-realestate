import { motion } from 'framer-motion'
import StatsBar from '../components/home/StatsBar'
import Testimonials from '../components/home/Testimonials'
import Button from '../components/ui/Button'
import SEO from '../components/ui/SEO'
import PageTransition from '../components/ui/PageTransition'
import site from '../data/site.json'

export default function About() {
  const bioParagraphs = site.bio.split('\n\n')

  return (
    <PageTransition>
      <SEO title="About" description={`${site.agentName} – ${site.agentTitle} at ${site.agencyName}`} />

      {/* Page header */}
      <div className="bg-primary pt-32 pb-16 text-center px-4">
        <p className="text-accent text-xs tracking-widest uppercase font-body mb-3">About Us</p>
        <h1 className="font-heading text-4xl md:text-5xl text-white">{site.agencyName}</h1>
      </div>

      {/* Agent bio */}
      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={site.agentPhoto}
                alt={site.agentName}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-accent text-xs tracking-widest uppercase font-body mb-3">
                Meet your advisor
              </p>
              <h2 className="font-heading text-3xl text-primary mb-1">{site.agentName}</h2>
              <p className="text-gray-400 font-body text-sm mb-6">{site.agentTitle} · Faridabad</p>

              <div className="space-y-4 mb-8">
                {bioParagraphs.map((para, i) => (
                  <p key={i} className="text-gray-600 font-body leading-relaxed">{para}</p>
                ))}
              </div>

              <Button to="/contact" variant="dark">Get in Touch</Button>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsBar />
      <Testimonials />
    </PageTransition>
  )
}
