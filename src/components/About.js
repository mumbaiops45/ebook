import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative py-10 px-15 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-l before:from-[var(--primary)]/50 before:to-transparent before:z-0">
      
      <div className="relative z-10 grid max-w-screen-xl px-4 mx-auto lg:gap-12 lg:grid-cols-12 items-center">

        {/* Text Content */}
        <div className="lg:col-span-7">

          {/* Tag */}
          <span className="w-fit px-4 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)]/20 uppercase tracking-wider mb-3 block">
            About Us
          </span>

          <h2 className="text-[var(--primary)] font-bold max-w-2xl mb-4">
            Read It. Hear It. Experience It.
          </h2>

          <p className="max-w-2xl mb-6">
            Stories are meant to be experienced in different ways. Through
            engaging eBooks, readers can dive into powerful narratives,
            memorable characters, and meaningful ideas anytime, anywhere.
          </p>

          <p className="max-w-2xl mb-8">
            For those who prefer listening, the same stories come alive
            through immersive Audiobooks, bringing every moment to life
            with voice and emotion—so the story stays with you wherever
            you go.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="primary-btn px-6 py-3 rounded-lg">
              Read It
            </button>

            <button className="secondary-btn !border-2 !border-[var(--primary)] px-6 py-3 rounded-lg">
              Hear It
            </button>
          </div>

        </div>

        {/* Image */}
        <div className="lg:col-span-5 mt-10 lg:mt-0 flex justify-center">
          <Image
            src="/AboutSection.png"
            alt="ebook publishing"
            width={500}
            height={400}
            className="max-w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;