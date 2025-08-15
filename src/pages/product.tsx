import FilterBar from "@/components/product/FilterBar";
import ProductGrid from "@/components/product/ProductGrid";
import ProductHero from "@/components/product/ProductHero";
import React from "react";

const product = () => {
  return (
    <div>
      <ProductHero />
      <FilterBar />
      <ProductGrid />
    </div>
  );
};

export default product;
