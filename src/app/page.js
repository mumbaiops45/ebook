"use client";
import { useEffect } from "react";
import React from 'react'
import Hero from '@/components/Hero'
import AboutSection from '@/components/About'
import FeaturedBooks from '@/components/FeatureBooks'
// import FeaturesSection from '@/components/FeatureSection'
import Testimonials from '@/components/Testimonial'
import FAQSection from '@/components/FAQ'
import WeServe from '@/components/WeServe'
import FinalCTA from '@/components/CTA'
import GiftingSection from '@/components/gifting'
import LangText from "@/components/LangText";



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
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <GiftingSection />
      <div className="text-center bg-gradient-to-r from-[var(--primary)]/10 to-transparent border border-[var(--primary)]/20 rounded-xl px-6 py-5">
        <p className="text-gray-700 leading-relaxed">
          <span className="text-[var(--primary)] font-semibold">
            <LangText
              en="Currently, the Audio Book and E-book of 'Samanta Samajik Vicharanchi' are available in Marathi, Hindi and English languages."
              hi="वर्तमान में, 'समानता सामाजिक विचारंची' की ऑडियो बुक और ई-बुक मराठी, हिंदी और अंग्रेजी भाषाओं में उपलब्ध हैं।"
              mr="सध्या 'समानता - सामाजिक विचारांची' या पुस्तकाचे ऑडिओ बुक आणि ई-बुक मराठी, हिंदी आणि इंग्रजी भाषांमध्ये उपलब्ध आहेत."
            />
          </span>
        </p>
      </div>
    </>


  )
}

export default Home
