import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'

type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onAnimationStart' | 'onAnimationEnd' | 'onDragStart' | 'onDrag' | 'onDragEnd'
>

type Variant = 'primary' | 'secondary' | 'outline'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-espresso text-brand-cream shadow-[0_8px_32px_-8px_rgba(42,29,22,0.45)] ring-1 ring-white/10 hover:bg-brand-rich hover:shadow-[0_12px_40px_-10px_rgba(42,29,22,0.5)]',
  secondary:
    'bg-white/90 text-brand-espresso shadow-soft ring-1 ring-brand-taupe/25 hover:bg-brand-cream hover:ring-brand-mocha/30',
  outline:
    'border border-brand-espresso/20 bg-white/40 text-brand-espresso ring-1 ring-transparent backdrop-blur-sm hover:border-brand-mocha/40 hover:bg-brand-ivory/90 hover:ring-brand-taupe/30',
}

export type ButtonProps = NativeButtonProps & {
  variant?: Variant
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', children, type = 'button', ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        whileHover={{ scale: 1.015, y: -1 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.4 }}
        className={`inline-flex cursor-pointer items-center justify-center rounded-2xl px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mocha ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    )
  },
)

Button.displayName = 'Button'
