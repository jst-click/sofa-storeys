import { motion } from 'framer-motion'
import { fadeInUp, revealViewport, staggerContainer } from '../../lib/motion'

const reasons = [
  {
    title: 'Handcrafted Comfort',
    text: 'Premium materials and comfort-led builds for everyday living.',
    icon: (
      <path
        fillRule="evenodd"
        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
        clipRule="evenodd"
      />
    ),
  },
  {
    title: 'Modern Design',
    text: 'Timeless silhouettes that suit contemporary Bangalore homes.',
    icon: (
      <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v1h2V5a1 1 0 011-1h4a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm2 2v10h10V7H6z" />
    ),
  },
  {
    title: 'Custom Options',
    text: 'Sizes, fabrics, and finishes tailored to your space and lifestyle.',
    icon: (
      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3 4h1l2.5 7h8l2-5H6.2L5 4H3zm3 9h10a1 1 0 00.96-1.27L15.1 7H7.3L6 13z" />
    ),
  },
  {
    title: 'Fast Delivery',
    text: 'Reliable timelines with careful transport and doorstep support.',
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.16-1.68-4.16-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.73 1.36 4.73 4.03c-.01 1.83-1.38 2.83-3.12 3.16z" />
    ),
  },
]

export function WhyChooseUs() {
  return (
    <section id="why" className="mx-auto max-w-[90rem] px-5 pb-4 pt-0 sm:px-8 md:pb-6 lg:px-12" aria-labelledby="why-heading">
      <h2
        id="why-heading"
        className="mb-4 text-center font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.08] tracking-tight text-brand-espresso md:mb-5"
      >
        Why Storys Sofa
      </h2>
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid gap-3 border-y border-brand-taupe/25 py-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {reasons.map((r) => (
          <motion.li key={r.title} variants={fadeInUp} className="text-center lg:border-r lg:border-brand-taupe/20 lg:last:border-r-0">
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-sand/60 ring-1 ring-brand-taupe/30">
              <svg className="h-5 w-5 text-brand-mocha" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                {r.icon}
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-brand-espresso">
              {r.title}
            </h3>
            <p className="mx-auto mt-1 max-w-[220px] font-sans text-xs leading-relaxed text-brand-brown/78">
              {r.text}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
