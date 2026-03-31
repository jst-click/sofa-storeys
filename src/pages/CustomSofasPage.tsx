import { useEffect } from 'react'
import { CustomSofaTeaser } from '../components/sections/CustomSofaTeaser'
import { FeaturedCollections } from '../components/sections/FeaturedCollections'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'
import { CTA } from '../components/sections/CTA'

export function CustomSofasPage() {
  useEffect(() => {
    document.title = 'Custom Sofas | Sofa Storys'
  }, [])

  return (
    <>
      <CustomSofaTeaser />
      <FeaturedCollections />
      <WhyChooseUs />
      <CTA />
    </>
  )
}
