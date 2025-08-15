import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      name: "Aura Noir",
      category: "Woody & Spiced",
      price: "Rp 1.250.000",
      image: "https://placehold.co/500x700/0c0c0c/d4af37?text=Aura+Noir",
    },
    {
      name: "Golden Elixir",
      category: "Oud & Oriental",
      price: "Rp 1.480.000",
      image: "https://placehold.co/500x700/0c0c0c/d4af37?text=Golden+Elixir",
    },
    {
      name: "Celestial Bloom",
      category: "Floral & Fruity",
      price: "Rp 1.320.000",
      image: "https://placehold.co/500x700/0c0c0c/d4af37?text=Celestial+Bloom",
    },
    {
      name: "Crimson Dusk",
      category: "Oud & Oriental",
      price: "Rp 1.550.000",
      image: "https://placehold.co/500x700/0c0c0c/d4af37?text=Crimson+Dusk",
    },
    {
      name: "Verdant Whisper",
      category: "Floral & Fruity",
      price: "Rp 1.280.000",
      image: "https://placehold.co/500x700/0c0c0c/d4af37?text=Verdant+Whisper",
    },
    {
      name: "Sable Mystique",
      category: "Woody & Spiced",
      price: "Rp 1.620.000",
      image: "https://placehold.co/500x700/0c0c0c/d4af37?text=Sable+Mystique",
    },
    {
      name: "Ivory Musk",
      category: "Floral & Fruity",
      price: "Rp 1.350.000",
      image: "https://placehold.co/500x700/0c0c0c/d4af37?text=Ivory+Musk",
    },
    {
      name: "Amber Solstice",
      category: "Oud & Oriental",
      price: "Rp 1.750.000",
      image: "https://placehold.co/500x700/0c0c0c/d4af37?text=Amber+Solstice",
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={{ staggerContainer }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
