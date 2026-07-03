import { useProperties } from '../hooks/useProperties'
import PropertyGrid from '../components/properties/PropertyGrid'
import SEO from '../components/ui/SEO'
import PageTransition from '../components/ui/PageTransition'

export default function Properties() {
  const properties = useProperties({})

  return (
    <PageTransition>
      <SEO
        title="Properties"
        description="Browse our exclusive collection of properties for sale in Vrindavan."
      />
      <div className="min-h-screen bg-cream pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-10">
            <p className="text-accent text-xs tracking-widest uppercase font-body mb-2">Our Listings</p>
            <h1 className="font-heading text-4xl text-primary">
              Properties
              <span className="text-gray-300 text-2xl font-body ml-3">{properties.length}</span>
            </h1>
          </div>

          <PropertyGrid properties={properties} />
        </div>
      </div>
    </PageTransition>
  )
}
