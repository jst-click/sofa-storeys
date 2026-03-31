import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../ui/Button'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import { ROUTES } from '../../routes/paths'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1920&q=85'

export function Hero() {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 48])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[min(62svh,560px)] overflow-hidden md:min-h-[min(68svh,600px)]"
      aria-labelledby="hero-heading"
    >
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 -z-10">
        <img
          src={HERO_IMAGE}
          alt=""
          role="presentation"
          className="h-full w-full scale-105 object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-rich/24 via-brand-rich/10 to-transparent" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-rich/22 via-transparent to-transparent" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_70%_20%,transparent_45%,rgba(42,29,22,0.22)_100%)]"
          aria-hidden
        />
      </motion.div>

      <div className="mx-auto flex min-h-[min(62svh,560px)] max-w-[90rem] flex-col justify-end px-5 pb-8 pt-16 sm:px-8 sm:pb-10 sm:pt-20 md:min-h-[min(68svh,600px)] lg:justify-center lg:px-12 lg:pb-12 lg:pt-20">
        <div
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-brand-rich/26 via-brand-rich/12 to-transparent lg:block"
          aria-hidden
        />
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative w-full rounded-[1.2rem] bg-black/10 p-5 shadow-[0_20px_64px_-20px_rgba(42,29,22,0.45)] ring-1 ring-white/12 backdrop-blur-[1px] sm:rounded-[1.6rem] sm:p-8 lg:min-h-[min(68svh,600px)] lg:max-w-none lg:rounded-none lg:border-0 lg:bg-black/8 lg:py-16"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full space-y-4 text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-brand-sand/70" aria-hidden />
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-brand-sand/95">
                Sofa Storys · Est. Craft
              </p>
            </motion.div>
            <motion.h1 variants={fadeInUp} id="hero-heading" className="text-balance font-display text-[clamp(1.9rem,7.6vw,3.7rem)] font-semibold leading-[1.06] tracking-[-0.015em] text-brand-cream drop-shadow-[0_4px_36px_rgba(0,0,0,0.35)]">
              Where Comfort Meets Your Story
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="w-full font-sans text-base leading-[1.65] text-brand-ivory/92 md:text-lg md:leading-relaxed"
            >
              Crafted sofas for modern homes — timeless silhouettes, honest materials, and the quiet
              luxury of feeling at home.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-4 flex flex-col items-center gap-2 sm:mt-6 sm:flex-row sm:justify-center sm:gap-3">
              <Button variant="secondary" className="w-full sm:w-auto" onClick={() => navigate(ROUTES.sofas)}>
                Explore Sofas
              </Button>
              <Button
                variant="outline"
                className="w-full !border-white/45 !bg-white/10 !text-brand-cream !ring-white/20 hover:!bg-white/18 sm:w-auto"
                onClick={() => navigate(ROUTES.contact)}
              >
                Book a Visit
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
