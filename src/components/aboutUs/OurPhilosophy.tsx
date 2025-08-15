import React from "react";
import { motion } from "framer-motion";
import { Droplets, Feather, Wind } from "lucide-react";

const OurPhilosophy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const pillars = [
    {
      icon: <Droplets size={32} />,
      title: "Kemurnian",
      desc: "Kami hanya menggunakan ekstrak bahan alami dengan kualitas tertinggi, dipanen secara etis dan berkelanjutan.",
    },
    {
      icon: <Feather size={32} />,
      title: "Keahlian",
      desc: "Setiap formula diracik oleh para 'master perfumer' dengan dedikasi dan keahlian yang diwariskan turun-temurun.",
    },
    {
      icon: <Wind size={32} />,
      title: "Emosi",
      desc: "Tujuan kami adalah menciptakan aroma yang mampu membangkitkan kenangan, menginspirasi mimpi, dan menyentuh jiwa.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ fadeIn }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-16">
            Filosofi Inti AURALIS
          </h2>
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
              className="flex flex-col items-center"
            >
              <div className="text-[#d4af37] mb-4">{pillar.icon}</div>
              <h3 className="text-2xl font-serif text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-400 max-w-xs">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
