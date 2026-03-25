"use client"
import Image from "next/image";
import { useState , useEffect } from "react";
const slides = [
{
id: 1,
image: "/npm install framer-motion.jpg",
tag: "Read Anywhere",
title: "Discover Your Next Favorite eBook",
description:
"Dive into a world of knowledge and stories with our curated eBooks, available anytime, anywhere.",
button: "Download the App",
},
{
id: 2,
image: "/book3.jpg",
tag: "Listen On-The-Go",
title: "Audiobooks for Busy Lifestyles",
description:
"Enjoy professionally narrated audiobooks while commuting, exercising, or relaxing at home.",
button: "Download the App",
},
{
id: 3,
image: "/book4.jpg",
tag: "Curated Collections",
title: "Handpicked eBooks for Every Reader",  
description:
"From fiction to self-help, find eBooks selected by experts to expand your knowledge and entertain.",
button: "Download the App",
},
{
id: 4,
image: "/book3.avif",
tag: "Premium Audio",
title: "Engaging Stories in Audio Format",
description:
"High-quality audiobooks narrated by professional voice artists for a rich listening experience.",
button: "Download the App",
},
];

const Hero = () => {
     const [current, setCurrent] = useState(0);
    
         // Auto Slide
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <section className="relative w-full  h-[60vh] md:h-[64vh] xl:h-[500px] overflow-hidden">

        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (

            <div
              key={slide.id}
              className="w-full flex-shrink-0 relative h-full"
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center px-6 md:px-16">
                <div className="max-w-xl text-white">

                  <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-[13px]">
                    {slide.tag}
                  </span>

                  <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-base md:text-md text-gray-200">
                    {slide.description}
                  </p>

                  <button href="#" className="mt-6 primary-btn px-6 py-3 rounded-xl cursor-pointer">
                    {slide.button}
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 cursor-pointer rounded-full bg-white ${current === index
                ? "w-8 h-2"
                : "w-2 h-2 opacity-60"
                }`}
            ></div>
          ))}
        </div>
      </section>
  )
}

export default Hero