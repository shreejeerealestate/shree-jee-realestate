const statusOptions = [
  { value: 'all',      label: 'All' },
  { value: 'for-sale', label: 'For Sale' },
  { value: 'for-rent', label: 'For Rent' },
  { value: 'sold',     label: 'Sold' },
]

const bedroomOptions = [
  { value: '',  label: 'Any beds' },
  { value: '1', label: '1+' },
  { value: '2', label: '2+' },
  { value: '3', label: '3+' },
  { value: '4', label: '4+' },
]

export default function PropertyFilters({ filters, onChange }) {
  function set(key, value) {
    onChange({ ...filters, [key]: value })
  }

  const hasActiveFilters =
    filters.status !== 'all' || filters.bedrooms || filters.minPrice || filters.maxPrice

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-8">
      <div className="flex flex-wrap gap-4 items-end">

        {/* Status */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-400 uppercase tracking-wider font-body">Status</label>
          <div className="flex gap-2 flex-wrap">
            {statusOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => set('status', opt.value)}
                className={`px-4 py-2 text-sm rounded font-body transition-colors ${
                  filters.status === opt.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bedrooms */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-400 uppercase tracking-wider font-body">Bedrooms</label>
          <select
            value={filters.bedrooms || ''}
            onChange={e => set('bedrooms', e.target.value)}
            className="px-4 py-2 text-sm rounded bg-gray-100 text-gray-600 font-body border-0 focus:ring-2 focus:ring-accent outline-none cursor-pointer"
          >
            {bedroomOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Min price */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-400 uppercase tracking-wider font-body">Min Price</label>
          <input
            type="number"
            placeholder="No min"
            value={filters.minPrice || ''}
            onChange={e => set('minPrice', e.target.value)}
            className="px-4 py-2 text-sm rounded bg-gray-100 text-gray-600 font-body border-0 focus:ring-2 focus:ring-accent outline-none w-32"
          />
        </div>

        {/* Max price */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-400 uppercase tracking-wider font-body">Max Price</label>
          <input
            type="number"
            placeholder="No max"
            value={filters.maxPrice || ''}
            onChange={e => set('maxPrice', e.target.value)}
            className="px-4 py-2 text-sm rounded bg-gray-100 text-gray-600 font-body border-0 focus:ring-2 focus:ring-accent outline-none w-32"
          />
        </div>

        {/* Clear */}
        {hasActiveFilters && (
          <button
            onClick={() => onChange({ status: 'all' })}
            className="ml-auto text-sm text-gray-400 hover:text-accent font-body transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  )
}
