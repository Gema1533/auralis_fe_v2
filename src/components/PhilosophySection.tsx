import React from "react";
import { motion } from "framer-motion";

const PhilosophySection = () => {
  const pillars = [
    {
      title: "Bahan Terbaik",
      desc: "Dipilih dari sumber paling murni di seluruh dunia.",
    },
    {
      title: "Peracik Ahli",
      desc: "Diciptakan oleh para 'hidung' legendaris dalam industri.",
    },
    {
      title: "Desain Abadi",
      desc: "Setiap botol adalah karya seni yang elegan dan tak lekang oleh waktu.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };
  return (
    <section className="py-24 bg-[#111]">
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
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-400">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PhilosophySection;
