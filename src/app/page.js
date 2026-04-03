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
  <p className=" text-gray-700 leading-relaxed">
   <span className="text-[var(--primary)] font-semibold notranslate ">
      <LangText en="Samanta
Currently, our book 'Samanata - Samajik Vicharanchi' has been published in Marathi language, and in the near future, our e-books and audio books will also be published in English, Hindi and other regional languages." mr="समनता
सध्या आमचे 'समानता - सामाजिक विचारांची' हे पुस्तक मराठी भाषेत प्रकाशित झाले असून, नजीकच्या काळात आमची ई-बुक्स आणि ऑडिओ बुक्स इंग्रजी, हिंदी तसेच इतर प्रादेशिक भाषांमध्येही प्रकाशित होतील.
" />
    </span> 
   
  </p>
</div>
    </>


  )
}

export default Home
