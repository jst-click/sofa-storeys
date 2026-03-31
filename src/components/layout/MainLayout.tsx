import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ROUTES } from '../../routes/paths'

export function MainLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === ROUTES.home

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
    </>
  )
}
