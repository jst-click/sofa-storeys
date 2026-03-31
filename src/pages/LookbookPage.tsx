import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CTA } from '../components/sections/CTA'
import { fadeInUp, revealViewport, staggerContainer } from '../lib/motion'

type GalleryItem = { name: string; image: string }
const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=82'

function withBaseUrl(path: string) {
  if (!path) return path
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) return path
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${normalizedBase}${normalizedPath}`
}

export function LookbookPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])

  useEffect(() => {
    document.title = 'Lookbook | Sofa Storys'

    let alive = true
    fetch(withBaseUrl('gallery-manifest.json'))
      .then(async (res) => {
        if (!res.ok) return []
        const buffer = await res.arrayBuffer()
        const parse = (raw: string) => JSON.parse(raw.replace(/^\uFEFF/, '').trim()) as GalleryItem[]

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
        setGalleryItems(
          data
            .filter((item) => item?.image)
            .map((item) => ({
              ...item,
              image: withBaseUrl(item.image),
            })),
        )
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
          {galleryItems.length === 0 && (
            <li className="col-span-full rounded-[1.1rem] border border-brand-taupe/25 bg-white/80 p-6 text-center font-sans text-sm text-brand-brown/80">
              Gallery images are not available yet. Please add files to `public/gallery` and keep paths in
              `public/gallery-manifest.json` in sync.
            </li>
          )}
          {galleryItems.map((item, index) => (
            <motion.li
              key={`${item.image}-${index}`}
              variants={fadeInUp}
              className="overflow-hidden rounded-[1.1rem] border border-brand-taupe/25 bg-white/75 shadow-soft"
            >
              <img
                src={item.image}
                alt={item.name}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = FALLBACK_IMAGE
                }}
              />
            </motion.li>
          ))}
        </motion.ul>
      </section>
      <CTA />
    </>
  )
}
