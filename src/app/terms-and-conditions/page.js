"use client";
import { useEffect } from "react";
import LangText from "@/components/LangText";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      
      <h1 className="text-3xl font-bold mb-2 text-[var(--primary)]">
        <LangText 
          en="Terms & Conditions" 
          hi="नियम और शर्तें" 
          mr="नियम आणि अटी" 
        />
      </h1>

      <div className="mt-10 space-y-8 text-black/80 leading-relaxed">

        {/* 1 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="1. Introduction" 
              hi="1. परिचय" 
              mr="1. परिचय" 
            />
          </h2>
          <p>
            <LangText 
              en='These Terms and Conditions ("Terms") govern your access to and use of the ' 
              hi='ये नियम और शर्तें ("शर्तें") ' 
              mr='हे नियम आणि अटी ("अटी") ' 
            />
            <LangText 
              en="Salil Javeri" 
              hi="सलील जव्हेरी" 
              mr="सलील जव्हेरी" 
            />
            <LangText 
              en=" platform (website and mobile application). By registering, subscribing, or using the platform, you agree to be bound by these Terms. If you do not agree, please discontinue use." 
              hi=" प्लेटफ़ॉर्म (वेबसाइट और मोबाइल एप्लिकेशन) तक आपकी पहुँच और उपयोग को नियंत्रित करती हैं। पंजीकरण, सदस्यता लेने या प्लेटफ़ॉर्म का उपयोग करके, आप इन शर्तों से बाध्य होने के लिए सहमत होते हैं। यदि आप सहमत नहीं हैं, तो कृपया उपयोग बंद कर दें।" 
              mr=" प्लॅटफॉर्म (वेबसाइट आणि मोबाईल ॲप्लिकेशन) चा वापर नियंत्रित करतात. नोंदणी करून, सबस्क्राईब करून किंवा प्लॅटफॉर्म वापरून, तुम्ही या अटींचे पालन करण्यास सहमती दर्शवता. तुम्ही सहमत नसल्यास, कृपया वापर बंद करा." 
            />
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="2. Platform Overview" 
              hi="2. प्लेटफ़ॉर्म अवलोकन" 
              mr="2. प्लॅटफॉर्म तपशील" 
            />
          </h2>
          <p>
            <LangText 
              en="The platform provides access to eBooks and Audiobooks authored or curated by " 
              hi="यह प्लेटफ़ॉर्म " 
              mr="हे प्लॅटफॉर्म " 
            />
            <LangText 
              en="Salil Javeri" 
              hi="सलील जव्हेरी" 
              mr="सलील जव्हेरी" 
            />
            <LangText 
              en=". Content is available through subscription-based plans (Basic, Pro, Premium). Access is valid only with an active subscription." 
              hi=" द्वारा लिखित या क्यूरेट की गई ई-बुक्स और ऑडियोबुक्स तक पहुँच प्रदान करता है। सामग्री सदस्यता-आधारित योजनाओं (बेसिक, प्रो, प्रीमियम) के माध्यम से उपलब्ध है।" 
              mr=" द्वारे लिखित किंवा संपादित ई-बुक्स आणि ऑडिओबुक्सचा प्रवेश प्रदान करते. सामग्री सबस्क्रिप्शन प्लॅनद्वारे उपलब्ध आहे." 
            />
          </p>
        </div>

        {/* 3 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="3. Eligibility" 
              hi="3. पात्रता" 
              mr="3. पात्रता" 
            />
          </h2>
          <p>
            <LangText 
              en="Users must be at least 13 years old. Users under 18 must have parental or guardian consent. By using the platform, you confirm that you meet these requirements." 
              hi="उपयोगकर्ताओं की आयु कम से कम 13 वर्ष होनी चाहिए। 18 वर्ष से कम आयु के उपयोगकर्ताओं के पास माता-पिता या अभिभावक की सहमति होनी चाहिए।" 
              mr="वापरकर्ते किमान १३ वर्षांचे असणे आवश्यक आहे. १८ वर्षांपेक्षा कमी वयाच्या वापरकर्त्यांकडे पालकांची संमती असणे आवश्यक आहे." 
            />
          </p>
        </div>

        {/* 4 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="4. User Account" 
              hi="4. उपयोगकर्ता खाता" 
              mr="4. वापरकर्ता खाते" 
            />
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <LangText 
                en="You must provide accurate and current information." 
                hi="आपको सटीक और वर्तमान जानकारी प्रदान करनी होगी।" 
                mr="तुम्ही अचूक आणि अद्ययावत माहिती दिली पाहिजे." 
              />
            </li>
            <li>
              <LangText 
                en="You are responsible for your account credentials." 
                hi="आप अपने खाते के क्रेडेंशियल्स के लिए स्वयं जिम्मेदार हैं।" 
                mr="तुमच्या खात्याच्या माहितीसाठी तुम्ही स्वतः जबाबदार आहात." 
              />
            </li>
            <li>
              <LangText 
                en="Account sharing is strictly prohibited." 
                hi="खाता साझा करना सख्त वर्जित है।" 
                mr="खाते शेअर करण्यास सक्त मनाई आहे." 
              />
            </li>
            <li>
              <LangText 
                en="We may suspend accounts that violate these Terms." 
                hi="हम इन शर्तों का उल्लंघन करने वाले खातों को निलंबित कर सकते हैं।" 
                mr="आम्ही या अटींचे उल्लंघन करणारी खाती निलंबित करू शकतो." 
              />
            </li>
          </ul>
        </div>

        {/* 5 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="5. Subscription" 
              hi="5. सदस्यता (Subscription)" 
              mr="5. सबस्क्रिप्शन" 
            />
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <LangText 
                en="Subscriptions auto-renew monthly unless cancelled." 
                hi="रद्द न किए जाने तक सदस्यता हर महीने स्वतः नवीनीकृत होती है।" 
                mr="रद्द केल्याशिवाय सबस्क्रिप्शन दरमहा आपोआप नूतनीकरण होते." 
              />
            </li>
            <li>
              <LangText 
                en="Plan benefits are non-transferable." 
                hi="योजना के लाभ गैर-हस्तांतरणीय हैं।" 
                mr="प्लॅनचे फायदे दुसऱ्या कोणालाही हस्तांतरित करता येत नाहीत." 
              />
            </li>
            <li>
              <LangText 
                en="Access resets on each billing cycle." 
                hi="प्रत्येक बिलिंग चक्र पर पहुँच रीसेट हो जाती है।" 
                mr="प्रत्येक बिलिंग सायकलवर ॲक्सेस रीसेट होतो." 
              />
            </li>
          </ul>
        </div>

        {/* 6 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="6. Payment" 
              hi="6. भुगतान" 
              mr="6. पेमेंट" 
            />
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <LangText 
                en="All payments are securely processed via Razorpay." 
                hi="सभी भुगतान Razorpay के माध्यम से सुरक्षित रूप से संसाधित किए जाते हैं।" 
                mr="सर्व पेमेंट Razorpay द्वारे सुरक्षितपणे प्रोसेस केले जातात." 
              />
            </li>
            <li>
              <LangText 
                en="Prices include applicable taxes unless stated otherwise." 
                hi="जब तक अन्यथा न कहा गया हो, कीमतों में लागू कर शामिल हैं।" 
                mr="वेगळे नमूद केल्याशिवाय किमतींमध्ये लागू करांचा समावेश आहे." 
              />
            </li>
            <li>
              <LangText 
                en="We do not store card or bank details." 
                hi="हम कार्ड या बैंक विवरण संग्रहीत नहीं करते हैं।" 
                mr="आम्ही कार्ड किंवा बँक तपशील सेव्ह करत नाही." 
              />
            </li>
          </ul>
        </div>

        {/* 7 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="7. Cancellation & Refund" 
              hi="7. रद्दीकरण और रिफंड" 
              mr="7. रद्द करणे आणि परतावा (Refund)" 
            />
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <LangText 
                en="You can cancel anytime from account settings." 
                hi="आप खाता सेटिंग्स से किसी भी समय रद्द कर सकते हैं।" 
                mr="तुम्ही खाते सेटिंग्जमधून कधीही रद्द करू शकता." 
              />
            </li>
            <li>
              <LangText 
                en="Access continues until billing period ends." 
                hi="बिलिंग अवधि समाप्त होने तक पहुँच जारी रहती है।" 
                mr="बिलिंग कालावधी संपेपर्यंत ॲक्सेस चालू राहतो." 
              />
            </li>
            <li>
              <LangText 
                en="No refunds for partially used plans." 
                hi="आंशिक रूप से उपयोग की गई योजनाओं के लिए कोई रिफंड नहीं दिया जाएगा।" 
                mr="अंशतः वापरलेल्या प्लॅनसाठी कोणताही परतावा दिला जाणार नाही." 
              />
            </li>
            <li>
              <LangText 
                en="Technical refund requests reviewed within 7 days." 
                hi="तकनीकी रिफंड अनुरोधों की 7 दिनों के भीतर समीक्षा की जाएगी।" 
                mr="तांत्रिक परतावा विनंत्यांचे ७ दिवसांच्या आत पुनरावलोकन केले जाईल." 
              />
            </li>
          </ul>
        </div>

        {/* 8 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="8. Content Access & Restrictions" 
              hi="8. सामग्री पहुँच और प्रतिबंध" 
              mr="8. सामग्री ॲक्सेस आणि निर्बंध" 
            />
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <LangText 
                en="Content is licensed, not sold." 
                hi="सामग्री का लाइसेंस दिया जाता है, बेची नहीं जाती।" 
                mr="सामग्री परवानाकृत आहे, विकली जात नाही." 
              />
            </li>
            <li>
              <LangText 
                en="For personal, non-commercial use only." 
                hi="केवल व्यक्तिगत, गैर-व्यावसायिक उपयोग के लिए।" 
                mr="फक्त वैयक्तिक, बिगर-व्यावसायिक वापरासाठी." 
              />
            </li>
            <li>
              <LangText 
                en="No copying, sharing, or redistribution allowed." 
                hi="कोई प्रतिलिपि बनाने, साझा करने या पुनर्वितरण की अनुमति नहीं है।" 
                mr="कॉपी करणे, शेअर करणे किंवा पुन्हा वितरण करण्यास अनुमती नाही." 
              />
            </li>
            <li>
              <LangText 
                en="Offline access is device-restricted." 
                hi="ऑफलाइन पहुँच डिवाइस-प्रतिबंधित है।" 
                mr="ऑफलाईन ॲक्सेस डिव्हाईस-प्रतिबंधित आहे." 
              />
            </li>
          </ul>
        </div>

        {/* 9 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="9. Intellectual Property" 
              hi="9. बौद्धिक संपदा" 
              mr="9. बौद्धिक संपदा" 
            />
          </h2>
          <p>
            <LangText 
              en="All books, audio, graphics, logos, and platform design are the intellectual property of " 
              hi="सभी पुस्तकें, ऑडियो, ग्राफिक्स, लोगो और प्लेटफॉर्म डिजाइन " 
              mr="सर्व पुस्तके, ऑडिओ, ग्राफिक्स, लोगो आणि प्लॅटफॉर्म डिझाइन " 
            />
            <LangText 
              en="Salil Javeri" 
              hi="सलील जव्हेरी" 
              mr="सलील जव्हेरी" 
            />
            <LangText 
              en=". Unauthorized use is prohibited." 
              hi=" की बौद्धिक संपदा हैं। अनधिकृत उपयोग निषिद्ध है।" 
              mr=" यांची बौद्धिक संपदा आहे. अनधिकृत वापरास बंदी आहे." 
            />
          </p>
        </div>

        {/* 10 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="10. Prohibited Conduct" 
              hi="10. निषिद्ध आचरण" 
              mr="10. निषिद्ध वर्तणूक" 
            />
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <LangText 
                en="Sharing account credentials" 
                hi="खाते के क्रेडेंशियल्स साझा करना" 
                mr="खात्याचे तपशील शेअर करणे" 
              />
            </li>
            <li>
              <LangText 
                en="Bypassing platform security" 
                hi="प्लेटफॉर्म सुरक्षा को बायपास करना" 
                mr="प्लॅटफॉर्म सुरक्षेचे उल्लंघन करणे" 
              />
            </li>
            <li>
              <LangText 
                en="Using platform commercially" 
                hi="व्यावसायिक रूप से प्लेटफॉर्म का उपयोग करना" 
                mr="व्यावसायिकदृष्ट्या प्लॅटफॉर्म वापरणे" 
              />
            </li>
            <li>
              <LangText 
                en="Uploading harmful content" 
                hi="हानिकारक सामग्री अपलोड करना" 
                mr="हानिकारक सामग्री अपलोड करणे" 
              />
            </li>
            <li>
              <LangText 
                en="Reverse engineering the app" 
                hi="ऐप को रिवर्स इंजीनियर करना" 
                mr="ॲप रिव्हर्स इंजिनिअर करणे" 
              />
            </li>
          </ul>
        </div>

        {/* 11 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="11. Availability" 
              hi="11. उपलब्धता" 
              mr="11. उपलब्धता" 
            />
          </h2>
          <p>
            <LangText 
              en="We strive for uninterrupted service but do not guarantee it. Maintenance updates will be communicated when possible." 
              hi="हम निर्बाध सेवा का प्रयास करते हैं लेकिन इसकी गारंटी नहीं देते। रखरखाव अपडेट यथासंभव सूचित किए जाएंगे।" 
              mr="आम्ही खंडहीन सेवेचा प्रयत्न करतो परंतु त्याची हमी देत नाही. देखभाल अपडेट्स शक्य असल्यास कळवले जातील." 
            />
          </p>
        </div>

        {/* 12 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="12. Termination" 
              hi="12. समाप्ति" 
              mr="12. समाप्ती" 
            />
          </h2>
          <p>
            <LangText 
              en="We may suspend or terminate accounts that violate these Terms without prior notice." 
              hi="हम पूर्व सूचना के बिना इन शर्तों का उल्लंघन करने वाले खातों को निलंबित या समाप्त कर सकते हैं।" 
              mr="आम्ही पूर्वसूचनेशिवाय या अटींचे उल्लंघन करणारी खाती निलंबित किंवा समाप्त करू शकतो." 
            />
          </p>
        </div>

        {/* 13 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="13. Limitation of Liability" 
              hi="13. दायित्व की सीमा" 
              mr="13. उत्तरदायित्वाची मर्यादा" 
            />
          </h2>
          <p>
            <LangText 
              en='The platform is provided "as is." We are not liable for any indirect or consequential damages.' 
              hi='प्लेटफ़ॉर्म "जैसा है" वैसा ही प्रदान किया जाता है। हम किसी भी अप्रत्यक्ष या परिणामी नुकसान के लिए उत्तरदायी नहीं हैं।' 
              mr='प्लॅटफॉर्म "जसे आहे तसे" प्रदान केले जाते. आम्ही कोणत्याही अप्रत्यक्ष किंवा परिणामी नुकसानीसाठी जबाबदार नाही.' 
            />
          </p>
        </div>

        {/* 14 - Updated Governing Law */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="14. Governing Law" 
              hi="14. शासनकारी कानून" 
              mr="14. शासनकारी कायदे" 
            />
          </h2>
          <p>
            <LangText 
              en="These Terms are governed by Indian law. Jurisdiction lies in Mumbai, Maharashtra." 
              hi="ये शर्तें भारतीय कानून द्वारा शासित हैं। क्षेत्राधिकार मुंबई, महाराष्ट्र में है।" 
              mr="हे नियम भारतीय कायद्यानुसार संचलित आहेत. अधिकार क्षेत्र मुंबई, महाराष्ट्र येथे आहे." 
            />
          </p>
        </div>

        {/* 15 */}
        <div>
          <h2 className="mb-2 font-semibold">
            <LangText 
              en="15. Contact" 
              hi="15. संपर्क" 
              mr="15. संपर्क" 
            />
          </h2>
          <p>
            Email: saliljaveri27@gmail.com <br />
            Phone: 8329928955 <br />
            <LangText 
              en="Location: Mumbai, Maharashtra, India" 
              hi="स्थान: मुंबई, महाराष्ट्र, भारत" 
              mr="स्थान: मुंबई, महाराष्ट्र, भारत" 
            />
          </p>
        </div>

      </div>
    </section>
  );
};

export default TermsAndConditions;