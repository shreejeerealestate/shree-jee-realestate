import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SEO from '../components/ui/SEO'
import PageTransition from '../components/ui/PageTransition'

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page Not Found" />
      <div className="min-h-screen bg-cream pt-20 flex flex-col items-center justify-center gap-6 text-center px-4">
        <p className="text-accent font-heading text-6xl">404</p>
        <h1 className="font-heading text-4xl text-primary">Page Not Found</h1>
        <p className="text-gray-400 font-body max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-accent font-body hover:underline mt-2"
        >
          <ArrowLeft size={14} /> Go back home
        </Link>
      </div>
    </PageTransition>
  )
}
