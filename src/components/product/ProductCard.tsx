import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/pages";


const ProductCard = ({ product }: { product: any }) => (
  <motion.div variants={{ fadeIn }} className="group cursor-pointer">
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden mb-4 relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <button className="w-full bg-black/50 text-white font-bold py-3 rounded-full backdrop-blur-sm">
          Tambah ke Tas
        </button>
      </div>
    </div>
    <h3 className="text-xl font-serif text-white">{product.name}</h3>
    <p className="text-gray-400 mb-1">{product.category}</p>
    <p className="text-[#d4af37] font-semibold text-lg">{product.price}</p>
  </motion.div>
);
export default ProductCard;
