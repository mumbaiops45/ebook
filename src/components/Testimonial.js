"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
   {
    name: ` राजीव नंदकर`,
    role: `अतिरिक्त जिल्हाधिकारी यशदा, पुणे`,
    date: "09 March, 2024",
    description:
      `माणूस हा समाजप्रिय प्राणी आहे, असे आपण म्हणतो; मात्र, आजच्या धावपळीच्या आणि स्पर्धेच्या सोशल मीडियाच्या युगात माणसाचा स्वतःशी, कुटुंबाशी आणि समाजाशी असलेला संवाद कुठेतरी हरवत चालला आहे. नातेसंबंधांमधील गुंतागुंत, बदलती जीवनशैली, वाढत चाललेली स्पर्धा आणि सामाजिक कढी-परंपरांचा प्रभाव यामुळे निर्माण होणाऱ्या प्रश्नांना सकारात्मकरित्या कसे हाताळायचे, याचे मार्गदर्शन करणे ही काळाची गरज बनली आहे.\n

आमचे मित्र श्री. सलील जव्हेरी यांनी स्वानुभवावर लिहिलेले 'समानता सामाजिक विचारांची' हे पुस्तक केवळ विचारांचे संकलन नसून, सुदृढ समाजनिर्मितीसाठी मांडलेला एक बहुस्तरीय दृष्टिकोन आहे. या पुस्तकाची व्याप्ती बालपणापासून वृद्धत्वापर्यंत आणि वैयक्तिक यशापासून सामाजिक जबाबदारीपर्यंत पसरलेली आहे.\n

या पुस्तकात मुलगा-मुलगी भेदभाव, हुंडाबळी, कन्यादान आणि लग्न यांसारख्या परंपरांवर विवेचन करून सामाजिक वास्तवाचे दर्शन घडवण्यात आले आहे. पती-पत्नीमधील अपेक्षा, संवेदनशीलता आणि समानता या बाबींवर भर देऊन वैवाहिक आयुष्य सुखी करण्याचे मार्ग सुचवले आहेत.\n

या पुस्तकाचे सर्वात महत्त्वाचे वैशिष्ट्य म्हणजे 'समुपदेशन'. विद्यार्थी, पालक आणि कुटुंब यांना विविध स्तरांवर मार्गदर्शन करून माणसाच्या मनाचे आरोग्य जपण्याचा प्रयत्न केला गेला आहे. ट्रॅफिक सिग्नल, स्वच्छता आणि सामाजिक कार्यक्रमांसारख्या विषयांवर एक जबाबदार नागरिक घडवण्याचे सूत्र मांडले आहे.\n

आयुष्याच्या शेवटच्या टप्प्यावरही 'देहदान' सारख्या थोर संकल्पनेतून समाजाचे ऋण कसे फेडता येईल, याचे प्रेरणादायी विवेचन या पुस्तकात आहे.\n

हे पुस्तक वाचक, विद्यार्थी, पालक आणि समाजातील प्रत्येक घटकाला अंतर्मुख करायला लावणारे आहे. आयुष्यातील छोट्या-छोट्या गोष्टींकडे सकारात्मक दृष्टिकोन ठेवून आपण एक चांगला आणि सुसंस्कृत समाज घडवू शकतो, हा विश्वास हे पुस्तक देते. वाचकांना हे पुस्तक त्यांच्या जीवनप्रवासात नक्कीच मार्गदर्शक ठरेल, याची मला खात्री आहे.`,
    rating: 5,
  },
  {
    name: `स्मिता पाठक`,
    role: `निवृत्त पोलीस प्रतिबंधक (महाराष्ट्र पोलीस)`,
    date: "18 Dec, 2021",
    description:
      `श्री. सलील जव्हेरी लिखित 'समानता सामाजिक विचारांची' हे पुस्तक वाचले. समाजात वावरत असताना त्यांना ज्या ज्या गोष्टी खटकल्या, त्या त्या विषयांवर त्यांनी आपले विचार मांडले आहेत.\n

पुस्तकाबद्दल बोलायचे, तर प्रथमत: पुस्तकाचे मुखपृष्ठ खूपच बोलके आणि देखणे आहे. त्यांच्या निदर्शनास समाजातील जे विषय आले, त्या विषयांबद्दल आपले विचार या पुस्तकात मांडत असताना त्यांच्या विचारांना प्रोत्साहन देणारे त्यांचे आई-वडील, पत्नी व मुली यांच्याशी केलेल्या संवादांमधून व चर्चांमधून दैनंदिन जीवनातील छोट्या छोट्या अडचणी व त्यावरील उपाय उत्तर प्रकारे मांडले आहेत.\n

तसेच, बऱ्याच संस्थांमध्ये त्यांनी प्रमुखपद भूषवले आहे. त्या अनुषंगाने त्यांच्या निरीक्षणास आलेले, समाजात असलेल्या मुला-मुलींमधील फरकामुळे त्यांचे कसे नुकसान होते, हे उदाहरणासह स्पष्ट केले आहे. स्त्री-पुरुषांचे वागणे, चालिरीती, स्त्रीला समाजात मिळणारी दुय्यम वागणूक, स्त्री बुद्धिमान असणे, तसेच पुरुषांच्या बरोबरीने काम करण्यास व निर्णय घेण्यास स्त्री कशी सक्षम आहे, हे आपल्या उत्तम निरीक्षणातून नमूद केले आहे.

तसेच, आजच्या ह्या स्पर्धेच्या युगात लवकरात लवकर श्रीमंत होण्याचा मार्ग गुन्हेगारी प्रवृत्तीतून जातो, त्यामुळे मानसिक संतुलन हरवण्याचे प्रमाणही खूप आहे. समाजात गुन्हेगारीचे प्रमाण वाढण्यास घरातील संस्कार, प्रेम, आपुलकी, संवाद अशा मानसिकदृष्ट्या निगडित असलेल्या गोष्टी कारणीभूत आहेत, हे खरे आहे.\n

असे अनेक विषय थोडक्यात मांडून श्री. सलील यांनी वाचकांना विचार करायला लावले आहे. नवीन नवीन विचार घेऊन हे पुस्तक समाजापुढे आले आहे. यातून समाजबोधन होण्यासाठी खूप वाव आहे. त्यांच्या या धाडसी लिखाणासाठी आणि समाजप्रबोधनासाठी अनेक शुभेच्छा.`,
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
              What Our <span className="text-[var(--primary)]">Readers Say</span>
            </h2>
            <p className="  max-w-3xl ">
              Real experiences from readers who enjoy seamless eBook and audiobook access every day.
            </p>
          </div>
        </div>

        {/* Main two-column card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_48px_rgba(200,137,60,0.1)] border border-[var(--primary)]/20 overflow-hidden">
          <div className="flex flex-col md:flex-row ">

            {/* ── LEFT: User Image ── */}


            {/* ── RIGHT: Comment ── */}
            <div className="flex-1 flex flex-col justify-between p-8 md:p-12">

              {/* Quote + description */}
              
              <div>
  <QuoteIcon />

  <div className="">
    {t.description
      .split("\n")
      .filter(line => line.trim() !== "")
      .map((line, i) => (
        <p key={i} className="m-2 text-justify leading-relaxed">
          {line}
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

                {/* Navigation — desktop */}
                {/* Navigation — NOW visible on mobile */}
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
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)]/10 hover:border-[var(--primary)] transition-all duration-200"
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
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white hover:opacity-90 transition-all duration-200"
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

        {/* ── Thumbnail row — all reviewers ── */}
        {/* <div className="mt-10 flex flex-wrap justify-center gap-4">
          {testimonials.map((person, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all duration-300 ${
                active === i
                  ? "bg-[var(--primary)]/10 border-[var(--primary)]/50 shadow-sm"
                  : "bg-white border-[#c8893c]/15 hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/5"
              }`}
            >
              <div className={`relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-2 transition-all duration-300 ${active === i ? "ring-[#c8893c]" : "ring-transparent"}`}>
                <Image src={person.image} alt={person.name} fill className="object-cover" />
              </div>
              <span className={`text-sm font-medium transition-colors duration-300 ${active === i ? "text-[#c8893c]" : "text-[#3a2510]/60"}`}>
                {person.name.split(" ")[0]}
              </span>
            </button>
          ))}
        </div> */}

      </div>
    </section>
  );
}