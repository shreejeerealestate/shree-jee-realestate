import { Phone, Mail } from 'lucide-react'
import site from '../../data/site.json'

export default function ContactInfo({ contact: propContact }) {
  const contact = propContact ?? site.contact

  const actions = [
    {
      label: 'Call Now',
      icon: Phone,
      href: `tel:${contact.phoneRaw}`,
      sub: contact.phone,
      className: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700',
    },
    {
      label: 'Email Us',
      icon: Mail,
      href: `mailto:${contact.email}`,
      sub: contact.email,
      className: 'bg-blue-50 hover:bg-blue-100 text-blue-700',
    },
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h3 className="font-heading text-xl text-primary mb-1">Get in Touch</h3>
      {contact.agentName && (
        <p className="text-sm text-gray-400 font-body mb-5">{contact.agentName}</p>
      )}
      {!contact.agentName && <div className="mb-5" />}
      <div className="flex flex-col gap-3">
        {actions.map(({ label, icon: Icon, href, sub, className }) => (
          <a
            key={label}
            href={href}
            className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${className}`}
          >
            <Icon size={20} className="shrink-0" />
            <div className="min-w-0">
              <p className="font-body font-semibold text-sm">{label}</p>
              <p className="font-body text-xs opacity-70 mt-0.5 truncate">{sub}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
