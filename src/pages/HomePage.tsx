import { useEffect } from 'react'
import { Hero } from '../components/sections/Hero'
import { HomeAbout } from '../components/sections/HomeAbout'
import { FeaturedCollections } from '../components/sections/FeaturedCollections'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'
import { StorySection } from '../components/sections/StorySection'
import { Services } from '../components/sections/Services'
import { ProductShowcase } from '../components/sections/ProductShowcase'
import { Testimonials } from '../components/sections/Testimonials'
import { CTA } from '../components/sections/CTA'

export function HomePage() {
  useEffect(() => {
    document.title = 'Sofa Storys | Where Comfort Meets Your Story'
  }, [])

  return (
    <>
      <Hero />
      <HomeAbout />
      <FeaturedCollections />
      <WhyChooseUs />
      <StorySection />
      <Services />
      <ProductShowcase />
      <Testimonials />
      <CTA />
    </>
  )
}
