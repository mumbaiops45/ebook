"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Daily Reader",
    image: "/Rahul Sharma.png",
    comment:
      "I've used many eBook apps, but this one stands out. The offline reading feature is perfect for my daily metro commute. I can continue my books anywhere without worrying about internet connectivity.",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    role: "Audiobook Lover",
    image: "/Ananya Iyer.webp",
    comment:
      "The audiobook quality is fantastic. I usually listen while driving or doing household work, and the narration feels very immersive. It has made finishing books so much easier.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Book Club Member",
    image: "/Vikram Singh.avif",
    comment:
      "Our reading group started using this platform recently and it has been amazing. I begin reading on my phone during breaks and continue on my laptop at night without losing my progress.",
    rating: 5,
  },
  {
    name: "Meera Kapoor",
    role: "Content Writer",
    image: "/Meera Kapoor.avif",
    comment:
      "I love how well the books are curated here. Every recommendation feels relevant to my interests. It saves me time and helps me discover books I might have never found otherwise.",
    rating: 4,
  },
];

const StarIcon = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
   fill={filled ? "var(--primary)" : "none"}
stroke="var(--primary)"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);

const QuoteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--primary)" className="flex-shrink-0 opacity-20">
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z" />
  </svg>
);

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="relative bg-[#fdf8f2] overflow-hidden py-20 px-4 md:px-10 lg:px-16">

      {/* Subtle background circle */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#c8893c]/5 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full bg-[#c8893c]/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <div className=" mb-14">
            <div className=" mb-16">
                <h2 className="relative inline-block pb-4
          after:content-['']
    after:absolute
    after:left-0
    after:bottom-0
    after:w-full
    after:h-1
    after:rounded-full
    after:bg-gradient-to-r
    after:from-[var(--primary)]
    after:to-transparent mb-4">
                    What Our <span className="text-[var(--primary)]">Readers Say</span>
                </h2>
                <p className="  max-w-3xl ">
                 Real experiences from readers who enjoy seamless eBook and audiobook access every day.
                </p>
              </div>
        </div>

        {/* Main two-column card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_48px_rgba(200,137,60,0.1)] border border-[var(--primary)]/20 overflow-hidden">
          <div className="flex flex-col md:flex-row ">

            {/* ── LEFT: User Image ── */}
            <div className="relative md:w-[38%] w-full h-64 md:h-auto flex-shrink-0 bg-[#1a0f07] overflow-hidden">

              {/* Image */}
              <Image
                key={active}
                src={t.image}
                alt={t.name}
                fill
                className="object-cover object-center opacity-80 transition-opacity duration-500"
              />

              {/* Gradient overlay — left to transparent on desktop, bottom on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

              {/* Name badge pinned to bottom-left of image */}
              <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6">
                <p className=" text-lg font-semibold text-white leading-tight">
                  {t.name}
                </p>
                <p className="text-[#c8893c] text-xs tracking-widest uppercase mt-0.5">
                  {t.role}
                </p>
              </div>

              {/* Active slide indicator dots — bottom center on mobile */}
              <div className="absolute bottom-5 right-5 md:hidden flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full bg-white transition-all duration-300 ${
                      active === i ? "w-5 h-2 opacity-100" : "w-2 h-2 opacity-40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ── RIGHT: Comment ── */}
            <div className="flex-1 flex flex-col justify-between p-8 md:p-12">

              {/* Quote + comment */}
              <div>
                <QuoteIcon />

                <p className="mt-5 text-[#3a2510]/80 text-base md:text-lg leading-[1.8] font-light ">
                  {t.comment}
                </p>
              </div>

              {/* Bottom: stars + name row + nav */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">

                {/* Stars + name */}
                <div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} filled={i < t.rating} />
                    ))}
                  </div>
                  <p className=" font-semibold text-[#1a0f07] text-base leading-tight">
                    {t.name}
                  </p>
                  <p className="text-[#c8893c] text-xs tracking-widest uppercase mt-0.5">
                    {t.role}
                  </p>
                </div>

                {/* Navigation — desktop */}
                <div className="hidden md:flex items-center gap-3">
                  {/* Dots */}
                  <div className="flex gap-1.5 mr-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`rounded-full bg-[#c8893c] transition-all duration-300 ${
                          active === i ? "w-6 h-2 opacity-100" : "w-2 h-2 opacity-25"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Prev */}
                  <button
                    onClick={() => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                    className="w-10 h-10 rounded-full border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)]/10
hover:border-[var(--primary)] transition-all duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                  </button>

                  {/* Next */}
                  <button
                    onClick={() => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                    className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white hover:opacity-90 transition-all duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ── Thumbnail row — all reviewers ── */}
        {/* <div className="mt-10 flex flex-wrap justify-center gap-4">
          {testimonials.map((person, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all duration-300 ${
                active === i
                  ? "bg-[var(--primary)]/10 border-[var(--primary)]/50 shadow-sm"
                  : "bg-white border-[#c8893c]/15 hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/5"
              }`}
            >
              <div className={`relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-2 transition-all duration-300 ${active === i ? "ring-[#c8893c]" : "ring-transparent"}`}>
                <Image src={person.image} alt={person.name} fill className="object-cover" />
              </div>
              <span className={`text-sm font-medium transition-colors duration-300 ${active === i ? "text-[#c8893c]" : "text-[#3a2510]/60"}`}>
                {person.name.split(" ")[0]}
              </span>
            </button>
          ))}
        </div> */}

      </div>
    </section>
  );
}