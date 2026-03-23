import React from 'react'
import Hero from '@/components/Hero'
import AboutSection from '@/components/About'
import FeaturedBooks from '@/components/FeatureBooks'
import FeaturesSection from '@/components/FeatureSection'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonial'
import FAQSection from '@/components/FAQ'
import WeServe from '@/components/WeServe'
import FinalCTA from '@/components/CTA'
import GiftingSection from '@/components/gifting'



const Home = () => {
  return (
    <>
    <Hero />
    <AboutSection />
    <WeServe />
    <FeaturedBooks />
    <FeaturesSection />
    <GiftingSection />
    <Pricing />
    <Testimonials />
    <FAQSection />
    <FinalCTA />

    </>
    

  )
}

export default Home
