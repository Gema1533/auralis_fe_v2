import React from "react";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <section className="py-24 bg-[#111]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1557175344-7e615f204e6d?q=80&w=2574&auto=format=fit=crop"
            alt="Bahan-bahan parfum AURALIS"
            className="rounded-lg w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#d4af37] mb-6">
            Perjalanan Kami
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            AURALIS lahir dari sebuah mimpi sederhana: menangkap esensi
            momen-momen tak terlupakan ke dalam sebuah botol. Perjalanan kami
            dimulai dari pencarian bahan-bahan paling murni di seluruh penjuru
            dunia, dari ladang mawar di Grasse hingga hutan cendana di Mysore.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Kami percaya bahwa parfum lebih dari sekadar wewangian; ia adalah
            perpanjangan dari identitas, sebuah tanda tangan tak kasat mata yang
            menceritakan siapa diri Anda tanpa perlu berkata-kata.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
