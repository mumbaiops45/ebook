"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

    const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/#about" },
  { name: "Services", path: "/#services" },
  { name: "Features", path: "/#features" },
  { name: "Pricing", path: "/#pricing" },
  { name: "Testimonials", path: "/#testimonials" },
];

  const productLinks = [
    { name: "eBook", path: "/#eBook" },
    { name: "Audiobook", path: "#audiobook" },
  ];

  return (
    <footer className="bg-[var(--primary)] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Left Section - Logo + About */}
        <div>
          <div className="text-white font-bold text-xl tracking-wide mb-5">
            SALIL JAVERI
          </div>
          <p className="text-sm leading-7">
            SALIL JAVERI brings you a curated collection of eBooks and audiobooks for readers and learners everywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`transition duration-300 pb-1 ${
                    pathname === link.path
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
        <div>
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
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Contact Information
          </h3>

          <ul className="space-y-4">
            <li className="flex justify-start items-center gap-2">
              <MapPin size={22} className="text-white flex-shrink-0" /> Mysore, Karnataka, India
            </li>
            <li className="flex justify-start items-center gap-2">
              <Phone size={22} className="text-white flex-shrink-0" /> +91 12345 67890
            </li>
            <li className="flex justify-start items-center gap-2">
              <Mail size={22} className="text-white flex-shrink-0" /> info@saliljaveri.com
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="mt-12 flex items-center justify-start gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white hover:text-[var(--primary)] hover:bg-[var(--secondary)] transition duration-300">
              <Facebook size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white hover:text-[var(--primary)] hover:bg-[var(--secondary)] transition duration-300">
              <Twitter size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white hover:text-[var(--primary)] hover:bg-[var(--secondary)] transition duration-300">
              <Instagram size={22} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white hover:text-[var(--primary)] hover:bg-[var(--secondary)] transition duration-300">
              <Youtube size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-white/30">
        <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between text-sm text-white/70">
          <div>
            © {new Date().getFullYear()} SALIL JAVERI. All Rights Reserved.
          </div>
          <div>
            <Link href="/terms-and-conditions" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}