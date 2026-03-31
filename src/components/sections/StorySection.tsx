import { motion } from 'framer-motion'
import { fadeInUp, revealViewport } from '../../lib/motion'

export function StorySection() {
  return (
    <section id="story" className="py-4 md:py-6" aria-labelledby="story-heading">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={revealViewport} className="relative overflow-hidden rounded-[1.35rem]">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=82"
            alt="Relaxed living room story scene"
            className="aspect-[21/8] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-rich/70 via-brand-rich/38 to-transparent" aria-hidden />
          <div className="absolute inset-y-0 left-0 flex max-w-xl items-center p-6 sm:p-8 md:p-10">
            <div>
              <h2 id="story-heading" className="font-display text-4xl font-semibold text-brand-cream">
                Every sofa has a story.
              </h2>
              <p className="mt-3 font-sans leading-relaxed text-brand-ivory/92">
                Family movie nights. Conversations that last hours. Quiet moments with coffee.
              </p>
              <button
                type="button"
                className="mt-4 rounded-xl bg-white/85 px-5 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-espresso transition-colors hover:bg-white"
              >
                See Our Story
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
