"use client";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    label: "Offline Reading",
    headline: "Read Without Wi-Fi",
    body: "Download any eBook or audiobook and access it offline — on a flight, in the mountains, or anywhere in between. Your library travels with you.",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
    label: "Studio-Grade Audio",
    headline: "Hear Every Nuance",
    body: "Every audiobook is recorded in professional studios with seasoned voice artists. Crystal-clear 320kbps quality that feels like the narrator is in the room.",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    label: "Download Anytime",
    headline: "Yours to Keep",
    body: "Purchase once and download forever. No expiry, no subscription lock-in. Your books live in your library permanently — across all your devices.",
  },
  {
    number: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    label: "Curated Content",
    headline: "Handpicked, Not Bulk",
    body: "Every title in our catalog is reviewed and selected by editorial experts. No filler — just stories and knowledge that genuinely matter to readers.",
  },
  {
    number: "05",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H6.75V15Zm0-3h.008v.008H6.75V12Zm0-3h.008v.008H6.75V9Z" />
      </svg>
    ),
    label: "Cross-Device Sync",
    headline: "Pick Up Where You Left",
    body: "Switch between your phone, tablet, and laptop seamlessly. Your reading progress, bookmarks, and notes sync in real-time across every device.",
  },
  {
    number: "06",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    label: "AI Recommendations",
    headline: "Reads That Find You",
    body: "Our smart engine learns your taste as you read and listen — surfacing books you'll genuinely love, not just what's popular on a trending chart.",
  },
];

