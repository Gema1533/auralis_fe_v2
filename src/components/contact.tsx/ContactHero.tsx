import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section className="pt-32 pb-16 bg-[#111] text-center">
      <motion.div initial="hidden" animate="visible" variants={{ fadeIn }}>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">
          Hubungi Kami
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
          Kami siap membantu Anda. Kunjungi butik kami atau kirimkan pesan
          kepada kami.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
