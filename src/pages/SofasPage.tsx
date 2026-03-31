import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CTA } from '../components/sections/CTA'
import { fadeInUp, revealViewport, staggerContainer } from '../lib/motion'

export function SofasPage() {
  useEffect(() => {
    document.title = 'About Us | Sofa Storys'
  }, [])

  return (
    <>
      <section className="mx-auto max-w-[90rem] px-5 pb-4 pt-8 sm:px-8 md:pb-6 md:pt-10 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid items-center gap-5 rounded-[1.4rem] border border-brand-taupe/25 bg-white/70 p-5 md:grid-cols-2 md:p-7"
        >
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-mocha">About us</p>
            <h1 className="mt-2 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold tracking-tight text-brand-espresso">
              Crafting Comfort Stories in Bangalore
            </h1>
            <p className="mt-3 font-sans text-base leading-relaxed text-brand-brown/82">
              Sofa Storys is a complete sofa care and manufacturing studio. We handle repairs, upholstery,
              renovation, and custom sofa making with a strong focus on comfort, durability, and finish.
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-brand-brown/78">
              Our team combines practical design guidance with skilled execution, so every sofa fits your
              space and feels right for daily life.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.1rem]">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=82"
              alt="Premium sofa in a modern living room"
              className="aspect-[16/11] w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=82',
              alt: 'Warm living room with premium sofa styling',
            },
            {
              src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=82',
              alt: 'Elegant modern sofa in neutral interior',
            },
            {
              src: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=82',
              alt: 'Leather sofa with detailed stitching',
            },
          ].map((img) => (
            <motion.figure
              key={img.src}
              variants={fadeInUp}
              className="overflow-hidden rounded-[1.2rem] border border-brand-taupe/25 bg-white/70 shadow-soft"
            >
              <img src={img.src} alt={img.alt} className="aspect-[16/10] w-full object-cover" loading="lazy" />
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-5 rounded-[1.25rem] border border-brand-taupe/25 bg-white/65 p-5 md:p-6"
        >
          <div className="pb-4 md:pb-5">
            <p className="mt-2 font-sans text-sm leading-relaxed text-brand-brown/82">
              Sofa Storys is a complete sofa care and manufacturing studio in Bangalore. We handle recliner
              repair, foam replacement, upholstery, full renovation, and custom sofa making under one roof.
            </p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-brand-brown/78">
              From first consultation to final delivery, our process stays transparent and customer-focused.
              We guide you on materials, dimensions, and finishes so your sofa fits both your room and your
              daily lifestyle.
            </p>
          </div>
          <div className="border-t border-brand-taupe/20 pt-4 md:pt-5">
            <h2 className="font-display text-xl font-semibold text-brand-espresso">Our Vision</h2>
            <p className="mt-2 font-sans text-sm leading-relaxed text-brand-brown/82">
              To become Bangalore's most trusted name for luxury comfort solutions by combining timeless
              design, durable quality, and customer-first service.
            </p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-brand-brown/78">
              We aim to set a benchmark where every customer receives premium craftsmanship, professional
              support, and dependable after-service at fair value.
            </p>
          </div>
          <div className="border-t border-brand-taupe/20 pt-4 md:pt-5">
            <h2 className="font-display text-xl font-semibold text-brand-espresso">Our Mission</h2>
            <p className="mt-2 font-sans text-sm leading-relaxed text-brand-brown/82">
              To deliver sofas that look elegant, feel premium, and perform reliably every day through
              strong structure, precise finishing, and honest workmanship.
            </p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-brand-brown/78">
              We continuously improve our methods, tools, and materials so each project gives better
              comfort, better finish, and better long-term performance.
            </p>
          </div>
          <div className="border-t border-brand-taupe/20 pt-4 md:pt-5">
            <h2 className="font-display text-xl font-semibold text-brand-espresso">Why Choose Us</h2>
            <ul className="mt-2 space-y-1.5 font-sans text-sm leading-relaxed text-brand-brown/82">
              <li>Premium materials and skilled craftsmanship.</li>
              <li>Customized designs for your space and comfort.</li>
              <li>Transparent pricing with reliable timelines.</li>
              <li>Doorstep service support across Bangalore.</li>
              <li>End-to-end support from design to delivery.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-5 rounded-[1.25rem] border border-brand-taupe/25 bg-brand-ivory/65 p-5 md:p-6"
        >
          <h2 className="font-display text-2xl font-semibold text-brand-espresso">Our Promise to You</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl bg-white/70 p-4">
              <h3 className="font-display text-lg font-semibold text-brand-espresso">Quality First</h3>
              <p className="mt-1.5 font-sans text-sm leading-relaxed text-brand-brown/82">
                We choose durable materials and proven construction standards for long-lasting comfort.
              </p>
            </div>
            <div className="rounded-xl bg-white/70 p-4">
              <h3 className="font-display text-lg font-semibold text-brand-espresso">Client Centric</h3>
              <p className="mt-1.5 font-sans text-sm leading-relaxed text-brand-brown/82">
                Every recommendation is tailored to your usage, room size, and design preference.
              </p>
            </div>
            <div className="rounded-xl bg-white/70 p-4">
              <h3 className="font-display text-lg font-semibold text-brand-espresso">Reliable Support</h3>
              <p className="mt-1.5 font-sans text-sm leading-relaxed text-brand-brown/82">
                Our Bangalore team is available for guidance, updates, and post-delivery assistance.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      <CTA />
    </>
  )
}
