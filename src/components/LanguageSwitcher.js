"use client";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    if (document.querySelector("#google-translate-script")) {
      setScriptLoaded(true);
      return;
    }

    // Load Google Translate script
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=initGoogleTranslate";
    script.async = true;
    document.body.appendChild(script);

    window.initGoogleTranslate = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,mr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
      setScriptLoaded(true);
    };
  }, []);

  const changeLanguage = (langCode) => {
    // Method 1: Try to find the Google Translate select dropdown
    const tryChange = (retries = 0) => {
      const select = document.querySelector(".goog-te-combo");
      if (select && select.options.length > 0) {
        select.value = langCode;
        // Trigger both 'change' and 'click' events to ensure translation
        select.dispatchEvent(new Event("change", { bubbles: true }));
        select.dispatchEvent(new Event("click", { bubbles: true }));
        console.log(`Language changed to ${langCode}`);
      } else if (retries < 10) {
        // Retry every 500ms up to 5 seconds
        setTimeout(() => tryChange(retries + 1), 500);
      } else {
        console.warn("Google Translate select not found. Using fallback.");
        // Method 2: Fallback - set cookie and reload
        document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
        window.location.reload();
      }
    };
    tryChange();
  };

  return (
    <div className="relative">
      {/* Google Translate container - hidden but functional */}
      <div
        id="google_translate_element"
        style={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          visibility: "hidden",
          height: 0,
          overflow: "hidden",
        }}
      ></div>

      {/* Custom dropdown */}
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-white/10 text-white border border-white/30 rounded-md px-3 py-1 text-sm cursor-pointer hover:bg-white/20 transition"
        defaultValue=""
      >
        <option value="" disabled>Language</option>
        <option value="en">English</option>
        <option value="mr">मराठी (Marathi)</option>
      </select>
    </div>
  );
}