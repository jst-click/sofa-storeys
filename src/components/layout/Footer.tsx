import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'

const social = [
  { name: 'Instagram', href: 'https://instagram.com', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' },
  { name: 'Pinterest', href: 'https://pinterest.com', icon: 'M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.397 2.967 7.397 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z' },
]

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-brand-taupe/30 bg-gradient-to-b from-brand-ivory to-brand-sand/25"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[90rem] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mb-8 rounded-2xl border border-brand-taupe/30 bg-white/70 px-4 py-4 shadow-soft backdrop-blur-sm sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 text-center sm:gap-3">
            <span className="rounded-full bg-brand-sand/70 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-espresso">
              Doorstep Service
            </span>
            <span className="rounded-full bg-brand-sand/70 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-espresso">
              Premium Finish
            </span>
            <span className="rounded-full bg-brand-sand/70 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-espresso">
              Best Price Guarantee
            </span>
            <span className="rounded-full bg-brand-sand/70 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-espresso">
              Bangalore Support
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="relative h-12 w-[92px] overflow-hidden">
                <img
                  src="/logo-sofa-icon.png"
                  alt=""
                  aria-hidden
                  className="absolute left-0 top-0 h-12 w-auto max-w-none object-contain"
                />
              </span>
              <p className="font-display text-2xl font-semibold text-brand-espresso">Sofa Storys</p>
            </div>
            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-brand-brown/85">
              Professional sofa repair and manufacturing experts in Bangalore.
            </p>
            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-brand-brown/75">
              Recliner repair, foam replacement, upholstery, renovation, and custom sofa design for modern homes.
            </p>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-brand-espresso">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 font-sans text-sm text-brand-brown">
              <li>
                <a href="tel:+919353056099" className="transition-colors hover:text-brand-espresso">
                  +91 93530 56099
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919353056099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-espresso"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link to={ROUTES.contact} className="transition-colors hover:text-brand-espresso">
                  Contact page
                </Link>
              </li>
              <li className="pt-1 text-brand-brown/80">Bangalore, Karnataka</li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-brand-espresso">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 font-sans text-sm">
              <li>
                <Link
                  to={ROUTES.sofas}
                  className="text-brand-brown transition-colors hover:text-brand-espresso"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.services}
                  className="text-brand-brown transition-colors hover:text-brand-espresso"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.lookbook}
                  className="text-brand-brown transition-colors hover:text-brand-espresso"
                >
                  Lookbook
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.customSofas}
                  className="text-brand-brown transition-colors hover:text-brand-espresso"
                >
                  Custom Sofas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-brand-espresso">
              Follow
            </h3>
            <ul className="mt-4 flex gap-4">
              {social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-taupe/50 text-brand-brown transition-colors hover:border-brand-mocha hover:bg-brand-sand hover:text-brand-espresso"
                    aria-label={item.name}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d={item.icon} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919353056099"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-xl bg-brand-espresso px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-cream transition-colors hover:bg-brand-rich"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-brand-taupe/30 pt-6 text-center font-sans text-xs text-brand-brown/70 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Sofa Storys. All rights reserved.</p>
          <p>
            <a href="https://sofastorys.com" className="hover:text-brand-espresso">
              sofastorys.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

