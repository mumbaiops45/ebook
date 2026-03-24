"use client";

import Link from "next/link";
import Image from "next/image";

const books = [
  {
    title: "Samanata",
    image: "/samanata.png",
    price: 299,
    description: "A powerful book focused on social thoughts and equality.",
  },
  
];

export default function WeServe() {
  return (
    <section id="services" className="pt-16 px-6 md:px-15">
      <div className="max-w-screen-xl mx-auto px-4">

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
              className="rounded-2xl p-4 flex flex-col  hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="w-full h-[70vh] md:h-75 relative mb-4">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-fit rounded-xl"
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

              {/* Button (WORKING) */}
              <Link
                href="#"
                className="primary-btn px-6 py-2 rounded-lg text-center"
              >
                Download the App
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}