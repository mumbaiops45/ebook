"use client";
import LangText from "./LangText";
import { useState, useEffect, useRef } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visible, setVisible] = useState([]);
  const cardsRef = useRef([]);

  const faqs = [
    {
      q: (
        <LangText
          en="What is this platform about?"
          hi="यह प्लेटफ़ॉर्म किस बारे में है?"
          mr="हे प्लॅटफॉर्म कशाबद्दल आहे?"
        />
      ),
      a: (
        <LangText
          en="Our platform allows you to read eBooks and listen to audiobooks anytime, anywhere. We provide a wide range of books across multiple genres for an enjoyable reading and listening experience."
          hi="हमारा प्लेटफ़ॉर्म आपको कभी भी, कहीं भी ई-पुस्तकें पढ़ने और ऑडियोबुक्स सुनने की सुविधा प्रदान करता है। हम विभिन्न विधाओं की पुस्तकों का विस्तृत संग्रह उपलब्ध कराते हैं, ताकि आपको पढ़ने और सुनने का आनंददायक अनुभव मिल सके।"
          mr="आमचे प्लॅटफॉर्म तुम्हाला कधीही, कुठेही ई-पुस्तके वाचण्याची आणि ऑडिओबुक्स ऐकण्याची सुविधा देते. वाचन आणि ऐकण्याचा आनंददायी अनुभव मिळण्यासाठी आम्ही विविध प्रकारच्या पुस्तकांचा मोठा संग्रह उपलब्ध करून देतो."
        />
      ),
    },
    {
      q: (
        <LangText
          en="Are audiobooks available on the platform?"
          hi="क्या इस प्लेटफ़ॉर्म पर ऑडियोबुक्स उपलब्ध हैं?"
          mr="या प्लॅटफॉर्मवर ऑडिओबुक्स उपलब्ध आहेत का?"
        />
      ),
      a: (
        <LangText
          en="Absolutely! Along with eBooks, we provide high-quality audiobooks that you can listen to while commuting, exercising, or relaxing."
          hi="हाँ, बिल्कुल! ई-पुस्तकों के साथ-साथ हम उच्च-गुणवत्ता वाली ऑडियोबुक्स भी उपलब्ध कराते हैं, जिन्हें आप यात्रा के दौरान, व्यायाम करते समय या आराम करते हुए आसानी से सुन सकते हैं।"
          mr="हो, नक्कीच! ई-पुस्तकांसोबतच आम्ही उच्च दर्जाच्या ऑडिओबुक्स देखील उपलब्ध करून देतो, ज्या तुम्ही प्रवास करताना, व्यायाम करताना किंवा विश्रांती घेताना ऐकू शकता."
        />
      ),
    },
    // {
    //   q: (
    //     <LangText
    //       en="Can I access my books on multiple devices?"
    //       hi="क्या मैं अपने उपकरणों पर अपनी पुस्तकों तक पहुंच सकता हूं?"
    //       mr="मी माझ्या वेगवेगळ्या उपकरणांवर माझी पुस्तके वापरू शकतो का?"
    //     />
    //   ),
    //   a: (
    //     <LangText
    //       en="Yes. Your reading progress automatically syncs across devices, so you can start reading on your phone and continue on your tablet or laptop seamlessly."
    //       hi="हाँ। आपकी पढ़ने की प्रगति स्वचालित रूप से उपकरणों में सिंक हो जाती है।"
    //       mr="हो. तुमची वाचनाची प्रगती सर्व उपकरणांवर आपोआप सिंक होते."
    //     />
    //   ),
    // },
    {
      q: (
        <LangText
          en="Do you offer different pricing plans?"
          hi="क्या आप विभिन्न मूल्य योजनाएँ प्रदान करते हैं?"
          mr="तुम्ही विविध किंमत योजना ऑफर करता का?"
        />
      ),
      a: (
        <LangText
          en="Yes."
          hi="हाँ।"
          mr="हो."
        />
      ),
    },
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
      id="faq"
      className="px-8 md:px-15 lg:px-30 pt-10 md:p-15 relative before:content-[''] before:absolute before:inset-0
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
      after:z-[-1]"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="w-fit text-[13px] mx-auto px-4 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)]/20 uppercase tracking-wider block mb-3">
          <LangText en="FAQ's" hi="सामान्य प्रश्न" mr="सतत विचारले जाणारे प्रश्न" />
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
          <LangText
            en={<>Frequently Asked <strong className="text-[var(--primary)]">Questions</strong></>}
            hi={<>बार-बार पूछे जाने वाले <strong className="text-[var(--primary)]">प्रश्न</strong></>}
            mr={<>सतत विचारले जाणारे <strong className="text-[var(--primary)]">प्रश्न</strong></>}
          />
        </h2>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
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
                  ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-16"
                  }
                `}
                style={{ transitionDelay: `${i * 150}ms` }}
                onClick={() =>
                  setActiveIndex(isActive ? null : i)
                }
              >
                {/* QUESTION */}
                <div className="flex justify-between items-center">
                  <h5
                    className={`transition-colors duration-300 ${
                      isActive ? "text-[var(--primary)]" : ""
                    }`}
                  >
                    {faq.q}
                  </h5>

                  <span
                    className={`text-2xl text-[var(--primary)] transition-transform duration-300 ${
                      isActive ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </div>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}