import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CTA } from '../components/sections/CTA'
import { fadeInUp, revealViewport, staggerContainer } from '../lib/motion'

type GalleryItem = { name: string; image: string }

export function LookbookPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])

  useEffect(() => {
    document.title = 'Lookbook | Sofa Storys'

    let alive = true
    fetch('/gallery-manifest.json')
      .then(async (res) => {
        if (!res.ok) return []
        const buffer = await res.arrayBuffer()
        const parse = (raw: string) => JSON.parse(raw) as GalleryItem[]

        try {
          return parse(new TextDecoder('utf-8').decode(buffer))
        } catch {
          try {
            return parse(new TextDecoder('utf-16le').decode(buffer))
          } catch {
            return []
          }
        }
      })
      .then((data: GalleryItem[]) => {
        if (!alive || !Array.isArray(data)) return
        setGalleryItems(data.filter((item) => item?.image))
      })
      .catch(() => {
        if (alive) setGalleryItems([])
      })

    return () => {
      alive = false
    }
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
              key={item.image}
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
