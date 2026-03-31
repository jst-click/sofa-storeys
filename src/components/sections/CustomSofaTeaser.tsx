import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { fadeInUp, revealViewport } from '../../lib/motion'
import { ROUTES } from '../../routes/paths'

export function CustomSofaTeaser() {
  const navigate = useNavigate()

  return (
    <section
      id="custom"
      className="relative overflow-hidden border-y border-brand-taupe/20 bg-gradient-to-br from-brand-ivory via-brand-sand/30 to-brand-cream py-16 md:py-20"
      aria-labelledby="custom-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-brand-taupe/15 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-[90rem] flex-col items-center gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-12 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="max-w-xl text-center lg:flex-1 lg:text-left"
        >
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-mocha">
            Custom Sofas
          </p>
          <h2
            id="custom-heading"
            className="mt-3 text-balance font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.12] text-brand-espresso"
          >
            Shaped by your space, finished by our makers
          </h2>
          <p className="mt-3 font-sans text-base leading-relaxed text-brand-brown/82 md:text-lg">
            From fabric to footprint, we design one-of-one pieces that feel like they were always meant
            to be there.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button onClick={() => navigate(ROUTES.contact)}>Talk to a Designer</Button>
            <Button variant="outline" onClick={() => navigate(ROUTES.services)}>
              Our Services
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={revealViewport}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl lg:flex-1"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-white/80 to-brand-sand/20 blur-xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_32px_80px_-24px_rgba(42,29,22,0.35)] ring-1 ring-white/60">
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=82"
              alt="Custom upholstered sofa in a bright living room"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-rich/10 to-transparent" aria-hidden />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
