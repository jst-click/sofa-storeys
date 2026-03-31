import { useEffect } from 'react'
import { Services } from '../components/sections/Services'

export function ServicesPage() {
  useEffect(() => {
    document.title = 'Services | Sofa Storys'
  }, [])

  return <Services />
}
