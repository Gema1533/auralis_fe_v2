import React from 'react'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ArtOfPerfumery = () => {
    return (
        <section className="py-18 md:py-24">
            <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <img src="./img/product-list/create1.jpg" alt="Proses pembuatan parfum" className="rounded-lg w-full"/>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Seni di Balik Setiap Tetes</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed max-w-lg">
                        Di AURALIS, kami percaya parfum adalah bentuk seni. Kami memadukan bahan-bahan alami terbaik dengan ilmu pengetahuan modern untuk menciptakan komposisi aroma yang harmonis dan menggugah emosi.
                    </p>
                    <a href="/tentang" className="text-[#d4af37] font-bold group inline-flex items-center">
                        Pelajari Kisah Kami
                        <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ArtOfPerfumery