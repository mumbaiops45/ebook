import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const books = [
  {
    title: "The Silent Journey",
    image: "/cover1.avif",
    rating: 4.7,
  },
  {
    title: "Echoes of Truth",
    image: "/Echoes of Truth1.png",
    rating: 4.6,
  },
  {
    title: "Beyond the Horizon",
    image: "/coverimage3.avif",
    rating: 4.4,
  },
];

const FeaturedBooks = () => {
  return (
    <section className="py-16 px-8 md:px-15">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="w-fit mx-auto px-4 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)]/20 uppercase tracking-wider block mb-3">
            Featured Books
          </span>

          <h2
            className="relative inline-block pb-2
            after:content-['']
            after:absolute
            after:left-0
            after:bottom-0
            after:w-full
            after:h-1
            after:rounded-full
            after:bg-gradient-to-r
            after:from-[var(--primary)]
            after:to-transparent mb-4
            w-fit"
          >
            Discover
            <span className="text-[var(--primary)]"> the Stories </span>
          </h2>

          <p className="max-w-2xl mx-auto">
            Explore a collection of powerful stories available in both
            eBook and Audiobook formats.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {books.map((book, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-[var(--primary)]/10 to-transparent p-6 rounded-xl text-center transition-all duration-300 hover:scale-102 hover:from-[var(--primary)]/15"
            >
              <Image
                src={book.image}
                alt={book.title}
                width={250}
                height={350}
                className="mx-auto mb-4 transition-transform duration-300 hover:scale-105"
              />

              <h3 className="mb-2 font-semibold">{book.title}</h3>

              {/* ⭐ Rating */}
  <div className="flex justify-center items-center gap-1 text-yellow-400 text-sm mb-3">
  {[...Array(5)].map((_, i) => (
    <FaStar key={i} />
  ))}
  <span className="text-gray-500 ml-1">{book.rating}</span>
</div>

              <div className="flex justify-center gap-3 mt-2">
                <button className="primary-btn px-6 py-2 rounded-md cursor-pointer">
                  Read on the App
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="border-l-4 py-3 border-[var(--primary)] pl-4">
            <p className="text-lg font-medium">
              Explore our growing collection of engaging eBooks and audiobooks.
            </p>
          </div>

         
            <button href="#" className="primary-btn px-8 py-3 rounded-lg whitespace-nowrap cursor-pointer">
              Download the App
            </button>
          

        </div>

      </div>
    </section>
  );
};

export default FeaturedBooks;