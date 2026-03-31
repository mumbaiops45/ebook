"use client";
import { useEffect } from "react";

export default function GoogleTranslateScript() {
  useEffect(() => {
    if (!document.querySelector("#google-translate-script")) {
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
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  return null;
}