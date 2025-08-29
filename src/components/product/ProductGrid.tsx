import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      name: "Aura Noir",
      category: "Woody & Spiced",
      price: "Rp 1.250.000",
      image: "./img/product-list/1.png",
    },
    {
      name: "Golden Elixir",
      category: "Oud & Oriental",
      price: "Rp 1.480.000",
      image: "./img/product-list/oud1.jpg",
    },
    {
      name: "Celestial Bloom",
      category: "Floral & Fruity",
      price: "Rp 1.320.000",
      image: "./img/product-list/wd1.jpg",
    },
    {
      name: "Crimson Dusk",
      category: "Oud & Oriental",
      price: "Rp 1.550.000",
      image: "./img/product-list/2.png",

    },
    {
      name: "Aura Noir",
      category: "Woody & Spiced",
      price: "Rp 1.250.000",
      image: "./img/product-list/1.png",
    },
    {
      name: "Golden Elixir",
      category: "Oud & Oriental",
      price: "Rp 1.480.000",
      image: "./img/product-list/oud1.jpg",
    },
    {
      name: "Celestial Bloom",
      category: "Floral & Fruity",
      price: "Rp 1.320.000",
      image: "./img/product-list/wd1.jpg",
    },
    {
      name: "Crimson Dusk",
      category: "Oud & Oriental",
      price: "Rp 1.550.000",
      image: "./img/product-list/2.png",

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
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12"
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
