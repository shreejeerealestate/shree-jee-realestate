import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout'

const Home           = lazy(() => import('./pages/Home'))
const Properties     = lazy(() => import('./pages/Properties'))
const PropertyDetail = lazy(() => import('./pages/PropertyDetail'))
const About          = lazy(() => import('./pages/About'))
const Contact        = lazy(() => import('./pages/Contact'))
const NotFound       = lazy(() => import('./pages/NotFound'))

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/"                element={<Home />} />
            <Route path="/properties"      element={<Properties />} />
            <Route path="/properties/:id"  element={<PropertyDetail />} />
            <Route path="/about"           element={<About />} />
            <Route path="/contact"         element={<Contact />} />
            <Route path="*"               element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
