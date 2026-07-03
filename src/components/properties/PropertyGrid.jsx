import PropertyCard from './PropertyCard'

export default function PropertyGrid({ properties }) {
  if (properties.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-heading text-2xl text-gray-300 mb-2">No properties found</p>
        <p className="text-gray-400 text-sm font-body">Try adjusting your filters</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}
