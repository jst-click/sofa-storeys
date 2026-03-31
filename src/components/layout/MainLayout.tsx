import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ROUTES } from '../../routes/paths'

export function MainLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === ROUTES.home
  const whatsappLink = 'https://wa.me/919353056099'
  const callLink = 'tel:+919353056099'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className={isHome ? undefined : 'min-h-[55vh] pt-[4.75rem] md:pt-[5.15rem]'}
      >
        <Outlet />
      </main>
      <Footer />
      <a
        href={callLink}
        aria-label="Call +91 93530 56099"
        className="fixed bottom-5 left-5 z-[120] inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-espresso text-white shadow-lg transition hover:scale-[1.02] hover:bg-brand-rich focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-espresso md:hidden"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M6.62 10.79a15.42 15.42 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.75-.25 1.02l-2.2 2.2Z" />
        </svg>
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-[120] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-sans text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#1ebe5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M16.04 3.2C8.9 3.2 3.12 8.98 3.12 16.12c0 2.28.6 4.5 1.74 6.45L3 29l6.6-1.73a12.86 12.86 0 0 0 6.44 1.75h.01c7.13 0 12.92-5.78 12.92-12.92S23.18 3.2 16.04 3.2Zm0 23.5h-.01a10.63 10.63 0 0 1-5.42-1.48l-.39-.23-3.92 1.03 1.05-3.82-.25-.4a10.63 10.63 0 0 1-1.63-5.67c0-5.87 4.77-10.64 10.63-10.64a10.65 10.65 0 0 1 10.64 10.64c0 5.86-4.77 10.63-10.63 10.63Zm5.83-7.96c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.52-.15-.73.16-.21.3-.83 1.05-1.01 1.26-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.56-.94-.83-1.57-1.85-1.75-2.17-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.73-1.77-1-2.42-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.55.08-.84.4-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.12 3.05 1.28 3.26.16.21 2.22 3.39 5.37 4.75.75.32 1.33.51 1.79.65.75.24 1.43.2 1.96.12.6-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
        </svg>
        WhatsApp
      </a>
    </>
  )
}
