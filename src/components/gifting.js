"use client";
import LangText from "./LangText";
import { Gift, BookOpen } from "lucide-react";

export default function GiftingSection() {
  return (
    <section className="relative w-full py-20 px-8 md:px-20 before:absolute before:inset-0 before:bg-gradient-to-l before:from-[var(--primary)]/30 before:to-transparent before:z-0">
      <div className="text-center mb-12">
        <span className="text-[13px] flex items-center gap-2 w-fit mx-auto px-4 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)]/20 uppercase tracking-wider block mb-3">
          <Gift className="w-6 h-6 text-[var(--primary)]" />
          <LangText en="Gifting" hi="उपहार" mr="भेटवस्तू" />
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
            en={
              <>
                A <strong className="text-[var(--primary)]"> Gift </strong>That Lasts{" "}
                <strong className="text-[var(--primary)]">Forever</strong>
              </>
            }
            hi={
              <>
                एक ऐसा <strong className="text-[var(--primary)]"> उपहार </strong>जो{" "}
                <strong className="text-[var(--primary)]">जीवनभर साथ रहे</strong>
              </>
            }
            mr={
              <>
                एक अशी <strong className="text-[var(--primary)]"> भेट </strong>जी{" "}
                <strong className="text-[var(--primary)]">कायमस्वरूपी सोबत राहते</strong>
              </>
            }
          />
        </h2>
      </div>

      <div className="max-w-5xl">
        {/* Content */}
        <p className="text-gray-600 leading-relaxed">
          <LangText
            en="If you gift someone a bouquet of flowers, it lasts for just a day or two. But if you gift a book, it stays with them for a lifetime."
            hi="यदि आप किसी को फूलों का गुलदस्ता उपहार में देते हैं, तो उसकी खुशी केवल एक-दो दिनों तक रहती है। लेकिन यदि आप किसी को पुस्तक उपहार में देते हैं, तो वह जीवनभर उसके साथ रहती है।"
            mr="जर तुम्ही कोणाला फुलांचा गुच्छ भेट दिला, तर तो फक्त एक-दोन दिवस टिकतो. पण जर तुम्ही पुस्तक भेट दिले, तर ते आयुष्यभर त्यांच्यासोबत राहते."
          />
        </p>

        <p className="text-gray-600 leading-relaxed mt-4">
          <LangText
            en="It is not just a gift, but a source of knowledge that helps in improving and enriching their life."
            hi="यह केवल एक उपहार नहीं, बल्कि ज्ञान का ऐसा स्रोत है जो व्यक्ति के जीवन को बेहतर, समृद्ध और प्रेरणादायक बनाता है।"
            mr="ही केवळ भेटवस्तू नाही, तर ज्ञानाचा असा स्त्रोत आहे जो मानवाचे जीवन अधिक समृद्ध आणि उत्कृष्ट बनवण्यास मदत करतो."
          />
        </p>

        <p className="text-gray-700 font-medium leading-relaxed mt-4">
          <LangText
            en="Such a thoughtful gesture reflects your positive and meaningful personality."
            hi="ऐसा विचारपूर्ण उपहार आपकी सकारात्मक, संवेदनशील और अर्थपूर्ण सोच को दर्शाता है।"
            mr="अशी विचारपूर्वक दिलेली भेट तुमच्या सकारात्मक आणि अर्थपूर्ण व्यक्तित्वाला दर्शवते."
          />
        </p>

        {/* Highlight Box */}
        <div className="border-l-4 py-3 border-[var(--primary)] mt-6 pl-4">
          <p className="font-medium">
            <LangText
              en="Discover inspiring thoughts, listen to studio-quality audiobooks, preview chapters before downloading, and enjoy a personalized reading."
              hi="प्रेरणादायक विचारों की खोज करें, स्टूडियो-गुणवत्ता वाली ऑडियोबुक्स सुनें, डाउनलोड करने से पहले अध्यायों का पूर्वावलोकन करें और व्यक्तिगत पठन अनुभव का आनंद लें।"
              mr="प्रेरणादायी विचारांचा शोध घ्या, स्टुडिओ-दर्जाच्या ऑडिओबुक्स ऐका, डाउनलोड करण्यापूर्वी प्रकरणांचे पूर्वावलोकन करा आणि वैयक्तिकृत वाचनाचा आनंद घ्या."
            />
          </p>
        </div>
      </div>
    </section>
  );
}