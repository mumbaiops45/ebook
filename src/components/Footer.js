"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import LangText from "./LangText";

export default function Footer() {
  const pathname = usePathname();
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

  const navLinks = [
    { name: <LangText en="Home" mr="मुख पृष्ठ" />, path: "/" },
    { name: "About Us", path: "/#about" },
    { name: <LangText en="What We Offer" mr="आम्ही काय देऊ शकतो" className="notranslate" />, path: "/#services" },
    { name: "Books", path: "/#Books" },
    { name: "Testimonials", path: "/#testimonials" },
    { name: "FAQ", path: "/#faq" },
  ];

  const productLinks = [
    { name: "Book", path: "#" },
    { name: "eBook", path: "/#eBook" },
    { name: "Audiobook", path: "#audiobook" },
  ];

  return (
    <footer className="bg-[var(--primary)] text-white text-[13px]">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Left Section - Logo + About */}
        <div>
          <div
            className="text-white font-bold text-xl tracking-wide mb-5 notranslate"
            translate="no"
          >
            {lang === "mr" ? "सलील जव्हेरी" : "SALIL JAVERI"}
          </div>
          <p className="text-sm leading-7">
            <LangText en="SALIL JAVERI" mr="सलील जव्हेरी" />  writes stories that explore human emotions, personal growth, and the journey of self-discovery.
          </p>
         <a
  href="https://play.google.com/store/apps/details?id=com.saliljaveri&hl=en_IN"
  target="_blank"
  rel="noopener noreferrer"
  className="w-fit mt-6 block bg-white text-[color:var(--primary)] px-10 py-2 rounded-md font-semibold hover:opacity-90 transition"
>
  Download the App
</a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            <LangText en="Quick Links" mr="द्रुत लिंक" />
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link,index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`transition duration-300 pb-1 ${pathname === link.path
                      ? "border-b-2 border-white text-white"
                      : "hover:opacity-80"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products / eBook Section */}
        {/* <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Our Products
          </h3>
          <ul className="space-y-3">
            {productLinks.map((product) => (
              <li key={product.name}>
                <Link
                  href={product.path}
                  className={`transition duration-300 pb-1 ${
                    pathname === product.path
                      ? "border-b-2 border-white text-white"
                      : "hover:opacity-80"
                  }`}
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Contact Information */}
        {/* Contact Information */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Contact Information
          </h3>

          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <MapPin size={22} className="text-white flex-shrink-0" />
              Mumbai, Maharashtra, India
            </li>

            {/* ✅ Clickable Phone */}
            <li className="flex items-center gap-2">
              <Phone size={22} className="text-white flex-shrink-0" />
              <a
                href="tel:+918329928955"
                className="hover:underline hover:text-gray-200"
              >
                +91 8329928955
              </a>
            </li>

            {/* ✅ Clickable Email */}
            <li className="flex items-center gap-2">
              <Mail size={22} className="text-white flex-shrink-0" />
              <a
                href="mailto:saliljaveri27@gmail.com"
                className="hover:underline hover:text-gray-200"
              >
                saliljaveri27@gmail.com
              </a>
            </li>
          </ul>

          {/* Social Media Links */}

        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-white/30">
        <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between text-sm text-white/70">
          <div className="notranslate" translate="no">
            © {new Date().getFullYear()} {lang === "mr" ? "सलील जव्हेरी" : "SALIL JAVERI"}.
          </div>
          <div className="flex gap-3">
            <Link scroll={false} href="/terms-and-conditions" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link scroll={false} href="privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}