"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import LangText from "./LangText";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [lang, setLang] = useState("en");

  const navLinks = [
    {
      name: <LangText en="Home" hi="होम" mr="मुख पृष्ठ" />,
      path: "/",
    },
    {
      name: <LangText en="About Us" hi="हमारे बारे में" mr="आमच्याबद्दल" />,
      path: "/#about",
    },
    {
      name: (
        <LangText
          en="What We Offer"
          hi="हम क्या प्रदान करते हैं"
          mr="आम्ही काय देऊ शकतो"
          className="notranslate"
        />
      ),
      path: "/#services",
    },
    {
      name: (
        <LangText
          en="Books"
          hi="पुस्तकें"
          mr="पुस्तके"
          className="notranslate"
        />
      ),
      path: "/#Books",
    },
    {
      name: <LangText en="Our Gallery" hi="हमारी गैलरी" mr="गॅलरी" />,
      path: "/our-gallery",
    },
    {
      name: (
        <LangText
          en="FAQ"
          hi="सामान्य प्रश्न"
          mr="वारंवार विचारले जाणारे प्रश्न"
        />
      ),
      path: "/#faq",
    },
  ];

  const getCurrentLang = () => {
    const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    return match ? match[1] : "en";
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash || "#home");
    };

    handleHashChange();
    setLang(getCurrentLang());

    const interval = setInterval(() => {
      setLang(getCurrentLang());
    }, 500);

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <nav className="text-[13px] sticky top-0 z-[999] bg-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo dynamic text */}
        <Link href="/">
          <div
            className="text-white font-bold text-xl tracking-wide notranslate"
            translate="no"
          >
            {lang === "hi" || lang === "mr" ? "सलील जव्हेरी" : "SALIL JAVERI"}
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={() => setActive(link.path)}
              className={`transition duration-300 pb-1 ${
                active === link.path
                  ? "border-b-2 border-white text-white"
                  : "text-white hover:opacity-80"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Custom language dropdown */}
          <LanguageSwitcher />

          {/* Download App CTA */}
          <a
            href="https://play.google.com/store/apps/details?id=com.saliljaveri&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[color:var(--primary)] px-4 py-2 rounded-md font-semibold hover:opacity-90 transition cursor-pointer"
          >
            <LangText en="Download the App" hi="ऐप डाउनलोड करें" mr="ॲप डाउनलोड करा" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex gap-4">
          <LanguageSwitcher />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes size={22} className="text-white" />
            ) : (
              <FaBars size={22} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-4 bg-[color:var(--primary)]">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={() => {
                setActive(link.path);
                setIsOpen(false);
              }}
              className={`block pb-1 transition duration-300 ${
                active === link.path
                  ? "inline-block border-b-2 border-white text-white"
                  : "text-white hover:opacity-80"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://play.google.com/store/apps/details?id=com.saliljaveri&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block w-fit bg-white text-[color:var(--primary)] px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            <LangText en="Download the App" hi="ऐप डाउनलोड करें" mr="ॲप डाउनलोड करा" />
          </a>
        </div>
      )}
    </nav>
  );
}