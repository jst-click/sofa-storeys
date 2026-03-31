import { type ReactNode } from 'react'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
  eyebrow?: string
}

export function Section({ id, children, className = '', title, subtitle, eyebrow }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={`mx-auto max-w-[90rem] px-5 py-14 sm:px-8 md:py-20 lg:px-12 lg:py-24 ${className}`}
    >
      {(eyebrow || title || subtitle) && (
        <header className="mb-10 max-w-3xl md:mb-12 lg:mx-auto lg:mb-14 lg:text-center">
          {eyebrow && (
            <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-mocha">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2
              id={id ? `${id}-heading` : undefined}
              className="text-balance font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-brand-espresso"
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-3 max-w-2xl font-sans text-base leading-relaxed text-brand-brown/78 md:text-lg md:leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  )
}
