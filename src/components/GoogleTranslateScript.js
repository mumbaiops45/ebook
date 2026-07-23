"use client";
import { useEffect } from "react";

export default function GoogleTranslateScript() {
  useEffect(() => {
    // 1. Define the callback function on window first
    window.initGoogleTranslate = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi", // ✅ English and Hindi only
          },
          "google_translate_element"
        );
      }
    };

    // 2. If Google Translate is already loaded in memory, call initialization directly
    if (window.google?.translate?.TranslateElement) {
      window.initGoogleTranslate();
      return;
    }

    // 3. Otherwise, inject the script if it doesn't already exist
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=initGoogleTranslate";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return null;
}