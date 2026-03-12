import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const timeline = [
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>),
    title: "Offline Reading",
    description:
      "Download any eBook or audiobook and enjoy it without internet. Your entire library travels with you wherever you go.",
    image: "/Offline Reading.png",
    color: "",
  },
  {
    icon:  (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
    title: "Studio-Quality Audio",
    description:
      "Every audiobook is recorded in professional studios with experienced narrators for an immersive listening experience.",
    image: "/Studio-Quality Audio.png",
    color: "b",
  },
  {
    icon:  (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    title: "Instant Downloads",
    description:
      "Purchase once and download anytime. Your books remain in your personal library permanently.",
    image: "/download.png",
    color: "",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Curated Library",
    description:
      "We carefully select powerful stories and knowledge-rich titles so readers get only meaningful content.",
    image: "/Curated Library.png",
    color: "",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H6.75V15Zm0-3h.008v.008H6.75V12Zm0-3h.008v.008H6.75V9Z" />
      </svg>
    ),
    title: "Cross-Device Sync",
    description:
      "Switch seamlessly between your phone, tablet, and laptop while your reading progress syncs automatically.",
    image: "/Cross-Device Sync.png",
    color: "",
  },
  {
    icon:  (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Smart Recommendations",
    description:
      "Our intelligent system suggests books based on your reading habits so you always discover something new.",
    image: "/Smart Recommendations.webp",
    color: "",
  },
];

const FeatureSection = () => {
  return (
    <div id='features'>
     <div className="w-full h-[4px] bg-gradient-to-l from-[var(--primary)] to-transparent"></div>
     <section className="py-10 w-full relative py-10 px-15 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-l before:from-[var(--primary)]/15 before:to-transparent before:z-0">
     
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                   Why Readers <span className="text-[var(--primary)]">Love Our Platform</span>
                </h2>
                <p className="  max-w-3xl ">
                 Our platform is built to give readers and listeners a smooth, flexible, and immersive storytelling experience across devices.
                </p>
              </div>
    
              <div className="max-w-7xl mx-auto ">
    
                <div
                  className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        "
                >
    
                  {timeline.map((item, index) => {
    
                    return (
                      <div
                        key={index}
                        className="relative group [perspective:1000px] h-[50vh]"
                      >
                        <div className="relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    
                          {/* FRONT */}
                          <div
                            className="flex flex-col justify-center relative h-full w-full bg-white/10 backdrop-blur-md p-6 rounded-2xl
                  after:content-[''] 
                  after:absolute 
                  after:top-0 
                  after:left-0
                  after:right-0
                  after:h-2
                  after:rounded-t-2xl
                  after:bg-gradient-to-r 
                  after:from-[var(--primary)]
                  after:to-[var(--secondary)]
                  [backface-visibility:hidden]"
                          >
                            <div className='flex items-center'>
                              <div className={`inline-block px-3 py-1 rounded-full mb-3 text-xs `}>
                              {item.icon}
                            </div>
    
                            <h3 className="text-lg font-semibold mb-2 ">
                              {item.title}
                            </h3>
                            </div>
                            
    
                            <p className="text-sm  mb-4">
                              {item.description}
                            </p>
    
                            {/* <div className="space-y-1">
                              {item.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="text-[var(--secondary)] text-xs">•</span>
                                  <span className="text-xs text-gray-400">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div> */}
                          </div>
    
                          {/* BACK */}
                          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <Image
                              src={item.image || "/images/sample.jpg"}
                              alt={item.title}
                              fill
                              className="object-fill"
                            />
                          </div>
    
                        </div>
                      </div>
                    );
                  })}
    
                </div>
              </div>
            </div>
          </section>
    </div>
    
  )
}

export default FeatureSection