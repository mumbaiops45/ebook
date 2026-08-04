"use client";
import { useEffect } from "react";
import LangText from "@/components/LangText";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-bold mb-2 text-[var(--primary)] text-3xl">
        <LangText
          en="Privacy Policy"
          hi="गोपनीयता नीति"
          mr="गोपनीयता धोरण"
        />
      </h1>

      <div className="mt-10 space-y-8 text-black/80 leading-relaxed">
        {/* 1 */}
        <div>
          <h2 className="mb-2 font-semibold text-lg">
            <LangText
              en="1. Introduction"
              hi="1. परिचय"
              mr="१. प्रस्तावना"
            />
          </h2>
          <p>
            <LangText
              en='Salil Javeri ("we," "our," "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and share your data when you use our website and mobile application.'
              hi='सलील जव्हेरी ("हम," "हमारा") आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट और मोबाइल एप्लिकेशन का उपयोग करते हैं तो हम आपका डेटा कैसे एकत्र, उपयोग, संग्रहीत और साझा करते हैं।'
              mr='सलिल जव्हेरी ("आम्ही," "आमचे") तुमची वैयक्तिक माहिती सुरक्षित ठेवण्यासाठी कटिबद्ध आहोत. तुम्ही आमची वेबसाइट आणि मोबाईल ॲप्लिकेशन वापरता तेव्हा आम्ही तुमचा डेटा कसा गोळा करतो, वापरतो, स्टोअर करतो आणि शेअर करतो हे हे गोपनीयता धोरण स्पष्ट करते.'
            />
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="mb-2 font-semibold text-lg">
            <LangText
              en="2. Information We Collect"
              hi="2. जानकारी जो हम एकत्र करते हैं"
              mr="२. आम्ही गोळा करत असलेली माहिती"
            />
          </h2>

          <p className="mb-2 font-medium">
            <LangText
              en="Personal Information:"
              hi="व्यक्तिगत जानकारी:"
              mr="वैयक्तिक माहिती:"
            />
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <LangText
                en="Name, email address, and phone number (at registration)"
                hi="नाम, ईमेल पता और फोन नंबर (पंजीकरण के समय)"
                mr="नाव, ईमेल पत्ता आणि फोन नंबर (नोंदणीच्या वेळी)"
              />
            </li>
            <li>
              <LangText
                en="Device information and IP address"
                hi="डिवाइस जानकारी और आईपी (IP) पता"
                mr="डिव्हाइस माहिती आणि IP पत्ता"
              />
            </li>
          </ul>

          <p className="mb-2 font-medium">
            <LangText
              en="Usage Data:"
              hi="उपयोग डेटा (Usage Data):"
              mr="वापर डेटा:"
            />
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <LangText
                en="Books read or listened to"
                hi="पढ़ी या सुनी गई किताबें"
                mr="वाचलेली किंवा ऐकलेली पुस्तके"
              />
            </li>
            <li>
              <LangText
                en="Reading and listening duration and progress"
                hi="पढ़ने और सुनने की अवधि तथा प्रगति"
                mr="वाचन आणि ऐकण्याचा कालावधी आणि प्रगती"
              />
            </li>
            <li>
              <LangText
                en="App interaction and feature usage"
                hi="ऐप इंटरैक्शन और सुविधाओं का उपयोग"
                mr="ॲप परस्परसंवाद आणि वैशिष्ट्यांचा वापर"
              />
            </li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="mb-2 font-semibold text-lg">
            <LangText
              en="3. How We Use Your Information"
              hi="3. हम आपकी जानकारी का उपयोग कैसे करते हैं"
              mr="३. आम्ही तुमची माहिती कशी वापरतो"
            />
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <LangText
                en="To create and manage your account"
                hi="आपका खाता बनाने और प्रबंधित करने के लिए"
                mr="तुमचे खाते तयार करण्यासाठी आणि व्यवस्थापित करण्यासाठी"
              />
            </li>
            <li>
              <LangText
                en="To process payments via Razorpay"
                hi="Razorpay के माध्यम से भुगतान संसाधित करने के लिए"
                mr="Razorpay द्वारे पेमेंट प्रक्रिया करण्यासाठी"
              />
            </li>
            <li>
              <LangText
                en="To deliver subscribed content"
                hi="सदस्यता ली गई सामग्री प्रदान करने के लिए"
                mr="सबस्क्राइब केलेली सामग्री प्रदान करण्यासाठी"
              />
            </li>
            <li>
              <LangText
                en="To send billing notifications and service updates"
                hi="बिलिंग सूचनाएं और सेवा अपडेट भेजने के लिए"
                mr="बिलिंग सूचना आणि सेवा अपडेट्स पाठवण्यासाठी"
              />
            </li>
            <li>
              <LangText
                en="To personalize book recommendations"
                hi="व्यक्तिगत पुस्तक सिफारिशें प्रदान करने के लिए"
                mr="वैयक्तिकृत पुस्तक शिफारसी देण्यासाठी"
              />
            </li>
            <li>
              <LangText
                en="To improve platform performance"
                hi="प्लेटफॉर्म के प्रदर्शन में सुधार करने के लिए"
                mr="प्लॅटफॉर्मची कार्यक्षमता सुधारण्यासाठी"
              />
            </li>
          </ul>
        </div>

        {/* 5 */}
        <div>
          <h2 className="mb-2 font-semibold text-lg">
            <LangText
              en="5. Data Sharing"
              hi="5. डेटा साझाकरण"
              mr="५. डेटा शेअरिंग"
            />
          </h2>
          <p className="mb-2">
            <LangText
              en="We do not sell or rent your personal data. We may share data with:"
              hi="हम आपका व्यक्तिगत डेटा बेचते या किराए पर नहीं देते हैं। हम निम्नलिखित के साथ डेटा साझा कर सकते हैं:"
              mr="आम्ही तुमचा वैयक्तिक डेटा विकत किंवा भाड्याने देत नाही. आम्ही खालील घटकांसह डेटा शेअर करू शकतो:"
            />
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <LangText
                en="Cloud hosting providers (for data storage)"
                hi="क्लाउड होस्टिंग प्रदाता (डेटा भंडारण के लिए)"
                mr="क्लाउड होस्टिंग प्रदाते (डेटा संचयनासाठी)"
              />
            </li>
            <li>
              <LangText
                en="Analytics tools (for usage insights, in anonymized form)"
                hi="एनालिटिक्स टूल्स (उपयोग की अंतर्दृष्टि के लिए, अज्ञात रूप में)"
                mr="ॲनालिटिक्स टूल्स (वापर अंतर्दृष्टीसाठी, अनामित रूपात)"
              />
            </li>
            <li>
              <LangText
                en="Legal authorities (if required by law)"
                hi="कानूनी प्राधिकरण (यदि कानून द्वारा आवश्यक हो)"
                mr="कायदेशीर अधिकारी (कायद्यानुसार आवश्यक असल्यास)"
              />
            </li>
          </ul>
        </div>

        {/* 6 */}
        <div>
          <h2 className="mb-2 font-semibold text-lg">
            <LangText
              en="6. Cookies"
              hi="6. कुकीज़"
              mr="६. कुकीज"
            />
          </h2>
          <p>
            <LangText
              en="Our website uses cookies for session management, analytics, and personalization. You can control cookies through your browser settings. Disabling cookies may affect platform functionality."
              hi="हमारी वेबसाइट सत्र प्रबंधन, विश्लेषण और वैयक्तिकरण के लिए कुकीज़ का उपयोग करती है। आप अपनी ब्राउज़र सेटिंग्स के माध्यम से कुकीज़ को नियंत्रित कर सकते हैं। कुकीज़ को अक्षम करने से प्लेटफॉर्म की कार्यक्षमता प्रभावित हो सकती है।"
              mr="आमची वेबसाइट सत्र व्यवस्थापन, विश्लेषण आणि वैयक्तिककरणासाठी कुकीज वापरते. तुम्ही तुमच्या ब्राउझर सेटिंग्जद्वारे कुकीज नियंत्रित करू शकता. कुकीज अक्षम केल्यास प्लॅटफॉर्मच्या कार्यावर परिणाम होऊ शकतो."
            />
          </p>
        </div>

        {/* 7 */}
        <div>
          <h2 className="mb-2 font-semibold text-lg">
            <LangText
              en="7. Data Retention"
              hi="7. डेटा प्रतिधारण (Data Retention)"
              mr="७. डेटा संधारण"
            />
          </h2>
          <p>
            <LangText
              en="We retain your account data for as long as your account is active. Upon account deletion, data is removed within 30 days, except where retention is required by law."
              hi="जब तक आपका खाता सक्रिय रहता है, हम आपका खाता डेटा बनाए रखते हैं। खाता हटाने पर, डेटा 30 दिनों के भीतर हटा दिया जाता है, सिवाय इसके जहां कानून द्वारा प्रतिधारण आवश्यक हो।"
              mr="तुमचे खाते सक्रिय असेपर्यंत आम्ही तुमचा खाते डेटा ठेवतो. खाते हटवल्यानंतर, कायद्यानुसार आवश्यक असलेल्या व्यतिरिक्त ३० दिवसांच्या आत डेटा हटवला जातो."
            />
          </p>
        </div>

        {/* 8 */}
        <div>
          <h2 className="mb-2 font-semibold text-lg">
            <LangText
              en="8. Your Rights"
              hi="8. आपके अधिकार"
              mr="८. तुमचे अधिकार"
            />
          </h2>
          <p className="mb-2">
            <LangText
              en="You have the right to:"
              hi="आपको निम्नलिखित अधिकार प्राप्त हैं:"
              mr="तुम्हाला खालील अधिकार आहेत:"
            />
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>
              <LangText
                en="Access the personal data we hold about you"
                hi="हमारे पास मौजूद आपके व्यक्तिगत डेटा तक पहुँच प्राप्त करना"
                mr="आमच्याकडे असलेला तुमचा वैयक्तिक डेटा पाहणे"
              />
            </li>
            <li>
              <LangText
                en="Request correction of inaccurate data"
                hi="गलत डेटा के सुधार का अनुरोध करना"
                mr="चुकीच्या डेटामध्ये दुरुस्तीची विनंती करणे"
              />
            </li>
            <li>
              <LangText
                en="Request deletion of your account and data"
                hi="अपने खाते और डेटा को हटाने का अनुरोध करना"
                mr="तुमचे खाते आणि डेटा हटवण्याची विनंती करणे"
              />
            </li>
            <li>
              <LangText
                en="Opt out of promotional communications"
                hi="प्रचारात्मक संचार (Promotional messages) से बाहर निकलना"
                mr="प्रचारात्मक संदेशांमधून बाहेर पडणे"
              />
            </li>
          </ul>
          <p>
            <LangText
              en="To exercise these rights, email: "
              hi="इन अधिकारों का उपयोग करने के लिए ईमेल करें: "
              mr="या अधिकारांचा वापर करण्यासाठी, ईमेल करा: "
            />
            <a href="mailto:info@saliljaveri.com" className="underline text-blue-600">
              info@saliljaveri.com
            </a>
          </p>
        </div>

        {/* 9 */}
        <div>
          <h2 className="mb-2 font-semibold text-lg">
            <LangText
              en="9. Data Security"
              hi="9. डेटा सुरक्षा"
              mr="९. डेटा सुरक्षा"
            />
          </h2>
          <p>
            <LangText
              en="We implement industry-standard security measures including SSL encryption. However, no method of transmission over the internet is 100% secure."
              hi="हम SSL एन्क्रिप्शन सहित उद्योग-मानक सुरक्षा उपायों को लागू करते हैं। हालांकि, इंटरनेट पर ट्रांसमिशन का कोई भी तरीका 100% सुरक्षित नहीं है।"
              mr="आम्ही SSL एनक्रिप्शनसह उद्योग-मानक सुरक्षा उपाय लागू करतो. तथापि, इंटरनेटवरील ट्रान्समिशनची कोणतीही पद्धत १००% सुरक्षित नसते."
            />
          </p>
        </div>

        {/* 10 */}
        <div>
          <h2 className="mb-2 font-semibold text-lg">
            <LangText
              en="10. Children's Privacy"
              hi="10. बच्चों की गोपनीयता"
              mr="१०. मुलांची गोपनीयता"
            />
          </h2>
          <p>
            <LangText
              en="The platform is not intended for children below 13 years of age. We do not knowingly collect data from children. If discovered, such data will be deleted immediately."
              hi="यह प्लेटफॉर्म 13 वर्ष से कम उम्र के बच्चों के लिए नहीं है। हम जानबूझकर बच्चों से डेटा एकत्र नहीं करते हैं। यदि ऐसा डेटा पाया जाता है, तो उसे तुरंत हटा दिया जाएगा।"
              mr="हे प्लॅटफॉर्म १३ वर्षांखालील मुलांसाठी नाही. आम्ही जाणूनबुजून मुलांकडून डेटा गोळा करत नाही. आढळल्यास असा डेटा त्वरित हटवला जाईल."
            />
          </p>
        </div>

        {/* 11 */}
        <div>
          <h2 className="mb-2 font-semibold text-lg">
            <LangText
              en="11. Changes to this Policy"
              hi="11. इस नीति में बदलाव"
              mr="११. या धोरणातील बदल"
            />
          </h2>
          <p>
            <LangText
              en="We may update this Privacy Policy periodically. Users will be notified of significant changes via email or in-app notification."
              hi="हम इस गोपनीयता नीति को समय-समय पर अपडेट कर सकते हैं। महत्वपूर्ण बदलावों के बारे में उपयोगकर्ताओं को ईमेल या ऐप के माध्यम से सूचित किया जाएगा।"
              mr="आम्ही हे गोपनीयता धोरण वेळोवेळी अपडेट करू शकतो. महत्त्वाच्या बदलांबद्दल वापरकर्त्यांना ईमेल किंवा ॲप-मधील सूचनेद्वारे सूचित केले जाईल."
            />
          </p>
        </div>

        {/* 12 */}
        <div>
          <h2 className="mb-2 font-semibold text-lg">
            <LangText
              en="12. Contact"
              hi="12. संपर्क"
              mr="१२. संपर्क"
            />
          </h2>
          <p>
            <LangText en="Email: " hi="ईमेल: " mr="ईमेल: " />
            <a href="mailto:saliljaveri27@gmail.com" className="underline text-blue-600">
              saliljaveri27@gmail.com
            </a>
            <br />
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

export default PrivacyPolicy;