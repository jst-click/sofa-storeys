import { useEffect, useId, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { easeOutExpo } from '../../lib/motion'
import { SERVICES } from '../../data/services'
import { ROUTES, serviceDetailPath } from '../../routes/paths'

const mainNavLinks = [
  { to: ROUTES.home, label: 'Home' },
  { to: ROUTES.sofas, label: 'About Us' },
  { to: ROUTES.customSofas, label: 'Custom Sofas' },
  { to: ROUTES.lookbook, label: 'Lookbook' },
  { to: ROUTES.contact, label: 'Contact' },
] as const

export function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const servicesMenuId = useId()

  const isHome = pathname === ROUTES.home
  const useSolidNav = scrolled || !isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative rounded-full px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
      useSolidNav
        ? isActive
          ? 'text-brand-espresso'
          : 'text-brand-brown/90 hover:text-brand-espresso'
        : isActive
          ? 'text-white'
          : 'text-brand-ivory/95 hover:text-white'
    } after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-300 ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
    }`

  const servicesTriggerClass = (isActive: boolean) =>
    `relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
      useSolidNav
        ? isActive
          ? 'text-brand-espresso'
          : 'text-brand-brown/90 hover:text-brand-espresso'
        : isActive
          ? 'text-white'
          : 'text-brand-ivory/95 hover:text-white'
    } after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-300 ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0 group-hover:after:scale-x-100'
    }`

  const isServicesRoute = pathname === ROUTES.services || pathname.startsWith(`${ROUTES.services}/`)

  return (
    <motion.header
      role="banner"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: easeOutExpo }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-500 ease-out ${
        useSolidNav
          ? 'border-b border-brand-taupe/25 bg-white/75 shadow-[0_8px_40px_-12px_rgba(42,29,22,0.08)] backdrop-blur-xl backdrop-saturate-150'
          : 'border-b border-transparent bg-gradient-to-b from-brand-rich/25 via-brand-rich/5 to-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-[90rem] items-center justify-between gap-3 px-5 py-3.5 sm:px-8 lg:px-12"
        aria-label="Primary"
      >
        <NavLink
          to={ROUTES.home}
          className="transition-opacity duration-300 hover:opacity-90"
          end
        >
          <span className="inline-flex items-center gap-2 sm:gap-2.5">
            <span className="relative h-9 w-[68px] overflow-hidden sm:h-11 sm:w-[84px]">
              <img
                src="/logo-sofa-icon.png"
                alt=""
                aria-hidden
                className={`absolute left-0 top-0 h-9 w-auto max-w-none object-contain transition-shadow sm:h-11 ${useSolidNav ? 'shadow-none' : 'shadow-[0_6px_20px_rgba(0,0,0,0.35)]'}`}
              />
            </span>
            <span className={`block font-display text-[1.2rem] font-semibold leading-none tracking-[0.01em] sm:text-[1.45rem] lg:text-[1.9rem] ${useSolidNav ? 'text-brand-espresso' : 'text-brand-cream drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]'}`}>
              Sofa Storys
            </span>
          </span>
        </NavLink>

        <ul className="hidden items-center gap-1 font-sans md:flex">
          {mainNavLinks.slice(0, 3).map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === ROUTES.home}>
                {link.label}
              </NavLink>
            </li>
          ))}

          <li className="group relative">
            <NavLink
              to={ROUTES.services}
              className={({ isActive }) => servicesTriggerClass(isActive)}
              aria-haspopup="true"
              aria-controls={servicesMenuId}
            >
              Services
              <svg
                className={`h-3.5 w-3.5 shrink-0 opacity-80 transition-transform duration-200 group-hover:rotate-180 ${
                  useSolidNav ? 'text-brand-brown/80' : 'text-brand-ivory/90'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </NavLink>
            <div
              id={servicesMenuId}
              role="menu"
              aria-label="Service pages"
              className="invisible absolute left-0 top-full z-50 min-w-[min(100vw-2rem,280px)] pt-2 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
            >
              <div className="pointer-events-auto rounded-2xl border border-brand-taupe/25 bg-white/95 py-2 shadow-[0_20px_50px_-12px_rgba(42,29,22,0.2)] ring-1 ring-white/80 backdrop-blur-xl">
                <ul className="max-h-[min(70vh,360px)] overflow-y-auto">
                  <li role="none">
                    <Link
                      role="menuitem"
                      to={ROUTES.services}
                      className="block px-4 py-2.5 font-display text-sm font-semibold text-brand-espresso transition-colors hover:bg-brand-sand/50"
                    >
                      All services
                    </Link>
                  </li>
                  <li className="mx-3 border-t border-brand-taupe/20" role="separator" />
                  {SERVICES.map((s) => (
                    <li key={s.slug} role="none">
                      <Link
                        role="menuitem"
                        to={serviceDetailPath(s.slug)}
                        className="block px-4 py-2.5 font-sans text-[13px] leading-snug text-brand-brown transition-colors hover:bg-brand-sand/50 hover:text-brand-espresso"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          {mainNavLinks.slice(3).map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === ROUTES.home}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-xl border p-2.5 transition-colors md:hidden ${
            useSolidNav
              ? 'border-brand-taupe/40 text-brand-espresso'
              : 'border-white/35 bg-white/10 text-brand-cream backdrop-blur-sm'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-brand-taupe/30 bg-white/95 px-5 py-4 shadow-inner backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-0.5 font-sans text-sm font-medium">
            {mainNavLinks.slice(0, 3).map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === ROUTES.home}
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-2.5 transition-colors ${
                      isActive
                        ? 'bg-brand-sand/80 text-brand-espresso'
                        : 'text-brand-brown hover:bg-brand-sand/60 hover:text-brand-espresso'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <li>
              <button
                type="button"
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors ${
                  isServicesRoute
                    ? 'bg-brand-sand/80 text-brand-espresso'
                    : 'text-brand-brown hover:bg-brand-sand/60 hover:text-brand-espresso'
                }`}
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                <span>Services</span>
                <svg
                  className={`h-4 w-4 shrink-0 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <ul className="mt-1 border-l-2 border-brand-taupe/30 pl-3">
                  <li>
                    <NavLink
                      to={ROUTES.services}
                      className={({ isActive }) =>
                        `block rounded-lg py-2 pl-2 text-[13px] ${
                          isActive && pathname === ROUTES.services
                            ? 'font-semibold text-brand-espresso'
                            : 'text-brand-brown/90 hover:text-brand-espresso'
                        }`
                      }
                      end
                    >
                      All services
                    </NavLink>
                  </li>
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <NavLink
                        to={serviceDetailPath(s.slug)}
                        className={({ isActive }) =>
                          `block rounded-lg py-2 pl-2 text-[13px] ${
                            isActive ? 'font-semibold text-brand-espresso' : 'text-brand-brown/90 hover:text-brand-espresso'
                          }`
                        }
                      >
                        {s.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {mainNavLinks.slice(3).map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-2.5 transition-colors ${
                      isActive
                        ? 'bg-brand-sand/80 text-brand-espresso'
                        : 'text-brand-brown hover:bg-brand-sand/60 hover:text-brand-espresso'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  )
}
