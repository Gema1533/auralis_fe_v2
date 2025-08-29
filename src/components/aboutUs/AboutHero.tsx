import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section
      className="relative h-[40vh] md:h-[70vh] overflow-hidden flex items-center justify-center text-center"
      // style={{
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1595534005229-4a0f34b30173?q=80&w=2574&auto=format=fit=crop')",
      // }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full "
      >
        <source src="./videos/banner1.webm" type="video/mp4" />
        Browser Anda tidak mendukung tag video.
      </video>
      <div className="absolute inset-0 h-f bg-black/60"></div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif text-white"
        >
          Kisah di Balik Setiap Aroma
        </motion.h1>
      </div>
    </section>
  );
};

export default AboutHero;
