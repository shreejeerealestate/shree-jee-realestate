import { Square, MapPin, Building2, CheckCircle, BedDouble, Bath, Maximize2, Road } from 'lucide-react'

export default function PropertySpecs({ specs }) {
  const isPlot = specs.plotSizeMin !== undefined

  if (isPlot) {
    const items = [
      { icon: Maximize2,   label: 'Plot Size',  value: `${specs.plotSizeMin}–${specs.plotSizeMax} ${specs.areaUnit}` },
      { icon: Building2,   label: 'Type',       value: specs.plotType || 'Residential Plot' },
      { icon: MapPin,      label: 'Unit',       value: specs.areaUnit },
      { icon: CheckCircle, label: 'Approved',   value: 'MVDA Approved' },
    ]
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-cream rounded-lg p-4 text-center">
            <Icon size={20} className="text-accent mx-auto mb-2" />
            <p className="font-heading text-base text-primary leading-snug">{value}</p>
            <p className="text-xs text-gray-400 font-body mt-0.5">{label}</p>
          </div>
        ))}
      </div>
    )
  }

  const items = [
    specs.bedrooms      !== undefined && { icon: BedDouble,   label: 'Bedrooms',   value: `${specs.bedrooms} BHK` },
    specs.bathrooms     !== undefined && { icon: Bath,        label: 'Washrooms',  value: specs.bathrooms },
    specs.area          !== undefined && { icon: Maximize2,   label: 'Plot Area',  value: `${specs.area.toLocaleString('en-IN')} ${specs.areaUnit}` },
    specs.roadWidth     !== undefined && { icon: MapPin,      label: 'Road Width', value: specs.roadWidth },
    specs.plotType      !== undefined && { icon: Building2,   label: 'Type',       value: specs.plotType },
    specs.yearBuilt     !== undefined && { icon: CheckCircle, label: 'Year Built', value: specs.yearBuilt },
    specs.garage        !== undefined && { icon: Square,      label: 'Garage',     value: `${specs.garage} car${specs.garage !== 1 ? 's' : ''}` },
  ].filter(Boolean)

  const cols = items.length <= 4 ? `grid-cols-2 sm:grid-cols-${items.length}` : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'

  return (
    <div className={`grid ${cols} gap-4`}>
      {items.map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-cream rounded-lg p-4 text-center">
          <Icon size={20} className="text-accent mx-auto mb-2" />
          <p className="font-heading text-base text-primary leading-snug">{value}</p>
          <p className="text-xs text-gray-400 font-body mt-0.5">{label}</p>
        </div>
      ))}
    </div>
  )
}
