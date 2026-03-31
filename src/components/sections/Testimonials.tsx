import { motion } from 'framer-motion'
import { fadeInUp, revealViewport, staggerContainer } from '../../lib/motion'

const testimonials = [
  {
    name: 'Priya R.',
    area: 'Indiranagar',
    quote:
      'Our old sofa looks brand new now. The stitching, foam comfort, and finishing are excellent.',
  },
  {
    name: 'Arun K.',
    area: 'HSR Layout',
    quote:
      'Very professional team. They explained material options clearly and delivered exactly on time.',
  },
  {
    name: 'Meera S.',
    area: 'Whitefield',
    quote:
      'We got a custom L-shape sofa made and the fit is perfect for our living room. Highly recommended.',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-[90rem] px-5 py-4 sm:px-8 md:py-6 lg:px-12"
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className="mb-4 text-center font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.08] tracking-tight text-brand-espresso md:mb-5"
      >
        Client Testimonials
      </h2>
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid gap-3 md:grid-cols-3"
      >
        {testimonials.map((item) => (
          <motion.li
            key={item.name}
            variants={fadeInUp}
            className="rounded-[1.1rem] border border-brand-taupe/25 bg-white/75 p-5 shadow-soft"
          >
            <p className="font-sans text-sm leading-relaxed text-brand-brown/85">"{item.quote}"</p>
            <p className="mt-3 font-display text-lg font-semibold text-brand-espresso">{item.name}</p>
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-brand-mocha/85">{item.area}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
