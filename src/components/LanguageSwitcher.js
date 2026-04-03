"use client";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

useEffect(() => {
  const domain = window.location.hostname;

  // ✅ Default English only first time
  if (!document.cookie.includes("googtrans")) {
    document.cookie = `googtrans=/en/en; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/en; path=/`;
  }

  // Check if script already exists
  if (document.querySelector("#google-translate-script")) {
    setScriptLoaded(true);
    return;
  }

  // Load Google Translate script
  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.src =
    "//translate.google.com/translate_a/element.js?cb=initGoogleTranslate";
  script.async = true;
  document.body.appendChild(script);

  window.initGoogleTranslate = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,mr",
        layout:
          window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
    setScriptLoaded(true);
  };
}, []);

const changeLanguage = (langCode) => {
  const domain = window.location.hostname;

  document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
  document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `app_lang=${langCode}; path=/`;

  window.location.reload();
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
        <option className="text-black hidden" value="" disabled>Language</option>
        <option className="text-black" value="en">English</option>
        <option className="text-black" value="mr">मराठी (Marathi)</option>
      </select>
    </div>
  );
}