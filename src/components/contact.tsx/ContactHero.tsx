import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/pages";

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 bg-[#111] text-center">
      <motion.div initial="hidden" animate="visible" variants={{ fadeIn }}>
        <div className="relative  overflow-hidden h-50 ">
          <img
            src="./img/bg/bgcontact.jpg"
            className="object-cover w-full h-full md:h-auto md:-top-40 absolute "
            alt=""
          />
          <div className="relative z-10 bg-black/30 w-full h-full flex justify-center items-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">
              Hubungi Kami
            </h1>
          </div>
        </div>

        <p className="text-lg text-gray-200 max-w-2xl mx-auto mt-4">
          Kami siap membantu Anda. Kunjungi butik kami atau kirimkan pesan
          kepada kami.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
