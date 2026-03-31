import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CTA } from '../components/sections/CTA'
import { fadeInUp, revealViewport, staggerContainer } from '../lib/motion'

const galleryItems = [
  {
    name: 'Luxury Leather Corner Set',
    image: '/gallery-1.png',
  },
  {
    name: 'Maroon Custom Sectional',
    image: '/gallery-2.png',
  },
  {
    name: 'Designer 3+1+1 Sofa Set',
    image: '/gallery-3.png',
  },
  {
    name: 'Lounge Sectional with Storage',
    image: '/gallery-4.png',
  },
  {
    name: 'Leather Sofa',
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=82',
  },
  {
    name: 'Recliner Sofas',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=82',
  },
  {
    name: 'Sofa Renovation',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=82',
  },
  {
    name: 'Couch Repair',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=82',
  },
  {
    name: 'Custom Sofa',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=82',
  },
  {
    name: 'Fabric Sofas',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=82',
  },
  {
    name: 'Couch Upholstery',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=82',
  },
  {
    name: 'Furniture Repairs',
    image: 'https://images.unsplash.com/photo-1567538096639-e914c584b9d6?auto=format&fit=crop&w=1200&q=82',
  },
  {
    name: 'Sofa Manufacturers',
    image: 'https://images.unsplash.com/photo-1617098474202-0d0d7f60a854?auto=format&fit=crop&w=1200&q=82',
  },
  {
    name: 'Sitting Room',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=82',
  },
  {
    name: 'Chair Upholstery',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=82',
  },
  {
    name: 'Customised Sofa',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1200&q=82',
  },
]

export function LookbookPage() {
  useEffect(() => {
    document.title = 'Lookbook | Sofa Storys'
  }, [])

  return (
    <>
      <section className="mx-auto max-w-[90rem] px-5 pb-6 pt-8 sm:px-8 md:pb-8 md:pt-10 lg:px-12">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={revealViewport}>
          <h1 className="text-center font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold tracking-tight text-brand-espresso">
            Gallery
          </h1>
          <p className="mx-auto mt-2 max-w-3xl text-center font-sans text-sm leading-relaxed text-brand-brown/80 md:text-base">
            Explore our sofa works, repairs, and custom builds.
          </p>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {galleryItems.map((item) => (
            <motion.li
              key={item.name}
              variants={fadeInUp}
              className="overflow-hidden rounded-[1.1rem] border border-brand-taupe/25 bg-white/75 shadow-soft"
            >
              <img
                src={item.image}
                alt={item.name}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <p className="border-t border-brand-taupe/20 px-4 py-3 font-sans text-sm font-medium text-brand-espresso">
                {item.name}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </section>
      <CTA />
    </>
  )
}
