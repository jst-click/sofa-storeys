import type { Variants } from 'framer-motion'

/** Smooth deceleration — feels premium on large UI motion */
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOutExpo },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
}

/** Viewport defaults for scroll reveals — smoother feel */
export const revealViewport = { once: true, amount: 0.22, margin: '-80px 0px' } as const
