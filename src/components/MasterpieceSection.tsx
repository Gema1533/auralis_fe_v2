import React from "react";
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";

const MasterpieceSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="https://placehold.co/500x700/0c0c0c/d4af37?text=AURA+NOIR"
            alt="Botol AURA NOIR"
            className="max-w-sm w-full drop-shadow-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <p className="text-[#d4af37] font-semibold mb-2">
            Mahakarya Unggulan
          </p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white">
            AURA NOIR
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed max-w-lg">
            Sebuah komposisi adiktif dari Kopi Hitam, Bunga Putih, dan Vanila.
            Aroma yang membangkitkan energi, sensualitas, dan misteri malam yang
            tak terlupakan.
          </p>
          <a
            href="/produk/aura-noir"
            className="border border-[#d4af37] text-[#d4af37] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#d4af37] hover:text-black transition-colors duration-300 group inline-flex items-center"
          >
            Selami Aromanya
            <ArrowRight
              className="ml-2 transition-transform group-hover:translate-x-1"
              size={20}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MasterpieceSection;
