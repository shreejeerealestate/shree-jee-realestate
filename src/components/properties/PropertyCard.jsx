import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import Badge from '../ui/Badge'
import { formatPrice } from '../../utils/formatters'

export default function PropertyCard({ property }) {
  const [imgError, setImgError] = useState(false)
  const { id, title, location, price, currency, status, featured, images, priceType, specs } = property

  return (
    <Link
      to={`/properties/${id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full"
    >
      {/* Image */}
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        {images[0] && !imgError ? (
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-gray-300 font-heading text-sm">No Image</span>
          </div>
        )}

        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <Badge type={status} />
          {featured && <Badge type="featured" />}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="font-heading text-lg text-primary leading-tight mb-1 line-clamp-2">{title}</p>
        <p className="flex items-center gap-1 text-gray-400 text-sm font-body mb-4">
          <MapPin size={12} className="shrink-0" />
          {location.city}, {location.state}
        </p>

        <p className="font-heading text-xl text-accent">
          {property.priceOnRequest ? (
            'Contact for Price'
          ) : (
            <>
              {formatPrice(price, currency)}
              {priceType === 'per-unit' && specs?.areaUnit && (
                <span className="text-sm text-gray-400 font-body"> /{specs.areaUnit}</span>
              )}
            </>
          )}
        </p>
      </div>
    </Link>
  )
}
