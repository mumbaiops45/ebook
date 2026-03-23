"use client";

import { Gift, BookOpen } from "lucide-react";

export default function GiftingSection() {
  return (
    <section className="relative w-full py-20 px-6 md:px-20 before:absolute before:inset-0 before:bg-gradient-to-l before:from-[var(--primary)]/30 before:to-transparent before:z-0">
        <div className="text-center mb-12">
            
            <span className="flex items-center gap-2 w-fit mx-auto px-4 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)]/20 uppercase tracking-wider block mb-3"> <Gift className="w-6 h-6 text-[var(--primery)]" />
            Gifting 
          </span>
          <h2
            className="relative inline-block pb-2
            after:content-['']
            after:absolute
            after:left-0
            after:bottom-0
            after:w-full
            after:h-1
            after:rounded-full
            after:bg-gradient-to-r
            after:from-[var(--primary)]
            after:to-transparent mb-4
            w-fit"
          >
          A <strong className="text-[var(--primary)]"> Gift </strong>That Lasts <strong className="text-[var(--primary)]">Forever</strong>
          </h2>
        </div>
      <div className="max-w-5xl ">

       

        

        {/* Content */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl ">
          If you gift someone a bouquet of flowers, it lasts for just a day or two.
          But if you gift a book, it stays with them for a lifetime.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mt-4">
          It is not just a gift, but a source of knowledge that helps in improving
          and enriching their life.
        </p>

        <p className="text-gray-700 text-lg font-medium leading-relaxed max-w-3xl mt-4">
          Such a thoughtful gesture reflects your positive and meaningful personality.
        </p>

        {/* Highlight Box */}
       <div className="border-l-4 py-3 border-[var(--primary)] mt-6 pl-4">
            <p className="text-lg font-medium">
              
Discover inspiring thoughts, listen to studio-quality audiobooks, preview chapters before downloading, and enjoy a personalized reading. 

            </p>
          </div>

      </div>
    </section>
  );
}