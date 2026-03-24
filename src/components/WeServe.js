"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const books = [
  {
    title: "Samanata",
    image: "/samanata.png",
    price: 299,
    description: "A powerful book focused on social thoughts and equality.",
  },
];

// ✅ FIXED paths
const audioFiles = [
  "/Chapter 1.mp3",
  "/Chapter 2.mp3",
  "/Chapter 3.mp3",
  "/Chapter 4.mp3",
  "/Chapter 5.mp3", // fixed
  "/Chapter 6.mp3",
];

export default function WeServe() {
  const audioRef = useRef(null);

  const playAudio = (src) => {
    if (audioRef.current) {
      audioRef.current.src = src;
      audioRef.current.play();
    }
  };

  return (
    <section id="services" className="pt-16 px-6 md:px-15">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Hidden Audio Player */}
        <audio ref={audioRef} />

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold">
            What <span className="text-[var(--primary)]">We Offer</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex justify-center">
          {books.map((book, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 flex flex-col hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="w-full h-[70vh] md:h-110 relative mb-4">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-1">
                {book.title}
              </h3>

              {/* Price */}
              <p className="text-[var(--primary)] font-semibold mb-2">
                ₹{book.price}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {book.description}
              </p>

              {/* Button */}
              <Link
                href="#"
                className="primary-btn px-6 py-2 rounded-lg text-center mb-4"
              >
                Download the App
              </Link>
              {/* ✅ New Paragraph */}
              <p className="text-xl font-bold text-[var(--primery)] mb-3 text-center">
                Listen to sample chapters below to experience the audiobook.
              </p>

              {/* 🎧 Audio Grid */}
              <div className="grid grid-cols-6 gap-3">
                {audioFiles.map((audio, i) => (
                  <button
                    key={i}
                    onClick={() => playAudio(audio)}
                    className="w-full aspect-square rounded-lg flex items-center justify-center text-white font-semibold text-sm cursor-pointer"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}