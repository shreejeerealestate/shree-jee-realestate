const config = {
  'for-sale': { label: 'For Sale', classes: 'bg-emerald-100 text-emerald-700' },
  'for-rent': { label: 'For Rent', classes: 'bg-blue-100 text-blue-700' },
  'sold':     { label: 'Sold',     classes: 'bg-gray-100 text-gray-500' },
  'rented':   { label: 'Rented',   classes: 'bg-gray-100 text-gray-500' },
  'featured': { label: 'Featured', classes: 'bg-accent text-white' },
}

export default function Badge({ type }) {
  const { label, classes } = config[type] ?? { label: type, classes: 'bg-gray-100 text-gray-600' }
  return (
    <span className={`inline-block px-2.5 py-1 text-xs font-body font-medium rounded ${classes}`}>
      {label}
    </span>
  )
}
