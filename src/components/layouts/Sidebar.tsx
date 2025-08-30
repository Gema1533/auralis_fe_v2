import { usePath } from "@/hooks/usePath";
import { X, Home, Package, Info, Phone } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePath();

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-black/90 backdrop-blur-md border-r border-white/10 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          className="text-white hover:text-[#d4af37]"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
      </div>

      {/* Logo Section */}
      <div className="flex flex-col items-center px-6 mt-2 mb-6">
        {/* Kalau ada file logo bisa pakai <img src="/logo.png" /> */}
        <img src="./img/logo/1.png" className="w-full" alt="" />
      </div>

      {/* Sidebar Menu Links */}
      <div className="flex flex-col space-y-6 px-6 mt-6 font-bold">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
            path === "/"
              ? "bg-[#d4af37] text-black"
              : "text-white hover:text-[#d4af37] hover:bg-white/10"
          }`}
        >
          <Home size={20} /> Beranda
        </Link>
        <Link
          href="/product"
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
            path.startsWith("/product")
              ? "bg-[#d4af37] text-black"
              : "text-white hover:text-[#d4af37] hover:bg-white/10"
          }`}
        >
          <Package size={20} /> Produk
        </Link>
        <Link
          href="/aboutUs"
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
            path.startsWith("/aboutUs")
              ? "bg-[#d4af37] text-black"
              : "text-white hover:text-[#d4af37] hover:bg-white/10"
          }`}
        >
          <Info size={20} /> Tentang
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
            path.startsWith("/contact")
              ? "bg-[#d4af37] text-black"
              : "text-white hover:text-[#d4af37] hover:bg-white/10"
          }`}
        >
          <Phone size={20} /> Kontak
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
