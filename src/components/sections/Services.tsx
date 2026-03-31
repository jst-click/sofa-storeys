import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { SERVICES } from '../../data/services'
import { fadeInUp, revealViewport, staggerContainer } from '../../lib/motion'
import { serviceDetailPath } from '../../routes/paths'

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-[90rem] px-5 py-4 sm:px-8 md:py-6 lg:px-12"
      aria-labelledby="services-heading"
    >
      <h2
        id="services-heading"
        className="mb-4 text-center font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.08] tracking-tight text-brand-espresso md:mb-5"
      >
        Our Premium Services
      </h2>
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map((s) => (
          <motion.li key={s.slug} variants={fadeInUp} className="h-full">
            <Link
              to={serviceDetailPath(s.slug)}
              className="group block h-full outline-none transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-brand-mocha focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
            >
              <Card className="h-full overflow-hidden rounded-[1.1rem] p-0">
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-sand/30">
                  <img
                    src={s.gallery[0]?.src ?? s.heroImage}
                    alt={s.gallery[0]?.alt ?? s.heroImageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-rich/62 via-brand-rich/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-display text-2xl font-semibold leading-tight text-brand-cream">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-4 py-3">
                  <p className="flex-1 font-sans text-sm leading-relaxed text-brand-brown/82">
                    {s.shortDescription}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-mocha transition-transform group-hover:translate-x-0.5">
                    View service
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Card>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
