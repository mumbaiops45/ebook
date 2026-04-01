"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const books = [
  {
    title: "Samanat",
    image: "/SAmanata3.png",
    price: 299,
    description: "A powerful book focused on social thoughts and equality.",
  },
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
              className="rounded-2xl p-10 flex flex-col hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="flex justify-center">
                 <div className="w-[50vw] h-[80vh] md:h-93 md:w-[22vw] relative mb-4">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover object-top rounded-xl"
                />
              </div>
              </div>

             
            <div className="md:max-w-[20vw]">
              <h3 className="text-xl font-semibold mb-1">
                {book.title}
              </h3>

              {/* Price */}
              <p className="text-[var(--primary)] font-semibold mb-2">
                ₹{book.price}
              </p>

              {/* Description */}
              <p className="text-gray-600  mb-4 flex-grow">
                {book.description}
              </p>

            </div>
              {/* Title */}
              
              {/* Button */}
              <Link
                href="#"
                className="primary-btn px-6 py-2 rounded-lg text-center mb-4"
              >
                Download the App
              </Link>
              {/* ✅ New Paragraph */}
            

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}