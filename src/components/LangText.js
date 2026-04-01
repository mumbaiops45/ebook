"use client";
import { useState, useEffect } from "react";

export default function LangText({ en, mr, className, ...props }) {
  const [lang, setLang] = useState("en");

  const getCurrentLang = () => {
    const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    return match ? match[1] : "en";
  };

  useEffect(() => {
    setLang(getCurrentLang());

    const interval = setInterval(() => {
      setLang(getCurrentLang());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className} {...props}>
      {lang === "mr" ? mr : en}
    </span>
  );
}