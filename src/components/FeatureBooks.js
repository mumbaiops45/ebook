import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const books = [
  {
    title: "Samanata",
    image: "/samanata.png",
    rating: 4.7,
    pdf: "/index.pdf",
    description: "Right now our Samanta – Samajik Vicharanchi book  is published in Marathi languages and in the very near future our ebooks and audio books will be published in English, Hindi, and other regional languages too.",
  },
  
];

const FeaturedBooks = () => {
  return (
    <section id="Books" className="py-16 px-6 md:px-15">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center text-[13px] mb-12">
          <span className="w-fit mx-auto px-4 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)]/20 uppercase tracking-wider block mb-3">
            Featured Books
          </span>

          <h2 className="relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:rounded-full after:bg-gradient-to-r after:from-[var(--primary)] after:to-transparent mb-4 w-fit">
            Discover
            <span className="text-[var(--primary)]"> the Stories </span>
          </h2>

          <p className="max-w-2xl mx-auto">
            Explore a collection of powerful stories available in both
            eBook and Audiobook formats.
          </p>
        </div>

       {/* Books Grid */}
<div className="flex justify-center">
  <div className="flex flex-wrap justify-center gap-10 max-w-4xl">
    {books.map((book, index) => (
      <div
        key={index}
        className="w-full sm:w-[330px] relative bg-gradient-to-b from-[var(--primary)]/10 to-transparent p-6 rounded-xl transition-all duration-300 hover:scale-102 hover:from-[var(--primary)]/15"
      >
        <Image
          src={book.image}
          alt={book.title}
          width={250}
          height={350}
          className="mx-auto mb-4 transition-transform duration-300 hover:scale-105"
        />

        <h3 className="mb-2 text-center font-semibold">{book.title}</h3>

        <p className=" text-gray-600 mb-3 px-2 ">
          {book.description}
        </p>

        {/* ⭐ Rating */}
        <div className="flex justify-center items-center gap-1 text-yellow-400 text-sm mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-500 ml-1">{book.rating}</span>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-2">
          <a
            href={book.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn px-6 py-2 rounded-md cursor-pointer inline-block"
          >
            Preview Book
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Explore Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="border-l-4 py-3 border-[var(--primary)] pl-4">
            <p className="font-medium">
              Explore our growing collection of engaging eBooks and audiobooks.
            </p>
          </div>

          <Link href="#">
            <button className="primary-btn px-8 py-3 rounded-lg">
              Download the App
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedBooks;