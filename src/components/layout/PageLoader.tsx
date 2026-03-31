import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { easeOutExpo } from '../../lib/motion'

export function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 1400)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: easeOutExpo }}
          aria-busy="true"
          aria-label="Loading Sofa Storys"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="relative h-16 w-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-brand-taupe/25"
                aria-hidden
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-mocha"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }}
                aria-hidden
              />
            </motion.div>
            <motion.p
              className="font-display text-3xl font-semibold tracking-[0.08em] text-brand-espresso"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.6, ease: easeOutExpo }}
            >
              Sofa Storys
            </motion.p>
            <motion.div
              className="h-px w-16 origin-left bg-gradient-to-r from-brand-mocha to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.7, ease: easeOutExpo }}
              aria-hidden
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
