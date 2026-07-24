"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LangText from "./LangText";
import { Noto_Sans_Devanagari } from "next/font/google";

const devFont = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
});

// भाषा के अनुसार इमेज लोड करने के लिए हेल्पर कंपोनेंट
function DynamicBookImage({ srcEn, srcHi, alt }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const checkLang = () => {
      const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
      if (match && match[1]) {
        setLang(match[1]);
      } else {
        setLang("en");
      }
    };

    checkLang();
    const interval = setInterval(checkLang, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={lang === "hi" ? srcHi : srcEn}
      alt={alt}
      fill
      className="object-cover object-top rounded-xl"
    />
  );
}

const books = [
  {
    title: (
      <LangText
        en="Thoughts on Social Equality"
        hi="सामाजिक समानता पर विचार"
      />
    ),
    imageEn: "/WeServe/english.png",       // English Image Path
    imageHi: "/WeServe/hindi.png",    // Hindi Image Path (अपने हिंदी इमेज का पाथ यहाँ डालें)
    price: 299,
    description: (
      <LangText
        en="A powerful book focused on social thoughts and equality."
        hi="सामाजिक विचारों और समानता पर केंद्रित एक प्रभावशाली पुस्तक।"
      />
    ),
  },
];

const chapters = [
  {
    en: "Parental Bias in Raising Sons and Daughters: A Social Reality",
    hi: "लड़का और लड़की की परवरिश में माता-पिता द्वारा भेदभाव : एक सामाजिक सत्य",
  },
  {
    en: "Kanyadaan (Daughter Donation)",
    hi: "कन्यादान",
  },
  {
    en: "The Cost of a Wedding: Tradition, Prestige, and Reality",
    hi: "विवाह का खर्चाः परंपरा, प्रतिष्ठा और वास्तविकता की कहानी",
  },
  {
    en: "Dowry",
    hi: "दहेज",
  },
  {
    en: "Ties with the Natal Family",
    hi: "मायके से संपर्क",
  },
  {
    en: "Vegetarianism and Non-Vegetarianism",
    hi: "शाकाहार और मांसाहार",
  },
  {
    en: "Arranged Marriage and Love Marriage",
    hi: "अरेंज्ड मैरिज / लव मैरिज",
  },
  {
    en: "Marriage",
    hi: "विवाह",
  },
  {
    en: "Sensitivity",
    hi: "संवेदनशीलता",
  },
  {
    en: "Equality",
    hi: "समानता",
  },
  {
    en: "Expectations Between Husband and Wife",
    hi: "पति और पत्नी की एक-दूसरे से अपेक्षाएँ",
  },
  {
    en: "The Secret of Successful Women",
    hi: "सफल महिलाओं का रहस्य",
  },
  {
    en: "Moodiness and Its Impact on Society",
    hi: "मुडीनेस और उसका सामाजिक दृष्टिकोण से पडने वाला प्रभाव",
  },
  {
    en: "Traffic and Discipline",
    hi: "ट्रैफिक और अनुशासन",
  },
  {
    en: "Cleanliness",
    hi: "साफ-सफाई",
  },
  {
    en: "Post-Marital Counselling: A Strong Foundation for Relationships",
    hi: "विवाह के पश्चात काउंसलिंगः रिश्ते का मजबूत आधार",
  },
  {
    en: "Pre-Marital Counselling: The First Step Towards a Successful Married Life",
    hi: "विवाहपूर्व काउंसलिंगः सफल वैवाहिक जीवन का पहला कदम",
  },
  {
    en: "Counselling for Children: Improving Focus in Studies",
    hi: "बच्चों का काउंसलिंगः पढाई में एकाग्रता बढ़ना",
  },
  {
    en: "Family Counselling: The Psychology of a Happy Home",
    hi: "परिवार का काउंसलिंगः सुखी घर का मानसशास्त्र",
  },
  {
    en: "Workplace Counselling: Creating a Positive Work Environment",
    hi: "ऑफिस में काउंसलिंगः सकारात्मक काम का वातावरण निर्माण करना",
  },
  {
    en: "Counselling in Residential Societies: Building a Positive Community",
    hi: "निवासी सोसायटी का काउंसलिंगः सकारात्मक समाज की निर्मिती",
  },
  {
    en: "Counselling for Athletes: Mental Preparation for Peak Performance",
    hi: "खिलाडियों का काउंसलिंगः सर्वोच्च प्रदर्शन के लिए मानसिक तैयारी",
  },
  {
    en: "Aptitude Testing and Career Guidance: The Right Direction for Children’s Future",
    hi: "ऑप्टिट्यूड टेस्ट और करियर गाईडन्सः बच्चों के भविष्य की योग्य दिशा",
  },
  {
    en: "School Counselling Through Psychology: Guiding Education and Mental Development",
    hi: "स्कूलों में मनोविज्ञान द्वारा काउंसलिंगः शिक्षा और मनोविकास के लिए मार्गदर्शन",
  },
  {
    en: "Counselling for Senior Citizens in Old Age Homes: Enhancing Mental Well-being and Quality of Life",
    hi: "वृद्धाश्रम में वृद्धों के लिए काउंसलिंगः मानसिक स्वास्थ्य और जीवन की गुणवत्ता बढाना",
  },
  {
    en: "Body Donation: A Noble Social Contribution",
    hi: "देहदानः एक महान सामाजिक योगदान",
  },
];

