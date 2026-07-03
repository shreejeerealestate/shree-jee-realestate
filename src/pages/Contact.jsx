import { Phone, Mail, MapPin } from 'lucide-react'
import ContactInfo from '../components/contact/ContactInfo'
import SEO from '../components/ui/SEO'
import PageTransition from '../components/ui/PageTransition'
import site from '../data/site.json'

export default function Contact() {
  const { contact } = site

  return (
    <PageTransition>
      <SEO
        title="Contact"
        description={`Contact ${site.agencyName}. Call, WhatsApp, or email us — we're here to help you find your perfect property.`}
      />

      {/* Page header */}
      <div className="bg-primary pt-32 pb-16 text-center px-4">
        <p className="text-accent text-xs tracking-widest uppercase font-body mb-3">
          We'd love to hear from you
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-white">Contact Us</h1>
      </div>

      {/* Content */}
      <div className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Action buttons */}
            <div>
              <h2 className="font-heading text-2xl text-primary mb-6">Reach Out</h2>
              <ContactInfo />
            </div>

            {/* Office details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-heading text-2xl text-primary mb-6">Our Office</h2>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-sm text-primary">Address</p>
                    <p className="font-body text-sm text-gray-500 mt-0.5">{contact.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-sm text-primary">Phone</p>
                    <a
                      href={`tel:${contact.phoneRaw}`}
                      className="font-body text-sm text-gray-500 mt-0.5 hover:text-accent transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-sm text-primary">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-body text-sm text-gray-500 mt-0.5 hover:text-accent transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </li>
              </ul>

              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm text-accent font-body hover:underline"
              >
                <MapPin size={14} /> View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
