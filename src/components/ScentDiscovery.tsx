
import React from 'react'   
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ScentDiscovery = () => {
  const categories = [
    { name: "Floral & Fruity", desc: "Keanggunan aroma bunga dan buah segar.", image: "https://images.unsplash.com/photo-1594035932234-05889031a559?q=80&w=2574&auto=format&fit=crop" },
    { name: "Woody & Spiced", desc: "Kehangatan rempah dan kekayaan aroma kayu.", image: "https://images.unsplash.com/photo-1617290232293-13778b02a933?q=80&w=2574&auto=format&fit=crop" },
    { name: "Oud & Oriental", desc: "Kemewahan eksotis dari aroma timur yang dalam.", image: "https://images.unsplash.com/photo-1557175344-7e615f204e6d?q=80&w=2574&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-[#111]">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" variants={{fadeIn}} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-[#d4af37]">Temukan Karakter Anda</h2>
          <p className="text-center max-w-2xl mx-auto mb-16 text-gray-400">Setiap koleksi kami memiliki cerita unik. Manakah yang akan menjadi milik Anda?</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden group h-96 cursor-pointer"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-3xl font-serif mb-2">{cat.name}</h3>
                <p className="text-gray-300 opacity-0 max-w-xs transition-all duration-500 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScentDiscovery