import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/constans/public";

const CallToAction = () => {
  return (
    <section className="py-18 md:py-24 bg-[#111]">
      <div className="container mx-auto  text-center relative overflow-hidden">
        <img
          src="./img/banner/a5.jpg"
          className="absolute object-cover h-full w-full "
          alt=""
        />

        <motion.div
          initial="hidden"
          className="relative p-5 bg-black/50 w-full"
          whileInView="visible"
          variants={{ fadeIn }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Jadilah Bagian dari Kisah Kami
          </h2>
          <p className="text-white max-w-2xl mx-auto mb-8">
            Kisah Anda menunggu untuk ditulis. Temukan aroma yang akan
            menemaninya.
          </p>
          <a
            href="/produk"
            className="bg-[#d4af37] text-black font-bold py-3 px-10 rounded-full text-lg hover:bg-[#c09b2e] transition-all duration-300 transform hover:scale-105 inline-block shadow-lg shadow-yellow-500/20"
          >
            Jelajahi Koleksi
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
