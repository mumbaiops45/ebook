"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About the Book", path: "/about" },
        { name: "Features", path: "/features" },
        { name: "Pricing", path: "/pricing" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-[color:var(--primary)]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Text Logo */}
                <div className="text-white font-bold text-xl tracking-wide">
                    SALIL JAVERI
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`transition duration-300 pb-1 ${
                                pathname === link.path
                                    ? "border-b-2 border-white text-white"
                                    : "text-white hover:opacity-80"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* CTA Button */}
                    <Link
                        href="/download"
                        className="bg-white text-[color:var(--primary)] px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
                    >
                        Download Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes size={22} className="text-white" /> : <FaBars size={22} className="text-white" />}
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
                            onClick={() => setIsOpen(false)}
                            className={`block pb-1 transition duration-300 ${
                                pathname === link.path
                                    ? "border-b-2 border-white text-white"
                                    : "text-white hover:opacity-80"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/download"
                        onClick={() => setIsOpen(false)}
                        className="block bg-white text-[color:var(--primary)] px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
                    >
                        Download Now
                    </Link>
                </div>
            )}
        </nav>
    );
}