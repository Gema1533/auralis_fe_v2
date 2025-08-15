import React from "react";
import { motion } from 'framer-motion';


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TestimonialSection = () => {
  return (
    <section
      className="py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1587088155132-2975394831e3?q=80&w=2574&auto=format&fit=crop')",
      }}
    >
      <div className="container mx-auto px-6 text-center bg-black/60 backdrop-blur-sm py-20 rounded-lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{fadeIn}}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-white">
            Suara Pengguna <span className="text-[#d4af37]">AURALIS</span>
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{fadeIn}}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          <p className="text-5xl font-serif text-[#d4af37] absolute -top-4 -left-8 opacity-50">
            “
          </p>
          <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed">
            Aromanya benar-benar unik dan mewah. Setiap kali saya memakainya,
            saya merasa seperti versi terbaik dari diri saya. Tahan lama dan
            selalu mendapatkan pujian.
          </p>
          <div className="mt-8">
            <p className="font-semibold text-white text-lg">Jessica L.</p>
            <p className="text-gray-400">Pecinta Golden Elixir</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
