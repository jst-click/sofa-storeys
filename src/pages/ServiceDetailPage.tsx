import { useEffect } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { ServiceIcon } from '../components/services/ServiceIcons'
import { SERVICES, getServiceBySlug } from '../data/services'
import type { ServiceSlug } from '../data/services'
import { fadeInUp, revealViewport } from '../lib/motion'
import { ROUTES, serviceDetailPath } from '../routes/paths'

const SLUGS: ServiceSlug[] = [
  'recliner-repair',
  'foam-replacement',
  'upholstery',
  'sofa-renovation',
  'custom-sofa-design',
]

function isServiceSlug(s: string): s is ServiceSlug {
  return SLUGS.includes(s as ServiceSlug)
}

export function ServiceDetailPage() {
  const navigate = useNavigate()
  const { slug } = useParams<{ slug: string }>()
  const service = slug && isServiceSlug(slug) ? getServiceBySlug(slug) : undefined
  const relatedServices = service ? SERVICES.filter((item) => item.slug !== service.slug).slice(0, 3) : []

  useEffect(() => {
    if (service) document.title = service.metaTitle
  }, [service])

  if (!service) {
    return <Navigate to={ROUTES.services} replace />
  }

  return (
    <article>
      <header className="relative min-h-[min(48vh,440px)] overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.heroImageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-rich via-brand-espresso/65 to-brand-mocha/30"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_100%,rgba(42,29,22,0.85),transparent_55%)]" aria-hidden />

        <div className="relative mx-auto flex min-h-[min(48vh,440px)] max-w-[90rem] flex-col justify-end px-5 pb-10 pt-24 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14 lg:pt-28">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-brand-sand/90">
              <li>
                <Link to={ROUTES.home} className="transition-colors hover:text-brand-cream">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-brand-sand/50">
                /
              </li>
              <li>
                <Link to={ROUTES.services} className="transition-colors hover:text-brand-cream">
                  Services
                </Link>
              </li>
              <li aria-hidden className="text-brand-sand/50">
                /
              </li>
              <li className="text-brand-cream/95">{service.title}</li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-brand-cream ring-1 ring-white/25 backdrop-blur-sm">
              <ServiceIcon slug={service.slug} className="h-8 w-8" />
            </div>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-tight text-brand-cream">
              {service.title}
            </h1>
            <p className="mt-3 max-w-2xl font-sans text-lg leading-relaxed text-brand-ivory/95 md:text-xl">
              {service.intro}
            </p>
          </motion.div>
        </div>
      </header>

      <div className="mx-auto max-w-[90rem] px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="min-w-0"
          >
            <div className="space-y-4 font-sans text-base leading-[1.75] text-brand-brown/88 md:text-lg">
              {service.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-brand-taupe/25 bg-white/80 p-5 shadow-soft backdrop-blur-sm md:p-6">
              <h2 className="font-display text-xl font-semibold text-brand-espresso md:text-2xl">What you get</h2>
              <ul className="mt-3 space-y-2.5">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-3 font-sans text-sm text-brand-brown/90 md:text-[15px]">
                    <span
                      className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-brand-mocha"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-brand-taupe/25 bg-brand-ivory/70 p-5 shadow-soft md:p-6">
              <h2 className="font-display text-xl font-semibold text-brand-espresso md:text-2xl">Related services</h2>
              <p className="mt-2 font-sans text-sm leading-relaxed text-brand-brown/85">
                Looking for a complete makeover? These services are often booked together.
              </p>
              <div className="mt-4 space-y-2.5">
                {relatedServices.map((item) => (
                  <Link
                    key={item.slug}
                    to={serviceDetailPath(item.slug)}
                    className="block rounded-xl border border-brand-taupe/30 bg-white/70 px-4 py-3 font-sans text-sm text-brand-brown transition-colors hover:border-brand-mocha/40 hover:text-brand-espresso"
                  >
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-brand-brown/80">{item.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="flex min-w-0 flex-col gap-4"
          >
            {service.gallery.map((img) => (
              <figure
                key={img.src}
                className="overflow-hidden rounded-[1.75rem] bg-brand-sand/30 shadow-[0_24px_64px_-12px_rgba(42,29,22,0.18)] ring-1 ring-brand-taupe/20"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </figure>
            ))}
          </motion.div>
        </div>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-10 lg:mt-12"
          aria-labelledby="process-heading"
        >
          <h2
            id="process-heading"
            className="font-display text-2xl font-semibold tracking-tight text-brand-espresso md:text-3xl"
          >
            How it works
          </h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {service.process.map((step, i) => (
              <li
                key={step.step}
                className="relative flex min-h-[140px] flex-col rounded-[1.5rem] border border-brand-taupe/30 bg-white/90 p-5 shadow-soft"
              >
                <span className="font-display text-3xl font-semibold tabular-nums text-brand-mocha/90">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-brand-espresso">
                  {step.step}
                </h3>
                <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-brand-brown">{step.detail}</p>
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-brand-taupe/25 bg-gradient-to-br from-brand-espresso via-brand-brown to-brand-rich px-6 py-10 text-center shadow-[0_40px_100px_-30px_rgba(42,29,22,0.45)] sm:flex-row sm:text-left lg:px-10"
        >
          <div className="max-w-xl">
            <p className="font-display text-2xl font-semibold text-brand-cream md:text-3xl">
              Ready to start this chapter?
            </p>
            <p className="mt-3 font-sans text-brand-sand/95">
              Book a consultation or tell us about your piece — we will reply with next steps.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap justify-center gap-3">
            <Button variant="secondary" onClick={() => navigate(ROUTES.contact)}>
              Contact us
            </Button>
            <Button
              variant="outline"
              className="!border-white/45 !bg-white/5 !text-brand-cream hover:!bg-white/12"
              onClick={() => navigate(ROUTES.services)}
            >
              All services
            </Button>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
