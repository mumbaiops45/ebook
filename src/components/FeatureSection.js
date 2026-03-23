import React from "react";

const timeline = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    title: "Offline Reading",
    description:
      "Download any eBook or audiobook and enjoy it without internet. Your entire library travels with you wherever you go.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
    title: "Studio-Quality Audio",
    description:
      "Every audiobook is recorded in professional studios with experienced narrators for an immersive listening experience.",
  },

  /* NEW 3rd FEATURE */
{
  icon: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      width="28"
      height="28"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.25v13.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V5.25A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 9.5v5l4-2.5-4-2.5Z"
      />
    </svg>
  ),
title: "Read & Listen Preview",
description:
  "Preview sample pages or play a short audio demo to experience the story before downloading the full book.",
},

  /* MOVED OLD 3rd FEATURE HERE */
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    title: "Instant Downloads",
    description:
      "Purchase once and download anytime. Your books remain in your personal library permanently.",
  },

 {
  icon: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      width="28"
      height="28"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 19h16M6 19l6-14 6 14M9.5 12h5"
      />
    </svg>
  ),
  title: "Personalized Reading Experience",
  description:
    "Customize fonts, layouts, and themes to match your reading comfort. Adjust the reading environment to suit your style and enjoy a distraction-free experience."
},

  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3" />
      </svg>
    ),
    title: "Cross-Device Sync",
    description:
      "Switch seamlessly between your phone, tablet, and laptop while your reading progress syncs automatically.",
  }
];

const FeatureSection = () => {
  return (
    <div id="features">
      <div className="w-full bg-gradient-to-l from-[var(--primary)] to-transparent"></div>

      <section className="py-10 w-full relative px-6 md:px-15 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-l before:from-[var(--primary)]/15 before:to-transparent before:z-0">

        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <h2
              className="relative inline-block pb-4
              after:content-['']
              after:absolute
              after:left-0
              after:bottom-0
              after:w-full
              after:h-1
              after:rounded-full
              after:bg-gradient-to-r
              after:from-[var(--primary)]
              after:to-transparent mb-4"
            >
              Why Readers <span className="text-[var(--primary)]">Love Our Platform</span>
            </h2>

            <p className="max-w-3xl">
              Our platform is built to give readers and listeners a smooth, flexible, and immersive storytelling experience across devices.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative bg-black/6 backdrop-blur-md rounded-2xl  h-[35vh] sm:h-[46vh]  md:h-[36vh] 2xl:h-[25vh] "
              >
                <p className="text-sm p-6">
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-auto  md:h-[15vh] 2xl:h-[8vh] rounded-b-2xl flex justify-start p-6 text-white  items-center gap-3 bg-[var(--primary)]">
                  <div className="inline-block">{item.icon}</div>
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>



              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;