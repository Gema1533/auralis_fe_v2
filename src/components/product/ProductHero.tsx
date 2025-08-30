import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/constans/public";

const ProductHero = () => (
  <section className="pt-32 pb-16 bg-[#111] text-center">
    <motion.div
      initial="hidden"
      animate="visible"
      className=""
      variants={{ fadeIn }}
    >
      <div className="relative  overflow-hidden h-50 ">
        <img
          src="./img/bg/bgCollection.jpg"
          className="object-cover w-full h-full absolute "
          alt=""
        />
        <div className="relative z-10 bg-black/30 w-full h-full flex justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">
            Koleksi AURALIS
          </h1>
        </div>
      </div>

      <p className="text-lg text-gray-200 max-w-4xl mx-auto mt-4">
        Setiap botol menyimpan sebuah cerita. Temukan aroma yang selaras dengan
        jiwa Anda.
      </p>
    </motion.div>
  </section>
);
export default ProductHero;