const mid = 16;
const firstHalf = chapters.slice(0, mid);
const secondHalf = chapters.slice(mid);

export default function WeServe() {
  return (
    <section id="services" className="pt-16 px-6 md:px-15">
      <div className="mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-[var(--primary)] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[var(--primary)] after:to-transparent mb-4 w-fit">
            <LangText en="What WE Offer" hi="हम क्या प्रदान करते हैं" />
          </h2>
        </div>

        {/* MAIN 2 COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 items-start">

          {/* LEFT COLUMN */}
          <div className="shadow-lg p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-[var(--primary)] mb-4">
              <LangText en="INDEX (Thoughts on Social Equality)" hi="अनुक्रमणिका (सामाजिक समानता पर विचार)" />
            </h3>

            {/* Inner 2 column for chapters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">

              {/* LEFT SIDE */}
              <div>
                {firstHalf.map((ch, i) => (
                  <p key={i}>
                    <LangText en="Chapter " hi="अध्याय " />
                    <span className={devFont.className}>
                      {i + 1}
                    </span>{" "}
                    – <LangText en={ch.en} hi={ch.hi} />
                  </p>
                ))}
              </div>

              {/* RIGHT SIDE */}
              <div>
                {secondHalf.map((ch, i) => (
                  <p key={i}>
                    <LangText en="Chapter " hi="अध्याय " />
                    <span className={devFont.className}>
                      {i + 1 + mid}
                    </span>{" "}
                    – <LangText en={ch.en} hi={ch.hi} />
                  </p>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex justify-center">
            {books.map((book, index) => (
              <div
                key={index}
                className="rounded-2xl p-10 flex flex-col hover:shadow-lg transition"
              >
                {/* Dynamic Language-Based Image */}
                <div className="flex justify-center">
                  <div className="w-[80vw] h-[80vh] md:h-100 md:w-[22vw] relative mb-4">
                    <DynamicBookImage
                      srcEn={book.imageEn}
                      srcHi={book.imageHi}
                      alt="book"
                    />
                  </div>
                </div>

                <div className="md:max-w-[20vw]">
                  <h3 className="text-xl font-semibold mb-1">
                    {book.title}
                  </h3>

                  <p className="text-[var(--primary)] font-semibold mb-2">
                    ₹{book.price}
                  </p>

                  <p className="mb-4 flex-grow">
                    {book.description}
                  </p>
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=com.saliljaveri&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn px-6 py-2 rounded-lg text-center mb-4"
                >
                  <LangText
                    en="Download the App"
                    hi="ऐप डाउनलोड करें"
                  />
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}