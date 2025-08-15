import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import React from 'react'

const FilterBar = () => {
  // Di aplikasi nyata, Anda akan menggunakan useState untuk mengelola status filter
  return (
    <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center border-y border-white/10">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <SlidersHorizontal size={20} className="text-gray-400" />
        <span className="text-white font-semibold">Filter:</span>
        <div className="flex space-x-3">
          <button className="text-gray-300 hover:text-white transition">Semua</button>
          <button className="text-gray-300 hover:text-white transition">Floral</button>
          <button className="text-gray-300 hover:text-white transition">Woody</button>
          <button className="text-gray-300 hover:text-white transition">Oriental</button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-400">Urutkan:</span>
        <button className="text-white font-semibold flex items-center">
          Terpopuler <ChevronDown size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};


export default FilterBar