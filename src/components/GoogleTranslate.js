"use client"; // because we'll use useEffect

import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en", // your default language
          includedLanguages: "en,mr", // English + Marathi
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element" style={{ margin: "10px 0" }}></div>;
}