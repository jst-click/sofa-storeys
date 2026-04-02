import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Section } from '../components/ui/Section'
import { fadeInUp, revealViewport } from '../lib/motion'

export function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Sofa Storys'
  }, [])

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Visit or reach out"
      subtitle="Luxury home comfort in Bangalore — professional sofa repair and manufacturing. Doorstep service available across the city."
      className="pb-16"
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid gap-6 lg:grid-cols-2 lg:gap-10"
      >
        <div className="rounded-[1.75rem] border border-brand-taupe/25 bg-white/70 p-6 shadow-soft backdrop-blur-sm md:p-8">
          <h2 className="font-display text-2xl font-semibold text-brand-espresso">Contact</h2>
          <ul className="mt-5 space-y-3 font-sans text-brand-brown">
            <li>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-mocha">Phone</p>
              <a href="tel:+919353056099" className="mt-1 block text-lg text-brand-espresso hover:underline">
                +91 93530 56099
              </a>
            </li>
            <li>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-mocha">WhatsApp</p>
              <a
                href="https://wa.me/919353056099"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg text-brand-espresso hover:underline"
              >
                Message us
              </a>
            </li>
            <li>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-mocha">Location</p>
              <p className="mt-1 max-w-sm leading-relaxed text-brand-brown/90">
                7th Main Road, 1st Block, 6th Cross Rd, Venkatapura, Koramangala, Bengaluru, Karnataka 560034.
                Visits and consultations by appointment.
              </p>
            </li>
            <li>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-mocha">Service area</p>
              <p className="mt-1 max-w-sm leading-relaxed text-brand-brown/90">
                Doorstep service available across Bangalore.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center rounded-[1.75rem] border border-dashed border-brand-taupe/40 bg-brand-sand/20 p-6 md:p-8">
          <p className="font-sans text-sm leading-relaxed text-brand-brown/85">
            Prefer a quick response? Call or WhatsApp us directly and our team will assist you.
          </p>
          <a
            href="https://wa.me/919353056099" target="_blank" rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center rounded-2xl bg-brand-espresso px-8 py-3.5 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-cream shadow-[0_8px_32px_-8px_rgba(42,29,22,0.45)] transition-colors hover:bg-brand-rich"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </Section>
  )
}

