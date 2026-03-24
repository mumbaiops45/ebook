"use client";
import { useEffect } from "react";
import React from 'react'
import Hero from '@/components/Hero'
import AboutSection from '@/components/About'
import FeaturedBooks from '@/components/FeatureBooks'
import FeaturesSection from '@/components/FeatureSection'
import Testimonials from '@/components/Testimonial'
import FAQSection from '@/components/FAQ'
import WeServe from '@/components/WeServe'
import FinalCTA from '@/components/CTA'
import GiftingSection from '@/components/gifting'



const Home = () => {
   useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return (
    <>
      <Hero />
      <AboutSection />
      <WeServe />
      <FeaturedBooks />
      <FeaturesSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <GiftingSection />
      <div className="text-center bg-gradient-to-r from-[var(--primary)]/10 to-transparent border border-[var(--primary)]/20 rounded-xl px-6 py-5">
  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
   <span className="text-[var(--primary)] font-semibold">
      {" "} Salil Javeri{" "}
    </span> bringing you a collection of 
    <span className="text-[var(--primary)] font-semibold">
      {" "}Samanta Samajik Vicharanchi eBooks & Audio books{" "}
    </span>
    in different languages very soon for readers everywhere.
  </p>
</div>
    </>


  )
}

export default Home
