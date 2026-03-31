import { Routes, Route, Navigate } from 'react-router-dom'
import { MotionConfig, LazyMotion, domAnimation } from 'framer-motion'
import { PageLoader } from './components/layout/PageLoader'
import { MainLayout } from './components/layout/MainLayout'
import { HomePage } from './pages/HomePage'
import { SofasPage } from './pages/SofasPage'
import { CustomSofasPage } from './pages/CustomSofasPage'
import { ServicesPage } from './pages/ServicesPage'
import { LookbookPage } from './pages/LookbookPage'
import { ContactPage } from './pages/ContactPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { ROUTES } from './routes/paths'

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-[200] focus-visible:rounded-lg focus-visible:bg-brand-espresso focus-visible:px-4 focus-visible:py-4 focus-visible:text-brand-cream focus-visible:shadow-lg"
    >
      Skip to main content
    </a>
  )
}

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <PageLoader />
        <SkipLink />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="sofas" element={<SofasPage />} />
            <Route path="custom-sofas" element={<CustomSofasPage />} />
            <Route path="services/:slug" element={<ServiceDetailPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="lookbook" element={<LookbookPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Routes>
      </MotionConfig>
    </LazyMotion>
  )
}
