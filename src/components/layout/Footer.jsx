import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'
import site from '../../data/site.json'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const { contact } = site

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand */}
          <div>
            <h2 className="font-heading text-2xl mb-3">
              <span className="text-accent">{site.agencyName.charAt(0)}</span>
              {site.agencyName.slice(1)}
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">{site.tagline}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-body text-xs tracking-widest uppercase text-accent mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs tracking-widest uppercase text-accent mb-5">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="flex items-start gap-3 text-white/60 text-sm hover:text-white transition-colors"
                >
                  <Phone size={15} className="mt-0.5 shrink-0" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-white/60 text-sm hover:text-white transition-colors"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">
            © {year} {site.agencyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
