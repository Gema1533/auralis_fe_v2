import React from "react";
import { motion } from "framer-motion";
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProductHero = () => (
  <section className="pt-32 pb-16 bg-[#111] text-center">
    <motion.div initial="hidden" animate="visible" variants={{ fadeIn }}>
      <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">
        Koleksi AURALIS
      </h1>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
        Setiap botol menyimpan sebuah cerita. Temukan aroma yang selaras dengan
        jiwa Anda.
      </p>
    </motion.div>
  </section>
);
export default ProductHero;
