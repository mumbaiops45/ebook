"use client";
import { useState } from "react";
import Image from "next/image";
import LangText from "./LangText";

const testimonials = [
  {
    name: `श्री राजीव नंदकर`,
    role: (
      <LangText
        en="Additional District Collector YASHADA, Pune, India"
        hi="अतिरिक्त जिल्हाधिकारी यशदा, पुणे"
        className="notranslate"
      />
    ),
    date: "09 March, 2024",
    description: {
      en: `It is often said that human beings are social by nature. However, in today’s fast-paced, competitive, and social media-driven world, meaningful communication, within oneself, within families, and within society, is gradually fading. Changing lifestyles, increasing competition and the influence of social traditions all give rise to new challenges. Addressing these issues with a positive approach has become a necessity of our times.\n\nMy friend, Mr. Salil Javeri, through his book “Thoughts on Social Equality”, has gone beyond merely presenting ideas. This book offers a comprehensive perspective for society as a whole. Its scope extends from childhood to old age, and from personal life to social responsibility. The book thoughtfully examines traditions such as gender discrimination, dowry, and kanyadaan, bringing out their social realities. It also offers guidance on building a happy married life, focusing on mutual expectations, sensitivity, and equality between partners.\n\nOne of the book’s most significant aspects is its emphasis on counselling. It addresses various forms of guidance, pre-marital, post-marital, for children, athletes, workplaces, and even residential communities, highlighting the importance of mental well-being at every stage of life. Through discussions on traffic discipline, cleanliness, and positive work culture, the book outlines a path toward becoming responsible citizens. Even in the later stages of life, it inspires readers through the noble concept of body donation, showing how one can give back to society.\n\nThis book encourages readers, students, parents, and every member of society to introspect. It instills a positive outlook toward life’s small yet meaningful aspects, reinforcing the belief that such a perspective can help build a happy and cultured society. I am confident that this book will serve as a trusted guide in the reader’s life journey.`,
      hi: `मनुष्य एक समाजप्रिय प्राणी है, ऐसा हम कहते हैं। लेकिन, आजकल के भागदौड़ और प्रतियोगिता के सोशल मीडिया के युग में मनुष्य का खुद से, परिवार से और समाज से जो संवाद था वह कहीं लुप्त होता हुआ दिखाई दे रहा है। रिश्ते-नातों की उलझन, बदलती जीवनशैली, बढ़ती हुई प्रतियोगिता और सामाजिक प्रथा-परंपराओं का प्रभाव और इसके कारण पैदा होने वाले सवालों का सकारात्मक दृष्टिकोण से कैसे सामना करें, इसके बारे में मार्गदर्शन करना समय के चलते आवश्यक हो गया है।\n\nहमारे मित्र श्री सलील जव्हेरी जी ने स्वानुभव पर आधारित लिखी 'सामाजिक समानता के विचार' यह पुस्तक केवल विचारों का संचय नहीं, बल्कि मजबूत समाज निर्माण के लिए प्रस्तुत किया गया वस्तुनिष्ठ दृष्टिकोण है। इस पुस्तक की व्यापकता बच्चों से लेकर वृद्धों तक और व्यक्तिगत जीवन से लेकर सामाजिक जिम्मेदारी तक फैली हुई है। इस पुस्तक में बेटा-बेटी भेदभाव, दहेज पीड़िता, कन्यादान और विवाह जैसी सभी परंपराओं पर विवेचन करते हुए समाज की वास्तविकता का दर्शन कराया गया है। पति-पत्नी के बीच की अपेक्षाएँ, संवेदनशीलता और समानता इन बातों पर जोर देते हुए वैवाहिक जीवन सुखी करने के उपाय सुझाए गए हैं।\n\nइस पुस्तक की सबसे महत्त्वपूर्ण बात है, 'काउंसलिंग विवाहपूर्व, विवाह के पश्चात, बच्चों, खिलाड़ियों, यहाँ तक कि ऑफिस और गृहनिर्माण सोसायटी इन सभी का काउंसलिंग' ऐसे विविध स्तरों पर मार्गदर्शन करते हुए, मनुष्य के मन का स्वास्थ्य सुरक्षित रखने का प्रयास किया गया है। ट्रैफिक अनुशासन, साफ-सफाई, और सकारात्मक कार्यसंस्कृति ऐसे अनेक विषयों के माध्यम से एक जिम्मेदार नागरिक निर्माण के सूत्र प्रस्तुत किए गए हैं। जीवन के अंतिम पड़ाव पर भी 'देहदान' जैसी महान अवधारणा के माध्यम से समाज का ऋण कैसे चुका सकते हैं, इसका प्रेरणादायी विवेचन इस पुस्तक में दिखाई देता है।\n\nयह पुस्तक पाठक, विद्यार्थी, माता-पिता और समाज के प्रत्येक सदस्य को आत्मनिरीक्षण करने पर मजबूर करने वाली है। जीवन की छोटी-छोटी बातों की तरफ देखने का दृष्टिकोण सकारात्मक हो, तो हम एक आनंदमय और सुसंस्कृत समाज निर्माण कर सकते हैं, यह विश्वास इस पुस्तक से हमें मिलता है। पाठकों के लिए यह पुस्तक उनके जीवन के सफर में निश्चित ही मार्गदर्शक साबित होगी, इसका मुझे पूरा विश्वास है।`,
    },
    rating: 5,
  },
  {
    name: `श्रीमती स्मिता पाठक`,
    role: (
      <LangText
        en="Retired Assistant Commissioner of Police Maharashtra Police, India"
        hi="निवृत्त सहाय्याक पोलिस आयुक्त महाराष्ट्र पोलीस"
        className="notranslate"
      />
    ),
    date: "18 Dec, 2021",
    description: {
      en: `I read “Thoughts on Social Equality”, written by Mr. Salil Javeri. The book reflects on the realities of society and presents the author’s thoughts on the issues that have deeply concerned him.\n\nTo begin with, the book’s cover is striking and expressive. Drawing from his observations of society, the author shares his perspectives on various topics. His thoughts are shaped and encouraged by meaningful conversations with his parents, wife, and daughters. He also presents everyday challenges from real life, along with practical ways to address them.\n\nThrough his work in various organizations and his leadership roles, he has closely observed how discrimination between boys and girls leads to significant harm in society. Using clear examples, he highlights differences in behavior, character, and the subordinate status assigned to women. Despite their intelligence and capability, women are frequently denied equal opportunities, yet they are fully capable of working alongside men and participating in decision- making, as he effectively demonstrates through his observations.\n\nHe also points out that in today’s competitive world, the rush to become wealthy quickly often leads people down unethical paths, resulting in erosion of mental well-being. The rising rate of crime, in many cases, reflects a lack of emotional grounding within families. Values such as love, affection, and meaningful communication are often missing.\n\nBy presenting such issues concisely and thoughtfully, Mr. Salil compels readers to reflect deeply.\n\nThe book brings forward fresh ideas and offers strong potential for social awareness and reform. I extend my best wishes for his courageous writing and his efforts toward social enlightenment.`,
      hi: `श्री. सलील जव्हेरी लिखित 'सामाजिक समानता के विचार' अपने वि यह पुस्तक मैंने पढ़ी। समाज में रहते हुए उन्हें जो बातें अप्रिय लगीं, उन सभी विषयों पर उन्होंनेचार प्रस्तुत किए हैं।\n\nपुस्तक के विषय में बात करें तो पुस्तक का आवरण अत्यंत जीवंत और आकर्षक है। समाज के जो जो विषय उनके सामने आए, उन विषयों के बारे में अपने विचार इस पुस्तक में प्रस्तुत करते हुए उनके इन्ही विचारों को प्रोत्साहन देने वाले उनके माता-पिता, पत्नी और दोनों बेटियाँ इनसे की गई बातचीत और चर्चाओं के माध्यम से दैनिक जीवन की छोटी-छोटी कठिनाईयों और उनके समाधान को बहुत ही अच्छे ढंग से प्रस्तुत किया गया है।\n\nसाथ ही, अनेक संस्थाओं में उन्होंने प्रमुख पद की जिम्मेदारी बहुत अच्छे से निभाई है। उस समय उन्हें यह बात ध्यान में आई कि समाज में बेटा-बेटी में किए जाने वाले भेद के कारण उनका किस प्रकार नुकसान हो रहा है, और इस बात को उन्होंने उदाहरण सहित स्पष्ट किया है। स्त्री-पुरुष का व्यवहार, प्रथाएँ, स्त्री को समाज में दिया जाने वाला निम्न स्थान, स्त्री बुद्धिमान है, साथ ही वह पुरुषों के कंधे से कंधा मिलाकर काम करने और निर्णय लेने में कैसे सक्षम है, यह सब अपने उत्तम निरीक्षण की सहायता से प्रस्तुत किया है।\n\nसाथ ही, आज के प्रतियोगिता के युग में जल्द से जल्द धनवान होने का मार्ग आपराधिक प्रवृत्ति से होकर जाता है, इसलिए मानसिक संतुलन बिगड़ने का प्रमाण भी बढ़ गया है। समाज में आपराधिक प्रवृत्ति बढ़ने में घर के संस्कार, प्रेम, अपनापन, संवाद ऐसी मानसिक दृष्टिकोण से जुड़ी बातें भी जिम्मेदार होती हैं, यह वास्तविकता है।\n\nऐसे अनेक विषय संक्षिप्त में प्रस्तुत करके श्री. सलील जी ने पाठकों को विचार करने के लिए मजबूर कर दिया है।\n\nनए-नए विचार लेकर यह पुस्तक समाज के सामने रखी गई है। इससे समाज प्रबोधन होने की बहुत संभावना है। उनके इस साहसी लेखन और समाज प्रबोधन के लिए अनेकानेक शुभकामनाएँ।`,
    },
    rating: 5,
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

  // दोनों भाषाओँ के पैराग्राफ तैयार करना
  const enLines = t.description.en.split("\n").filter((line) => line.trim() !== "");
  const hiLines = t.description.hi.split("\n").filter((line) => line.trim() !== "");

  return (
    <section id="testimonials" className="relative bg-[#fdf8f2] overflow-hidden py-20 px-8 md:px-15 lg:px-16">

      {/* Subtle background circle */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#c8893c]/5 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full bg-[#c8893c]/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <div className=" mb-14">
          <div className=" mb-16">
            <h2
              className="relative inline-block pb-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[var(--primary)] after:to-transparent mb-4"
            >
              <span className="text-[var(--primary)]">
                <LangText
                  en="Review"
                  hi="हमारे पाठक क्या कहते हैं"
                />
              </span>
            </h2>
            <p className="max-w-3xl">
              <LangText
                en="Real experiences from readers who enjoy seamless eBook and audiobook access every day."
                hi="उन पाठकों के वास्तविक अनुभव जानें, जो प्रतिदिन हमारी ई-पुस्तकों और ऑडियोबुक्स का सहजता से आनंद लेते हैं।"
              />
            </p>
          </div>
        </div>

        {/* Main two-column card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_48px_rgba(200,137,60,0.1)] border border-[var(--primary)]/20 overflow-hidden">
          <div className="flex flex-col md:flex-row ">

            {/* ── RIGHT: Comment ── */}
            <div className="flex-1 flex flex-col justify-between p-8 md:p-12">

              {/* Quote + description */}
              <div>
                <QuoteIcon />

                <div className="mt-4">
                  {enLines.map((line, i) => (
                    <p key={i} className="mb-4 text-justify leading-relaxed">
                      <LangText
                        en={line}
                        hi={hiLines[i] || line}
                      />
                    </p>
                  ))}
                </div>
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
                  <p className="text-[var(--primary)] text-xs tracking-widest uppercase mt-0.5">
                    {t.role}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center md:justify-end gap-3 w-full md:w-auto">

                  {/* Dots */}
                  <div className="flex gap-1.5 mr-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`rounded-full bg-[var(--primary)] transition-all duration-300 ${
                          active === i ? "w-6 h-2 opacity-100" : "w-2 h-2 opacity-25"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Prev */}
                  <button
                    onClick={() =>
                      setActive((prev) =>
                        prev === 0 ? testimonials.length - 1 : prev - 1
                      )
                    }
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)]/10 hover:border-[var(--primary)] transition-all duration-200 cursor-pointer"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                  </button>

                  {/* Next */}
                  <button
                    onClick={() =>
                      setActive((prev) =>
                        prev === testimonials.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white hover:opacity-90 transition-all duration-200 cursor-pointer"
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

      </div>
    </section>
  );
}