import { Helmet } from 'react-helmet-async'
import site from '../../data/site.json'

export default function SEO({ title, description }) {
  const fullTitle = title ? `${title} | ${site.agencyName}` : site.agencyName
  const desc = description || site.tagline

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
