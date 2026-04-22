"use client";

import Link from "next/link";
import Image from "next/image";
import LangText from "./LangText";
import { Noto_Sans_Devanagari } from "next/font/google";


const devFont = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
});

const books = [
  {
    title: (
      <LangText
        en="Samanta Samajik Vicharanchi"
        mr="समानता - सामाजिक विचारांची"
      />
    ),
    image: "/SAmanata3.png",
    price: 299,
    description: "A powerful book focused on social thoughts and equality.",
  },
];

const chapters = [
  "मुलगा व मुलगी संगोपनातील पालकांचा दुजाभाव : एक सामाजिक वास्तव",
  "कन्यादान",
  "लग्नाचा खर्च : परंपरा, प्रतिष्ठा आणि वास्तवाची गोष्ट",
  "हुंडा",
  "माहेरच्यांशी संपर्क",
  "शाकाहार आणि मांसाहार",
  "अरेन्ज मॅरेज व लव्ह मॅरेज",
  "लग्न",
  "संवेदनशीलता",
  "समानता",
  "पती व पत्नीच्या एकमेकांकडून असलेल्या अपेक्षा",
  "यशस्वी महिलांचे रहस्य",
  "मूडीनेस व त्याचा सामाजिकदृष्ट्या होणारा प्रभाव",
  "ट्रॅफिक व शिस्त",
  "स्वच्छता",
  "विवाहानंतरचे समुपदेशन : नात्याचा मजबूत आधार",
  "विवाहपूर्व समुपदेशन : यशस्वी वैवाहिक जीवनाची पहिली पायरी",
  "मुलांचे समुपदेशन : अभ्यासातील एकाग्रता सुधारते",
  "कुटुंबीयांचे समुपदेशन : सुखी घराचे मानसशास्त्र",
  "ऑफिसमधील समुपदेशन : सकारात्मक कामाचे वातावरण निर्माण करणे",
  "निवासी सोसायटीतील समुपदेशन : सकारात्मक समाजाची निर्मिती",
  "खेळाडूंचे समुपदेशन : उत्कृष्ट कामगिरीसाठी मानसिक तयारी",
  "ऍप्टिट्यूड टेस्ट आणि करिअर गाईडन्स : मुलांच्या भविष्याची योग्य दिशा",
  "शाळांसाठी मानसशास्त्रज्ञाद्वारे समुपदेशन : शिक्षण आणि मनोविकासासाठी मार्गदर्शन",
  "वृद्धाश्रमातील ज्येष्ठ नागरिकांसाठी समुपदेशन : मानसिक स्वास्थ्य आणि जीवनाची गुणवत्ता वाढवणे",
  "देहदान : एक महान सामाजिक योगदान",
];

const mid = 17;
const firstHalf = chapters.slice(0, mid);
const secondHalf = chapters.slice(mid);

export default function WeServe() {
  return (
    <section id="services" className="pt-16 px-6 md:px-15">
      <div className="mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-[var(--primary)] notranslate relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[var(--primary)] after:to-transparent mb-4 w-fit">
            <LangText en="What WE Offer" mr="आम्ही काय देऊ शकतो" />
          </h2>
        </div>

        {/* ✅ MAIN 2 COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 items-start">

          {/* LEFT COLUMN */}
          <div className="shadow-lg p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-[var(--primary)] mb-4">
              अनुक्रमणिका(समानता - सामाजिक विचारांची)
            </h3>

            {/* Inner 2 column for chapters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm ">

              {/* LEFT SIDE */}
              <div>
                {firstHalf.map((item, i) => (
                  <p key={i} lang="mr" className="notranslate">
                    अध्याय{" "}
                    <span className={devFont.className}>
                      {new Intl.NumberFormat("mr-IN").format(i + 1)}
                    </span>{" "}
                    – {item}
                  </p>
                ))}
              </div>

              {/* RIGHT SIDE */}
              <div>
                {secondHalf.map((item, i) => (
                  <p key={i} lang="mr" className="notranslate">
                    अध्याय{" "}
                    <span className={devFont.className}>
                      {new Intl.NumberFormat("mr-IN").format(i + 1 + mid)}
                    </span>{" "}
                    – {item}
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
                {/* Image */}
                <div className="flex justify-center">
                  <div className="w-[80vw] h-[80vh] md:h-93 md:w-[22vw] relative mb-4">
                    <Image
                      src={book.image}
                      alt="book"
                      fill
                      className="object-cover object-top rounded-xl"
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
  Download the App
</a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}