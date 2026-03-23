"use client";

import { useState, useEffect, useRef } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visible, setVisible] = useState([]);
  const cardsRef = useRef([]);

  const faqs = [
    {
      q: "What is this platform about?",
      a: "Our platform allows you to read eBooks and listen to audiobooks anytime, anywhere. We provide a wide range of books across multiple genres for an enjoyable reading and listening experience."
    },
    {
      q: "Can I read books offline?",
      a: "Yes, you can download your favorite eBooks and audiobooks for offline access. This makes it easy to enjoy your content even without an internet connection."
    },
    {
      q: "Are audiobooks available on the platform?",
      a: "Absolutely! Along with eBooks, we provide high-quality audiobooks that you can listen to while commuting, exercising, or relaxing."
    },
    // {
    //   q: "Can I access my books on multiple devices?",
    //   a: "Yes. Your reading progress automatically syncs across devices, so you can start reading on your phone and continue on your tablet or laptop seamlessly."
    // },
    // {
    //   q: "Do you offer different pricing plans?",
    //   a: "Yes, we offer flexible pricing plans so readers can choose the option that fits their needs. Each plan provides access to a wide range of eBooks and audiobooks."
    // }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="px-8 md:px-15 lg:px-30 pt-10 md:p-15 relative
      before:content-[''] before:absolute before:inset-0
      before:bg-gradient-to-bl
      before:from-[var(--primary)]/20
      before:to-transparent
      before:z-[-1]

      after:content-[''] after:absolute after:-top-32 after:-right-32
      after:w-[400px] after:h-[400px]
      after:bg-[var(--secondary)]
      after:opacity-10
      after:blur-[120px]
      after:rounded-full
      after:z-[-1]
      "
    >

     {/* Heading */}
        <div className="text-center mb-12">
          <span className="w-fit mx-auto px-4 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)]/20 uppercase tracking-wider block mb-3">
            FAQ's
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
           Frequently Asked <strong className="text-[var(--primary)]">Questions</strong>
          </h2>
        </div>

      <div className=" relative z-10 max-w-4xl mx-auto ">

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isActive = activeIndex === i;
            const isVisible = visible[i];

            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className={`
                  bg-white/40 backdrop-blur-lg
                  border border-white/20
                  rounded-xl p-6
                  cursor-pointer
                  transition-all duration-700 ease-out
                  ${isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"}
                `}
                style={{ transitionDelay: `${i * 150}ms` }}
                onClick={() =>
                  setActiveIndex(isActive ? null : i)
                }
              >

                {/* QUESTION */}
                <div className="flex justify-between items-center">
                  <h5
                    className={`transition-colors duration-300
                      ${isActive ? "text-[var(--primary)]" : ""}
                    `}
                  >
                    {faq.q}
                  </h5>

                  <span
                    className={`text-2xl text-[var(--primary)] transition-transform duration-300
                      ${isActive ? "rotate-45" : "rotate-0"}
                    `}
                  >
                    +
                  </span>
                </div>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                    ${isActive ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className=" leading-relaxed">
                    {faq.a}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}