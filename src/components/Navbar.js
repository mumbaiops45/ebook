"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" },
    { name: "What We Offer", path: "/#services" },
    { name: "Books", path: "/#Books" },
    { name: "Features", path: "/#features" },
    { name: "Pricing", path: "/#pricing" },
    { name: "Testimonials", path: "/#testimonials" },
  ];

  // detect current hash
  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash || "#home");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <div className="text-white font-bold text-xl tracking-wide">
            SALIL JAVERI
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setActive(link.path)}
              className={`transition duration-300 pb-1 ${active === link.path
                  ? "border-b-2 border-white text-white"
                  : "text-white hover:opacity-80"
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="#"
            className="bg-white text-[color:var(--primary)] px-4 py-2 rounded-md font-semibold hover:opacity-90 transition cursor-pointer"
          >
            Download the App
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => {
                setActive(link.path);
                setIsOpen(false);
              }}
              className={`block pb-1 transition duration-300 ${active === link.path
                  ? "border-b-2 border-white text-white"
                  : "text-white hover:opacity-80"
                }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="block w-fit bg-white text-[color:var(--primary)] px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            Download the App
          </Link>
        </div>
      )}
    </nav>
  );
}