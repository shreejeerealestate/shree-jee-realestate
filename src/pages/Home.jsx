import Hero from '../components/home/Hero'
import StatsBar from '../components/home/StatsBar'
import FeaturedProperties from '../components/home/FeaturedProperties'
import Testimonials from '../components/home/Testimonials'
import SEO from '../components/ui/SEO'
import PageTransition from '../components/ui/PageTransition'
import site from '../data/site.json'

export default function Home() {
  return (
    <PageTransition>
      <SEO description={`${site.tagline} — ${site.agencyName}`} />
      <Hero />
      <StatsBar />
      <FeaturedProperties />
      <Testimonials />
    </PageTransition>
  )
}
