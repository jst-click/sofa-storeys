import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { fadeInUp, revealViewport } from '../../lib/motion'
import { ROUTES } from '../../routes/paths'

export function CTA() {
  const navigate = useNavigate()

  return (
    <section className="relative pb-8 pt-4 md:pb-10 md:pt-5" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="relative overflow-hidden rounded-[1.25rem] border border-brand-taupe/30 bg-[linear-gradient(180deg,#7b5a3f_0%,#6a4d36_40%,#5a412f_100%)] px-6 py-8 text-center shadow-[0_30px_80px_-35px_rgba(42,29,22,0.7)] sm:px-10 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.2),transparent_30%),repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_38px)]" aria-hidden />
          <h2
            id="cta-heading"
            className="relative text-balance font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight text-brand-cream"
          >
            Find the Sofa That Fits Your Story
          </h2>
          <div className="relative mt-6 flex flex-wrap justify-center gap-3">
            <Button variant="secondary" onClick={() => navigate(ROUTES.contact)}>
              Visit Showroom
            </Button>
            <Button
              variant="outline"
              className="!border-white/50 !bg-white/5 !text-brand-cream !ring-white/15 hover:!bg-white/12"
              onClick={() => navigate(ROUTES.contact)}
            >
              Talk to Designer
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