// Only things Tailwind literally cannot express:
// 1. clip-path polygon (no utility)
// 2. repeating-linear-gradient (no utility)
// 3. ::before pseudo-element hover animation for the corner accent
const minimalStyles = `
  .fs-clip { clip-path: polygon(0 0, 100% 0, 100% 82%, 0 100%); }
  .fs-stripe {
    background-image: repeating-linear-gradient(
      -55deg, transparent, transparent 80px,
      rgba(200,137,60,0.018) 80px, rgba(200,137,60,0.018) 81px
    );
  }
  .fs-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 0;
    height: 3px;
    background: #c8893c;
    border-radius: 0 0 4px 0;
    opacity: 0;
    transition: width 0.3s ease, opacity 0.3s ease;
  }
  .fs-card:hover::before { width: 60px; opacity: 1; }
`;

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FeatureCard({ feature, colClass, delay }) {
  const [ref, visible] = useInView(0.12);
  return (
    <div
      ref={ref}
      className={`
        fs-card relative overflow-hidden rounded-2xl cursor-default
        border border-[#c8893c]/10 bg-white/[0.03] p-10
        transition-[border-color,background-color,transform] duration-300
        hover:border-[#c8893c]/35 hover:bg-[#c8893c]/5 hover:-translate-y-1
        ${colClass}
      `}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s, border-color 0.3s, background-color 0.3s`,
      }}
    >
      {/* Icon */}
      <div className="w-[52px] h-[52px] rounded-xl bg-[#c8893c]/[0.12] border border-[#c8893c]/20 flex items-center justify-center  mb-6 transition-colors duration-300 hover:bg-[#c8893c]/20">
        {feature.icon}
      </div>

      {/* Label */}
      <p className="text-[0.68rem] tracking-[0.15em] uppercase  font-medium mb-2">
        {feature.label}
      </p>

      {/* Headline */}
      <h3 className=" text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold  leading-tight mb-3">
        {feature.headline}
      </h3>

      {/* Body */}
      <p className="/50 text-sm leading-relaxed font-light max-w-sm">
        {feature.body}
      </p>

      {/* Ghost number */}
      <span
        aria-hidden
        className="absolute bottom-0 right-3  text-[6rem] font-bold leading-none pointer-events-none select-none transition-colors duration-300"
        style={{ color: "rgba(200,137,60,0.06)" }}
      >
        {feature.number}
      </span>
    </div>
  );
}

const FeaturesSection = () => {
  const [headerRef, headerVisible] = useInView(0.2);
  const [lastRef, lastVisible] = useInView(0.12);

  // Asymmetric 12-col layout
  const layouts = [
    "col-span-12 lg:col-span-7",  // wide
    "col-span-12 lg:col-span-5",  // narrow
    "col-span-12 md:col-span-6 lg:col-span-4",
    "col-span-12 md:col-span-6 lg:col-span-4",
    "col-span-12 md:col-span-6 lg:col-span-4",
  ];

  return (
    <>
      <style>{minimalStyles}</style>

      <section className="fs-stripe relative  overflow-hidden">

        {/* Ambient glows — radial-gradient can't be done in Tailwind */}
        <div
          className="absolute -top-52 -right-52 w-[700px] h-[700px] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(200,137,60,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-28 -left-28 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(200,137,60,0.07) 0%, transparent 70%)" }}
        />

        {/* ── Header Band ── */}
        <div
          ref={headerRef}
          className="fs-clip relative z-10 pb-32 pt-20 px-6 mb-[-40px] border-b border-[#c8893c]/12"
          style={{ background: "linear-gradient(135deg, rgba(200,137,60,0.08) 0%, rgba(200,137,60,0.02) 100%)" }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">

            <div>
              {/* Tag */}
              <div
                className="transition-all duration-700"
                style={{
                  opacity: headerVisible ? 1 : 0,
                  transform: headerVisible ? "translateY(0)" : "translateY(32px)",
                  transitionDelay: "0.1s",
                }}
              >
                <span className="inline-flex items-center gap-2 bg-[#c8893c]/15 border border-[#c8893c]/30  px-4 py-1.5 rounded text-[0.7rem] tracking-[0.18em] uppercase font-medium mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8893c]" />
                  Why Choose Us
                </span>
              </div>

              {/* Headline */}
              <div
                className="transition-all duration-700"
                style={{
                  opacity: headerVisible ? 1 : 0,
                  transform: headerVisible ? "translateY(0)" : "translateY(32px)",
                  transitionDelay: "0.2s",
                }}
              >
                <h2 className=" text-[clamp(2.4rem,5vw,4rem)] font-bold  leading-[1.1] tracking-tight">
                  What Makes Our<br />
                  Books{" "}
                  <em className="" style={{ fontStyle: "italic" }}>Different</em>
                </h2>
              </div>
            </div>

            {/* Subtext */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(32px)",
                transitionDelay: "0.3s",
              }}
            >
              <p className="/55 text-base leading-[1.75] font-light max-w-md pb-2">
                We don't just publish books — we craft experiences. From how they sound to how they feel on every screen, every detail is intentional.
              </p>
            </div>

          </div>
        </div>

        {/* ── Cards Body ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-24">

          <div className="grid grid-cols-12 gap-6">

            {/* First 5 feature cards */}
            {features.slice(0, 5).map((f, i) => (
              <FeatureCard
                key={f.number}
                feature={f}
                colClass={layouts[i]}
                delay={i * 0.1}
              />
            ))}

            {/* Divider */}
            <div className="col-span-12 my-2">
              <div
                className="h-px w-full"
                style={{ background: "linear-gradient(to right, transparent, rgba(200,137,60,0.2), transparent)" }}
              />
            </div>

            {/* Last card — full-width horizontal highlight */}
            <div
              ref={lastRef}
              className="fs-card col-span-12 relative overflow-hidden rounded-2xl border border-[#c8893c]/20 bg-[#c8893c]/[0.06] p-10 flex flex-wrap items-center gap-10 transition-[border-color,transform] duration-300 hover:border-[#c8893c]/40 hover:-translate-y-1"
              style={{
                opacity: lastVisible ? 1 : 0,
                transform: lastVisible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s, border-color 0.3s`,
              }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-[52px] h-[52px] rounded-xl bg-[#c8893c]/[0.12] border border-[#c8893c]/20 flex items-center justify-center ">
                {features[5].icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-[260px]">
                <p className="text-[0.68rem] tracking-[0.15em] uppercase  font-medium mb-2">
                  {features[5].label}
                </p>
                <h3 className=" text-[clamp(1.5rem,3vw,2rem)] font-semibold  leading-tight mb-2">
                  {features[5].headline}
                </h3>
                <p className="/50 text-sm leading-relaxed font-light max-w-xl">
                  {features[5].body}
                </p>
              </div>

              {/* CTA button */}
              <div className="flex-shrink-0 ml-auto">
                <button className="flex items-center gap-2 border border-[#c8893c]/50  px-6 py-2.5 rounded-lg text-sm tracking-wide transition-all duration-200 hover:bg-[#c8893c]/12 hover:border-[#c8893c]">
                  Try It Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>

              {/* Ghost number */}
              <span
                aria-hidden
                className="absolute bottom-0 right-4  font-bold leading-none pointer-events-none select-none"
                style={{ fontSize: "8rem", color: "rgba(200,137,60,0.06)" }}
              >
                {features[5].number}
              </span>
            </div>
          </div>

          {/* ── Bottom CTA strip ── */}
          <div className="mt-20 pt-12 border-t border-[#c8893c]/15 flex flex-wrap items-center justify-between gap-8">
            <p className=" text-[clamp(1.4rem,3vw,2rem)] font-semibold  leading-snug">
              Ready to start your<br />
              <em className="" style={{ fontStyle: "italic" }}>reading journey?</em>
            </p>

            <button className="inline-flex items-center gap-3 bg-[#c8893c] hover:bg-[#e09f52] text-[#0d0905] px-8 py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap">
              Explore the Library
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;