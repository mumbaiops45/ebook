"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <section
      id="about"
      className="relative py-10 px-6 md:px-15 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-l before:from-[var(--primary)]/30 before:to-transparent before:z-0"
    >
      <div className="relative z-10 grid max-w-screen-xl px-4 mx-auto lg:gap-12 lg:grid-cols-12 items-center">

        {/* Text Content */}
        <div className="lg:col-span-7">
        <span className="text-[13px] w-fit px-4 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)]/20 uppercase tracking-wider mb-3 block">
            About Us
          </span>

          <h2 className="text-[var(--primary)] font-bold max-w-2xl mb-4">
            About The Author
          </h2>

          <p className="max-w-2xl mb-6">
            Salil Javeri writes stories that explore human emotions, personal growth, and the journey of self-discovery.
          </p>

          <p className="flex gap-2">
            <FaQuoteLeft className="text-[var(--primary)]" />
            Sometimes the quietest moments reveal the loudest truths.
            <FaQuoteRight className="text-[var(--primary)]" />
          </p>
        </div>

        {/* 🔥 Image Grid (2 Columns) */}
        <div
          className="lg:col-span-5 mt-10 lg:mt-0"
          ref={ref}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            className="grid  md:grid-cols-2 grid-cols-1 gap-4"
          >
            {/* Column 1 */}
            <div className="">
              <Image
                src="/writter1.png"
                alt="author image 1"
                width={300}
                height={200}
                className=" h-[55vh] w-full object-fit"
              />
              
            </div>

            {/* Column 2 */}
            <div className="">
              <Image
                src="/writter2.png"
                alt="author image 3"
                width={300}
                height={200}
                className=" h-[55vh] w-full object-fit"
              />
             
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;