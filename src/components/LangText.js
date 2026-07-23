"use client";
import { useEffect, useState } from "react";

export default function LangText({ en, hi, className = "" }) {
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

  if (lang === "hi" && hi) {
    return <span className={`notranslate ${className}`}>{hi}</span>;
  }

  return <span className={className}>{en}</span>;
}