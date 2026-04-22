"use client";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-20 px-8 md:px-15 overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[var(--primary)]">
          Start Your Reading Journey Today
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-600 mb-10 leading-relaxed">
          Discover inspiring stories, listen to studio-quality audiobooks,
          preview chapters before downloading, and enjoy a personalized reading
          experience across all your devices.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
  href="https://play.google.com/store/apps/details?id=com.saliljaveri&hl=en_IN"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn px-8 py-3 rounded-lg cursor-pointer inline-block"
>
  Download the App
</a>
        </div>

      </div>
    </section>
  );
}