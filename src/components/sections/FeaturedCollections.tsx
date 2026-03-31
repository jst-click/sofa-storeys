import { motion } from 'framer-motion'
import { fadeInUp, revealViewport, staggerContainer } from '../../lib/motion'

const collections = [
  {
    title: 'Valentina',
    tagline: 'Soft curves, deep seats',
    image:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=82',
  },
  {
    title: 'Urban Lounge',
    tagline: 'Minimal lines, city calm',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=82',
  },
  {
    title: 'Classic Comfort',
    tagline: 'Timeless tailoring',
    image:
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=900&q=82',
  },
]

export function FeaturedCollections() {
  return (
    <section id="collections" className="mx-auto max-w-[90rem] px-5 pb-4 pt-0 sm:px-8 md:pb-6 lg:px-12">
      <h2 className="mb-3 text-center font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.08] tracking-tight text-brand-espresso md:mb-4">
        Featured Collections
      </h2>
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
      >
        {collections.map((item) => (
          <motion.li key={item.title} variants={fadeInUp} className="group overflow-hidden rounded-[1.2rem] border border-brand-taupe/25 bg-white/70 p-2 shadow-soft">
            <div className="relative overflow-hidden rounded-[0.95rem]">
              <img
                src={item.image}
                alt={`${item.title} collection — ${item.tagline}`}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-rich/70 via-brand-rich/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-display text-3xl font-semibold text-brand-cream">{item.title}</h3>
                <p className="font-sans text-sm text-brand-sand/90">{item.tagline}</p>
              </div>
            </div>
            <button
              type="button"
              className="mt-2 w-full rounded-xl bg-brand-rich/90 px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-cream transition-colors hover:bg-brand-espresso"
            >
              Quick View
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
