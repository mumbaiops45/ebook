"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WeServe = () => {
  return (
    <section id="services" className="py-16 px-8 md:px-15 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-[var(--primary)]/30 before:to-transparent before:z-0">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
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
            after:to-transparent mb-4 w-fit"
          >
            What <span className="text-[var(--primary)]">We Offer</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">

          {/* Card 2 - Slide From Left */}
          <motion.div
          id="Book"
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-md rounded-xl"
          >
            <div className="rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg">

              <div className="md:w-1/4 relative min-h-[250px]">
                <Image
                  src="/book.png"
                  alt="Ebook"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 flex flex-col justify-center">

                <h3 className="font-semibold text-[var(--primary)] mb-4">
                  Physical Books, Feel Every Page
                </h3>

                <p className="text-black/70 mb-6 leading-relaxed">
                  Enjoy the charm of printed books and hold your favorite stories in your hands.
                </p>

                {/* <button className="w-fit px-6 py-3 primary-btn rounded-xl">
                  Explore
                </button> */}

              </div>

            </div>
          </motion.div>

          {/* Card 2 - Slide From Left */}
          <motion.div
          id="eBook"
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-md rounded-xl"
          >
            <div className="rounded-lg overflow-hidden flex flex-col md:flex-row-reverse shadow-lg">

              <div className="md:w-1/4 relative min-h-[250px]">
                <Image
                  src="/Ebook.png"
                  alt="Ebook"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 flex flex-col justify-center">

                <h3 className="font-semibold text-[var(--primary)] mb-4">
                  eBooks, Read Anywhere
                </h3>

                <p className="text-black/70 mb-6 leading-relaxed">
                  Explore digital books across many genres and enjoy a smooth reading experience on any device, anytime and anywhere.
                </p>

                {/* <button className="w-fit px-6 py-3 primary-btn rounded-xl">
                  Explore
                </button> */}

              </div>

            </div>
          </motion.div>


          {/* Card 3 - Slide From Right */}
          <motion.div
          id="audiobook"
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-md rounded-xl"
          >
            <div className="rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg">

              <div className="md:w-1/4 relative min-h-[250px]">
                <Image
                  src="/audio.png"
                  alt="audio"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 flex flex-col justify-center">

                <h3 className="text-[var(--primary)] mb-4">
                  Audiobooks, Listen Anytime
                </h3>

                <p className="text-black/70 mb-6 leading-relaxed">
                  Experience stories through clear, engaging narration and enjoy your favorite books while commuting, working, or relaxing anytime.
                </p>

                {/* <button className="w-fit px-6 py-3 primary-btn rounded-xl">
                  Explore
                </button> */}

              </div>

            </div>
          </motion.div>

           

        </div>

      </div>
    </section>
  );
};

export default WeServe;