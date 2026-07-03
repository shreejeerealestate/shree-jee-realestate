import { useParams, Link } from 'react-router-dom'
import { MapPin, ArrowLeft } from 'lucide-react'
import { useProperty } from '../hooks/useProperties'
import ImageGallery from '../components/gallery/ImageGallery'
import VideoPlayer from '../components/gallery/VideoPlayer'
import PropertySpecs from '../components/properties/PropertySpecs'
import ContactInfo from '../components/contact/ContactInfo'
import Badge from '../components/ui/Badge'
import SEO from '../components/ui/SEO'
import PageTransition from '../components/ui/PageTransition'
import { formatPrice } from '../utils/formatters'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = useProperty(id)

  if (!property) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-cream pt-20 flex flex-col items-center justify-center gap-4">
          <p className="font-heading text-3xl text-gray-300">Property not found</p>
          <Link to="/properties" className="text-accent text-sm hover:underline font-body">
            ← Back to Properties
          </Link>
        </div>
      </PageTransition>
    )
  }

  const { title, location, price, currency, status, featured, images, videos, specs, description, amenities } = property

  return (
    <PageTransition>
      <SEO
        title={title}
        description={property.shortDescription}
      />

      <div className="min-h-screen bg-cream pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Back link */}
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent font-body transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back to Properties
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge type={status} />
              {featured && <Badge type="featured" />}
            </div>
            <h1 className="font-heading text-3xl md:text-4xl text-primary mb-2">{title}</h1>
            <div className="flex items-center gap-1.5 text-gray-400 text-sm font-body">
              <MapPin size={14} className="shrink-0" />
              {location.address}, {location.city}, {location.state}
            </div>
          </div>

          {/* Image gallery */}
          <div className="mb-10">
            <ImageGallery images={images} />
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: property details */}
            <div className="lg:col-span-2 space-y-10">

              {/* Price */}
              <div>
                <p className="font-heading text-3xl text-accent">
                  {property.priceOnRequest ? (
                    'Contact for Price'
                  ) : (
                    <>
                      {formatPrice(price, currency)}
                      {property.priceType === 'per-unit' && property.specs?.areaUnit && (
                        <span className="text-lg text-gray-400 font-body"> /{property.specs.areaUnit}</span>
                      )}
                      {status === 'for-rent' && !property.priceType && (
                        <span className="text-lg text-gray-400 font-body"> /mo</span>
                      )}
                    </>
                  )}
                </p>
                {property.highlights?.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {property.highlights.map(h => (
                      <li key={h} className="flex items-center gap-2 text-sm font-body text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Specs */}
              <div>
                <h2 className="font-heading text-xl text-primary mb-4">Property Details</h2>
                <PropertySpecs specs={specs} />
              </div>

              {/* Description */}
              <div>
                <h2 className="font-heading text-xl text-primary mb-4">Description</h2>
                {description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 font-body leading-relaxed mb-4">{para}</p>
                ))}
              </div>

              {/* Amenities */}
              {amenities?.length > 0 && (
                <div>
                  <h2 className="font-heading text-xl text-primary mb-4">Amenities</h2>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {amenities.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm font-body text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Videos */}
              {videos?.length > 0 && (
                <div>
                  <h2 className="font-heading text-xl text-primary mb-6">Video Tour</h2>
                  <div className="space-y-6">
                    {videos.map((video, i) => (
                      <div key={i}>
                        {video.title && (
                          <p className="font-body text-sm text-gray-400 mb-2">{video.title}</p>
                        )}
                        <VideoPlayer video={video} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: contact — sticky on desktop */}
            <div className="lg:sticky lg:top-24 self-start">
              <ContactInfo contact={property.contact} />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
