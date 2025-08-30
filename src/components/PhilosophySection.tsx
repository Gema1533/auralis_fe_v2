import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/constans/public";

const PhilosophySection = () => {
  const pillars = [
    {
      title: "Bahan Terbaik",
      img: "./img/banner/a1.jpg",
      desc: "Dipilih dari sumber paling murni di seluruh dunia.",
    },
    {
      title: "Peracik Ahli",
      img: "./img/banner/a2.jpg",
      desc: "Diciptakan oleh para 'hidung' legendaris dalam industri.",
    },
    {
      title: "Desain Abadi",
      img: "./img/banner/a3.jpg",
      desc: "Setiap botol adalah karya seni yang elegan dan tak lekang oleh waktu.",
    },
  ];

  return (
    <section className="py-18 md:py-24 bg-[#111]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ fadeIn }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#d4af37]">
            Filosofi Kami
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-16">
            Tiga pilar yang mendefinisikan setiap mahakarya AURALIS.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="relative"
              viewport={{ once: true }}
            >
              <img
                src={pillar.img}
                alt=""
                className="absolute w-full h-full object-cover blur-[px] z-0"
              />
              <div className="relative bg-black/50 h-full z-20 flex flex-col justify-center p-2">
                <h3 className="text-2xl font-serif  text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-white">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PhilosophySection;
