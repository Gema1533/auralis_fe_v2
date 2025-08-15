import React from 'react'
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="h-screen min-h-[700px] w-full relative flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-perfume-in-a-black-background-4443-large.mp4" type="video/mp4" />
        Browser Anda tidak mendukung tag video.
      </video>
      <div className="relative z-20 container mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-4"
        >
          Seni Keharuman Murni
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8"
        >
          Temukan aroma yang melampaui waktu, sebuah tanda tangan tak terlihat dari esensi diri Anda.
        </motion.p>
        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          href="/produk" 
          className="bg-[#d4af37] text-black font-bold py-3 px-10 rounded-full text-lg hover:bg-[#c09b2e] transition-all duration-300 transform hover:scale-105 inline-block shadow-lg shadow-yellow-500/20"
        >
          Jelajahi Koleksi
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection