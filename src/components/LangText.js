"use client";
import { useEffect, useState } from "react";

export default function LangText({ en, hi, mr, className = "" }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const getCurrentLang = () => {
      const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
      return match ? match[1] : "en";
    };

    setLang(getCurrentLang());

    const interval = setInterval(() => {
      setLang(getCurrentLang());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // ✅ Check for Hindi
  if (lang === "hi" && hi) {
    return <span className={`notranslate ${className}`}>{hi}</span>;
  }

  // ✅ Check for Marathi
  if (lang === "mr" && mr) {
    return <span className={`notranslate ${className}`}>{mr}</span>;
  }

  // Default to English
  return <span className={className}>{en}</span>;
}