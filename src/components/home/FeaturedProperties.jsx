import { motion } from 'framer-motion'
import { useFeaturedProperties } from '../../hooks/useProperties'
import PropertyCard from '../properties/PropertyCard'
import Button from '../ui/Button'

export default function FeaturedProperties() {
  const properties = useFeaturedProperties()

  return (
    <section className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent text-xs tracking-widest uppercase font-body mb-3">Handpicked for you</p>
          <h2 className="font-heading text-4xl text-primary">Featured Properties</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/properties" variant="dark">View All Properties</Button>
        </div>
      </div>
    </section>
  )
}
