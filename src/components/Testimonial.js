"use client";
import { useState } from "react";
import Image from "next/image";
import LangText from "./LangText";

const testimonials = [
  {
   name: (
      <LangText
        en="Mr. Rajiv Nandkar"
        mr="श्री राजीव नंदकर"
        hi="श्री राजीव नंदकर"
      />
    ),
    role: (
      <LangText
        en="Additional Collector, YASHADA, Pune"
        mr="अतिरिक्त जिल्हाधिकारी यशदा, पुणे"
        hi="अतिरिक्त जिल्हाधिकारी यशदा, पुणे"
        className="notranslate"
      />
    ),
    date: "09 March, 2024",
    description: {
      mr: `माणूस हा समाजप्रिय प्राणी आहे, असे आपण म्हणतो; मात्र, आजच्या धावपळीच्या आणि स्पर्धेच्या सोशल मीडियाच्या युगात माणसाचा स्वतःशी, कुटुंबाशी आणि समाजाशी असलेला संवाद कुठेतरी हरवत चालला आहे. नातेसंबंधांमधील गुंतागुंत, बदलती जीवनशैली, वाढत चाललेली स्पर्धा आणि सामाजिक कढी-परंपरांचा प्रभाव यामुळे निर्माण होणाऱ्या प्रश्नांना सकारात्मकरित्या कसे हाताळायचे, याचे मार्गदर्शन करणे ही काळाची गरज बनली आहे.\n

आमचे मित्र श्री. सलील जव्हेरी यांनी स्वानुभवावर लिहिलेले 'समानता सामाजिक विचारांची' हे पुस्तक केवळ विचारांचे संकलन नसून, सुदृढ समाजनिर्मितीसाठी मांडलेला एक बहुस्तरीय दृष्टिकोन आहे. या पुस्तकाची व्याप्ती बालपणापासून वृद्धत्वापर्यंत आणि वैयक्तिक यशापासून सामाजिक जबाबदारीपर्यंत पसरलेली आहे.\n

या पुस्तकात मुलगा-मुलगी भेदभाव, हुंडाबळी, कन्यादान आणि लग्न यांसारख्या परंपरांवर विवेचन करून सामाजिक वास्तवाचे दर्शन घडवण्यात आले आहे. पती-पत्नीमधील अपेक्षा, संवेदनशीलता आणि समानता या बाबींवर भर देऊन वैवाहिक आयुष्य सुखी करण्याचे मार्ग सुचवले आहेत.\n

या पुस्तकाचे सर्वात महत्त्वाचे वैशिष्ट्य म्हणजे 'समुपदेशन'. विद्यार्थी, पालक आणि कुटुंब यांना विविध स्तरांवर मार्गदर्शन करून माणसाच्या मनाचे आरोग्य जपण्याचा प्रयत्न केला गेला आहे. ट्रॅफिक सिग्नल, स्वच्छता आणि सामाजिक कार्यक्रमांसारख्या विषयांवर एक जबाबदार नागरिक घडवण्याचे सूत्र मांडले आहे.\n

आयुष्याच्या शेवटच्या टप्प्यावरही 'देहदान' सारख्या थोर संकल्पनेतून समाजाचे ऋण कसे फेडता येईल, याचे प्रेरणादायी विवेचन या पुस्तकात आहे.\n

हे पुस्तक वाचक, विद्यार्थी, पालक आणि समाजातील प्रत्येक घटकाला अंतर्मुख करायला लावणारे आहे. आयुष्यातील छोट्या-छोट्या गोष्टींकडे सकारात्मक दृष्टिकोन ठेवून आपण एक चांगला आणि सुसंस्कृत समाज घडवू शकतो, हा विश्वास हे पुस्तक देते. वाचकांना हे पुस्तक त्यांच्या जीवनप्रवासात नक्कीच मार्गदर्शक ठरेल, याची मला खात्री आहे.`,
      hi: `मनुष्य एक समाजप्रिय प्राणी है, ऐसा हम कहते हैं। लेकिन, आजकल के भागदौड़ और प्रतियोगिता के सोशल मीडिया के युग में मनुष्य का खुद से, परिवार से और समाज से जो संवाद था वह कहीं लुप्त होता हुआ दिखाई दे रहा है। रिश्ते-नातों की उलझन, बदलती जीवनशैली, बढ़ती हुई प्रतियोगिता और सामाजिक प्रथा-परंपराओं का प्रभाव और इसके कारण पैदा होने वाले सवालों का सकारात्मक दृष्टिकोण से कैसे सामना करें, इसके बारे में मार्गदर्शन करना समय के चलते आवश्यक हो गया है।\n

हमारे मित्र श्री सलील जव्हेरी जी ने स्वानुभव पर आधारित लिखी 'सामाजिक समानता के विचार' यह पुस्तक केवल विचारों का संचय नहीं, बल्कि मजबूत समाज निर्माण के लिए प्रस्तुत किया गया वस्तुनिष्ठ दृष्टिकोण है। इस पुस्तक की व्यापकता बच्चों से लेकर वृद्धों तक और व्यक्तिगत जीवन से लेकर सामाजिक जिम्मेदारी तक फैली हुई है।\n

इस पुस्तक में बेटा-बेटी भेदभाव, दहेज पीड़िता, कन्यादान और विवाह जैसी सभी परंपराओं पर विवेचन करते हुए समाज की वास्तविकता का दर्शन कराया गया है। पति-पत्नी के बीच की अपेक्षाएँ, संवेदनशीलता और समानता इन बातों पर जोर देते हुए वैवाहिक जीवन सुखी करने के उपाय सुझाए गए हैं।\n

इस पुस्तक की सबसे महत्त्वपूर्ण बात है, 'काउंसलिंग विवाहपूर्व, विवाह के पश्चात, बच्चों, खिलाड़ियों, यहाँ तक कि ऑफिस और गृहनिर्माण सोसायटी इन सभी का काउंसलिंग' ऐसे विविध स्तरों पर मार्गदर्शन करते हुए, मनुष्य के मन का स्वास्थ्य सुरक्षित रखने का प्रयास किया गया है। ट्रैफिक अनुशासन, साफ-सफाई, और सकारात्मक कार्यसंस्कृति ऐसे अनेक विषयों के माध्यम से एक जिम्मेदार नागरिक निर्माण के सूत्र प्रस्तुत किए गए हैं।\n

जीवन के अंतिम पड़ाव पर भी 'देहदान' जैसी महान अवधारणा के माध्यम से समाज का ऋण कैसे चुका सकते हैं, इसका प्रेरणादायी विवेचन इस पुस्तक में दिखाई देता है।\n

यह पुस्तक पाठक, विद्यार्थी, माता-पिता और समाज के प्रत्येक सदस्य को आत्मनिरीक्षण करने पर मजबूर करने वाली है। जीवन की छोटी-छोटी बातों की तरफ देखने का दृष्टिकोण सकारात्मक हो, तो हम एक आनंदमय और सुसंस्कृत समाज निर्माण कर सकते हैं, यह विश्वास इस पुस्तक से हमें मिलता है। पाठकों के लिए यह पुस्तक उनके जीवन के सफर में निश्चित ही मार्गदर्शक साबित होगी, इसका मुझे पूरा विश्वास है।`,
      en: `We say that humans are social beings; however, in today's fast-paced, competitive social media era, human connection with oneself, family, and society is fading. Guiding people on how to positively address issues arising from complex relationships, changing lifestyles, increasing competition, and social traditions has become a necessity of our time.\n

Written from personal experience by our friend Mr. Salil Jhaveri, 'Samanta Samajik Vicharanchi' is not merely a compilation of thoughts, but a multi-dimensional vision for building a healthy society. The scope of this book spans from childhood to old age, and from personal success to social responsibility.\n

The book reflects social reality by discussing issues like gender discrimination, dowry victims, and traditions like Kanyadaan and marriage. By emphasizing expectations, sensitivity, and equality between spouses, it suggests ways to lead a happy married life.\n

The most key feature of this book is 'Counseling'. By providing guidance at various levels for students, parents, and families, it strives to safeguard mental health. It lays down formulas for building responsible citizens through topics like traffic discipline, cleanliness, and work culture.\n

Even at the final stage of life, the book presents an inspiring discussion on how one can repay society through noble concepts like body donation.\n

This book compels readers, students, parents, and every member of society to reflect within. It inspires confidence that with a positive outlook on small aspects of life, we can create a happy and cultured society. I am confident this book will serve as a guiding light on the journey of life.`
    },
    rating: 5,
  },
  {
   name: (
      <LangText
        en="Mrs. Smita Pathak"
        mr="श्रीमती स्मिता पाठक"
        hi="श्रीमती स्मिता पाठक"
      />
    ),
    role: (
      <LangText
        en="Retired Assistant Commissioner of Police, Maharashtra Police"
        mr="निवृत्त सहाय्याक पोलिस आयुक्त महाराष्ट्र पोलीस"
        hi="निवृत्त पोलिस सहाय्यक आयुक्त महाराष्ट्र पोलिस"
        className="notranslate"
      />
    ),
    date: "18 Dec, 2021",
    description: {
      mr: `श्री. सलील जव्हेरी लिखित 'समानता सामाजिक विचारांची' हे पुस्तक वाचले. समाजात वावरत असताना त्यांना ज्या ज्या गोष्टी खटकल्या, त्या त्या विषयांवर त्यांनी आपले विचार मांडले आहेत.\n

पुस्तकाबद्दल बोलायचे, तर प्रथमत: पुस्तकाचे मुखपृष्ठ खूपच बोलके आणि देखणे आहे. त्यांच्या निदर्शनास समाजातील जे विषय आले, त्या विषयांबद्दल आपले विचार या पुस्तकात मांडत असताना त्यांच्या विचारांना प्रोत्साहन देणारे त्यांचे आई-वडील, पत्नी व मुली यांच्याशी केलेल्या संवादांमधून व चर्चांमधून दैनंदिन जीवनातील छोट्या छोट्या अडचणी व त्यावरील उपाय उत्तर प्रकारे मांडले आहेत.\n

तसेच, बऱ्याच संस्थांमध्ये त्यांनी प्रमुखपद भूषवले आहे. त्या अनुषंगाने त्यांच्या निरीक्षणास आलेले, समाजात असलेल्या मुला-मुलींमधील फरकामुळे त्यांचे कसे नुकसान होते, हे उदाहरणासह स्पष्ट केले आहे. स्त्री-पुरुषांचे वागणे, चालिरीती, स्त्रीला समाजात मिळणारी दुय्यम वागणूक, स्त्री बुद्धिमान असणे, तसेच पुरुषांच्या बरोबरीने काम करण्यास व निर्णय घेण्यास स्त्री कशी सक्षम आहे, हे आपल्या उत्तम निरीक्षणातून नमूद केले आहे.\n

तसेच, आजच्या ह्या स्पर्धेच्या युगात लवकरात लवकर श्रीमंत होण्याचा मार्ग गुन्हेगारी प्रवृत्तीतून जातो, त्यामुळे मानसिक संतुलन हरवण्याचे प्रमाणही खूप आहे. समाजात गुन्हेगारीचे प्रमाण वाढण्यास घरातील संस्कार, प्रेम, आपुलकी, संवाद अशा मानसिकदृष्ट्या निगडित असलेल्या गोष्टी कारणीभूत आहेत, हे खरे आहे.\n

असे अनेक विषय थोडक्यात मांडून श्री. सलील यांनी वाचकांना विचार करायला लावले आहे. नवीन नवीन विचार घेऊन हे पुस्तक समाजापुढे आले आहे. यातून समाजबोधन होण्यासाठी खूप वाव आहे. त्यांच्या या धाडसी लिखाणासाठी आणि समाजप्रबोधनासाठी अनेक शुभेच्छा.`,
      hi: `श्री. सलील जव्हेरी लिखित 'सामाजिक समानता के विचार' यह पुस्तक मैंने पढ़ी। समाज में रहते हुए उन्हें जो बातें अप्रिय लगीं, उन सभी विषयों पर उन्होंने अपने विचार प्रस्तुत किए हैं।\n

पुस्तक के विषय में बात करें तो पुस्तक का आवरण अत्यंत जीवंत और आकर्षक है। समाज के जो जो विषय उनके सामने आए, उन विषयों के बारे में अपने विचार इस पुस्तक में प्रस्तुत करते हुए उनके इन्ही विचारों को प्रोत्साहन देने वाले उनके माता-पिता, पत्नी और दोनों बेटियाँ इनसे की गई बातचीत और चर्चाओं के माध्यम से दैनिक जीवन की छोटी-छोटी कठिनाईयों और उनके समाधान को बहुत ही अच्छे ढंग से प्रस्तुत किया गया है।\n

साथ ही, अनेक संस्थाओं में उन्होंने प्रमुख पद की जिम्मेदारी बहुत अच्छे से निभाई है। उस समय उन्हें यह बात ध्यान में आई कि समाज में बेटा-बेटी में किए जाने वाले भेद के कारण उनका किस प्रकार नुकसान हो रहा है, और इस बात को उन्होंने उदाहरण सहित स्पष्ट किया है। स्त्री-पुरुष का व्यवहार, प्रथाएँ, स्त्री को समाज में दिया जाने वाला निम्न स्थान, स्त्री बुद्धिमान है, साथ ही वह पुरुषों के कंधे से कंधा मिलाकर काम करने और निर्णय लेने में कैसे सक्षम है, यह सब अपने उत्तम निरीक्षण की सहायता से प्रस्तुत किया है।\n

साथ ही, आज के प्रतियोगिता के युग में जल्द से जल्द धनवान होने का मार्ग आपराधिक प्रवृत्ति से होकर जाता है, इसलिए मानसिक संतुलन बिगड़ने का प्रमाण भी बढ़ गया है। समाज में आपराधिक प्रवृत्ति बढ़ने में घर के संस्कार, प्रेम, अपनापन, संवाद ऐसी मानसिक दृष्टिकोण से जुड़ी बातें भी जिम्मेदार होती हैं, यह वास्तविकता है।\n

ऐसे अनेक विषय संक्षिप्त में प्रस्तुत करके श्री. सलील जी ने पाठकों को विचार करने के लिए मजबूर कर दिया है। नवीन विचारों को लेकर यह पुस्तक समाज के सामने रखी गई है। इससे समाज प्रबोधन होने की बहुत संभावना है। उनके इस साहसी लेखन और समाज प्रबोधन के लिए अनेकानेक शुभकामनाएँ।`,
      en: `I read the book 'Samanta Samajik Vicharanchi' written by Mr. Salil Jhaveri. He has expressed his thoughts on various issues that troubled him while observing society.\n

Speaking of the book, first of all, the cover design is extremely vivid and appealing. While presenting his ideas on societal issues, he beautifully articulates daily life challenges and solutions through conversations with his parents, wife, and daughters who encouraged his vision.\n

Having held leadership positions in various organizations, he observed firsthand how gender discrimination harms children, demonstrating this with clear examples. Through keen observation, he highlights gender dynamics, societal biases against women, and emphasizes how women are intelligent and fully capable of working alongside men and making decisions.\n

Furthermore, in today's competitive world, the urge to get rich quick often leads to criminal tendencies, causing severe mental imbalance. It is a fact that lack of values, love, affection, and communication at home contributes to rising crime rates.\n

By concisely presenting such diverse topics, Mr. Salil has compelled readers to think. This book offers fresh perspectives to society with vast scope for social awareness. Warm wishes for his courageous writing and social enlightenment.`
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
              <LangText 
                en={<>What Our <span className="text-[var(--primary)]">Readers Say</span></>}
                mr={<>वाचक <span className="text-[var(--primary)]">काय म्हणतात</span></>}
                hi={<>पाठकों की <span className="text-[var(--primary)]">प्रतिक्रियाएँ</span></>}
              />
            </h2>
            <p className="max-w-3xl">
              <LangText 
                en="Real experiences from readers who enjoy seamless eBook and audiobook access every day."
                mr="ई-बुक आणि ऑडिओबुकचा आनंद घेणाऱ्या वाचकांचे अनुभव."
                hi="ई-बुक और ऑडियोबुक का आनंद लेने वाले पाठकों के वास्तविक अनुभव।"
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

                <div className="">
                  <LangText
                    en={t.description.en.split("\n").filter(line => line.trim() !== "").map((line, i) => (
                      <p key={i} className="m-2 text-justify leading-relaxed">{line}</p>
                    ))}
                    mr={t.description.mr.split("\n").filter(line => line.trim() !== "").map((line, i) => (
                      <p key={i} className="m-2 text-justify leading-relaxed">{line}</p>
                    ))}
                    hi={t.description.hi.split("\n").filter(line => line.trim() !== "").map((line, i) => (
                      <p key={i} className="m-2 text-justify leading-relaxed">{line}</p>
                    ))}
                  />
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
                        className={`rounded-full bg-[var(--primary)] transition-all duration-300 ${active === i ? "w-6 h-2 opacity-100" : "w-2 h-2 opacity-25"
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