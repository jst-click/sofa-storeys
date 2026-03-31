import { motion } from 'framer-motion'
import { fadeInUp, revealViewport } from '../../lib/motion'

export function HomeAbout() {
  return (
    <section
      id="home-about"
      className="mx-auto max-w-[90rem] px-5 py-4 sm:px-8 md:py-6 lg:px-12"
      aria-labelledby="home-about-heading"
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid items-center gap-4 rounded-[1.25rem] border border-brand-taupe/25 bg-white/70 p-4 shadow-soft md:grid-cols-2 md:gap-6 md:p-6"
      >
        <div className="order-2 md:order-1">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-mocha">
            About Sofa Storys
          </p>
          <h2
            id="home-about-heading"
            className="mt-2 font-display text-[clamp(1.7rem,3.8vw,2.7rem)] font-semibold leading-[1.1] tracking-tight text-brand-espresso"
          >
            Bangalore experts in sofa repair and custom comfort
          </h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-brand-brown/82 md:text-base">
            We restore, renovate, and build sofas with premium materials and skilled craftsmanship. From
            foam replacement to complete custom designs, every project is tailored to your space and style.
          </p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-brand-brown/78">
            Trusted doorstep service across Bangalore with transparent pricing and quality-focused delivery.
          </p>
        </div>
        <figure className="order-1 overflow-hidden rounded-[1rem] md:order-2">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=82"
            alt="Elegant living room with premium sofa"
            className="aspect-[16/11] w-full object-cover"
            loading="lazy"
          />
        </figure>
      </motion.div>
    </section>
  )
}
