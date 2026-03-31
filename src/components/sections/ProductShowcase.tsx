import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { fadeInUp, revealViewport, staggerContainer } from '../../lib/motion'

const products = [
  {
    name: 'Valentina Three-Seater',
    image:
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=900&q=82',
  },
  {
    name: 'Urban Lounge Sectional',
    image:
      'https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=900&q=82',
  },
  {
    name: 'Classic Comfort Loveseat',
    image:
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=900&q=82',
  },
  {
    name: 'Heritage Leather Sofa',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=82',
  },
]

export function ProductShowcase() {
  return (
    <section
      id="lookbook"
      className="mx-auto max-w-[90rem] px-5 pb-4 pt-0 sm:px-8 md:pb-6 lg:px-12"
      aria-labelledby="lookbook-heading"
    >
      <h2
        id="lookbook-heading"
        className="mb-4 text-center font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.08] tracking-tight text-brand-espresso md:mb-5"
      >
        Customer Homes
      </h2>
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {products.map((p) => (
          <motion.li key={p.name} variants={fadeInUp}>
            <Card className="group overflow-hidden rounded-[1.1rem] p-0">
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-sand/30">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-[1s] ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-rich/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    className="rounded-2xl bg-brand-cream px-6 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-espresso shadow-lift ring-1 ring-white/50"
                    aria-label={`Quick view ${p.name}`}
                  >
                    Quick view
                  </motion.button>
                </div>
              </div>
              <div className="border-t border-brand-taupe/15 bg-white/70 px-4 py-3 backdrop-blur-sm">
                <h3 className="font-display text-base font-semibold leading-snug text-brand-espresso">
                  {p.name}
                </h3>
              </div>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
