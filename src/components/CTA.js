"use client";
import LangText from "./LangText";
import Link from "next/link";
import { FaAndroid, FaApple } from "react-icons/fa";

export default function FinalCTA() {
  return (
    <section className="relative py-20 px-8 md:px-15 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[var(--primary)]">
          <LangText
            en="Start Your Reading Journey Today"
            hi="आज ही अपनी पठन यात्रा शुरू करें"
            mr="आजच तुमचा वाचनाचा प्रवास सुरू करा"
          />
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-600 mb-10 leading-relaxed">
          <LangText
            en="Discover inspiring stories, listen to studio-quality audiobooks, preview chapters before downloading, and enjoy a personalized reading experience across all your devices."
            hi="प्रेरणादायक कहानियाँ खोजें, स्टूडियो-गुणवत्ता वाली ऑडियोबुक्स सुनें, डाउनलोड करने से पहले अध्यायों का पूर्वावलोकन करें और अपने सभी उपकरणों पर व्यक्तिगत एवं सहज पठन अनुभव का आनंद लें।"
            mr="प्रेरणादायी कथा शोधा, स्टुडिओ-दर्जाच्या ऑडिओबुक्स ऐका, डाउनलोड करण्यापूर्वी प्रकरणांचे पूर्वावलोकन करा आणि तुमच्या सर्व उपकरणांवर वैयक्तिकृत वाचनाचा आनंद घ्या."
          />
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Android App Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.saliljaveri&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn flex items-center justify-center gap-2 px-8 py-3 rounded-lg cursor-pointer font-medium transition hover:opacity-90 w-full sm:w-auto"
          >
            <FaAndroid className="text-lg text-green-400" />
            <LangText
              en="Download Android App"
              hi="एंड्रॉइड ऐप डाउनलोड करें"
              mr="एंड्रॉइड ॲप डाउनलोड करा"
            />
          </a>

          {/* iOS App Button */}
          <a
            href="https://apps.apple.com/in/app/salil-javeri/id6788735047"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn  flex items-center justify-center gap-2 px-8 py-3 rounded-lg cursor-pointer font-medium transition hover:bg-gray-800 w-full sm:w-auto"
          >
            <FaApple className="text-lg text-white" />
            <LangText
              en="Download iOS App"
              hi="आईओएस ऐप डाउनलोड करें"
              mr="iOS ॲप डाउनलोड करा"
            />
          </a>
        </div>
      </div>
    </section>
  );
}