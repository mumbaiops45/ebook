import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import LangText from "./LangText";
import { useEffect, useState } from "react";

const books = [
  {
    title: (
      <LangText
        en="Thoughts on Social Equality"
        hi="सामाजिक समानता पर विचार"
        mr="समानता - सामाजिक विचारांची"
      />
    ),
    imageEn: "/WeServe/english.png",
    imageHi: "/WeServe/hindi.png",
    imageMr: "/SAmanata3.png",
    rating: 4.7,
description: (
  <LangText
    en="Currently, the Audio Book and E-book of 'Samanta Samajik Vicharanchi(Thoughts on Social Equality)' are available in Marathi, Hindi and English languages."
    hi="वर्तमान में 'समानता सामाजिक विचारांची(सामाजिक समानता पर विचार)' पुस्तक की ऑडियोबुक और ई-बुक मराठी, हिंदी और अंग्रेजी भाषाओं में उपलब्ध हैं।"
    mr="सध्या 'समानता सामाजिक विचारांची' या पुस्तकाचे ऑडिओबुक आणि ई-बुक मराठी, हिंदी आणि इंग्रजी भाषांमध्ये उपलब्ध आहेत."
  />
),
  },
];

const FeaturedBooks = () => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const langCookie = cookies.find((row) => row.startsWith("app_lang="));

    if (langCookie) {
      setLang(langCookie.split("=")[1]);
    }
  }, []);

  return (
    <section id="Books" className="py-16 px-6 md:px-15">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center text-[13px] mb-12">
          <span className="w-fit mx-auto px-4 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)]/20 uppercase tracking-wider block mb-3">
            <LangText en="Featured Books" hi="प्रमुख पुस्तकें" mr="Featured Books" />
          </span>

          <h2 className="relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[var(--primary)] after:to-transparent mb-4 w-fit">
            <LangText
              en={<>Discover <span className="text-[var(--primary)]"> the Stories </span></>}
              hi={<>कहानियों की <span className="text-[var(--primary)]"> खोज करें </span></>}
              mr={<div className="translate">Discover <span className="text-[var(--primary)]"> the Stories </span></div>}
            />
          </h2>

          <p className="max-w-2xl mx-auto">
            <LangText
              en="Explore a collection of powerful stories available in both eBook and Audiobook formats."
              hi="ई-बुक और ऑडियोबुक दोनों प्रारूपों में उपलब्ध प्रभावशाली कहानियों के संग्रह का अन्वेषण करें।"
              mr="Explore a collection of powerful stories available in both eBook and Audiobook formats."
            />
          </p>
        </div>

        {/* Desktop: Two-column layout; Mobile: stacked */}
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">

          {/* Left: Books */}
          <div className="flex flex-wrap justify-center gap-10 lg:max-w-xl w-full">
            {books.map((book, index) => {
              // Get current image according to selected language
              let currentImage = book.imageEn;
              if (lang === "hi") {
                currentImage = book.imageHi;
              } else if (lang === "mr") {
                currentImage = book.imageMr;
              }

              // Get preview PDF according to selected language
              let currentPdf = "/English_index.pdf";
              if (lang === "hi") {
                currentPdf = "/Hindi_index.pdf";
              } else if (lang === "mr") {
                currentPdf = "/index.pdf";
              }

              return (
                <div
                  key={index}
                  className="w-full sm:w-[330px] relative bg-gradient-to-b from-[var(--primary)]/10 to-transparent p-6 rounded-xl transition-all duration-300 hover:scale-102 hover:from-[var(--primary)]/15"
                >
                  <Image
                    src={currentImage}
                    alt="Book Cover"
                    width={250}
                    height={350}
                    className="mx-auto mb-4 transition-transform duration-300 hover:scale-105"
                  />

                  <h3 className="mb-2 text-center font-semibold">{book.title}</h3>

                  <p className="text-gray-600 mb-3 px-2">{book.description}</p>

                  {/* ⭐ Rating */}
                  <div className="flex justify-center items-center gap-1 text-yellow-400 text-sm mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <span className="text-gray-500 ml-1">{book.rating}</span>
                  </div>

                  {/* Button */}
                  <div className="flex justify-center mt-2">
                    <a
                      href={currentPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-btn px-6 py-2 rounded-md cursor-pointer inline-block"
                    >
                      <LangText en="Preview Book" hi="पुस्तक का पूर्वावलोकन" mr="Preview Book" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: YouTube video */}
          <div className="w-full lg:w-[480px] flex flex-col items-center">
            <h3 className="text-center text-[var(--primary)] font-semibold mb-4 text-lg">
              <LangText
                en="Paresh Bhanushali, Correspondent, India Times News"
                hi="परेश भानुशाली, संवाददाता, इंडिया टाइम्स न्यूज"
                mr="Paresh Bhanushali, Correspondent, India Times News"
              />
            </h3>

            <div className="w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/TH55u5JSIKk?autoplay=1&mute=1&rel=0&modestbranding=1"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-lg"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Explore Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="border-l-4 py-3 border-[var(--primary)] pl-4">
            <p className="font-medium">
              <LangText
                en="Explore our growing collection of engaging eBooks and audiobooks."
                hi="हमारे आकर्षक ई-पुस्तकों और ऑडियोबुक्स के निरंतर बढ़ते संग्रह का अन्वेषण करें।"
                mr="आमच्या आकर्षक ई-बुक्स आणि ऑडिओबुक्सच्या वाढत्या संग्रहाचा शोध घ्या."
              />
            </p>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.saliljaveri&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="primary-btn px-8 py-3 rounded-lg cursor-pointer">
              <LangText en="Download the App" hi="ऐप डाउनलोड करें" mr="Download the App" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;