import { type HTMLAttributes } from 'react'
import { motion } from 'framer-motion'

type CardProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'onAnimationStart' | 'onAnimationEnd' | 'onDragStart' | 'onDrag' | 'onDragEnd'
> & {
  hoverLift?: boolean
}

export function Card({ className = '', hoverLift = true, children, ...props }: CardProps) {
  return (
    <motion.div
      initial={false}
      whileHover={
        hoverLift
          ? {
              y: -8,
              transition: { type: 'spring', stiffness: 380, damping: 36, mass: 0.45 },
            }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 380, damping: 36, mass: 0.45 }}
      className={`rounded-[1.75rem] border border-white/70 bg-white/75 shadow-soft ring-1 ring-brand-taupe/15 backdrop-blur-xl transition-shadow duration-500 hover:shadow-lift ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
