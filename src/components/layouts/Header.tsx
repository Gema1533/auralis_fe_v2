import { Menu, Search, ShoppingBag } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const path = router.pathname.replace("/", "");
  console.log(path)
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/70 to-transparent"></div>
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center relative z-10">
        <a
          href="/"
          className="text-3xl font-serif font-bold tracking-wider text-[#d4af37]"
        >
          AURALIS
        </a>
        <div className="hidden md:flex space-x-10 items-center bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
          <a href="/" className={`${path == "" && "text-white "} hover:text-white font-bold transition text-sm`}>
            Beranda
          </a>
          <a href="/product" className={`${path.toLowerCase().includes("product") && "text-white"} hover:text-white font-bold transition text-sm`}>
            Produk
          </a>
          <a href="/aboutUs" className={`${path.toLowerCase().includes("aboutus") && "text-white"} hover:text-white font-bold transition text-sm`}>
            Tentang
          </a>
          <a href="/contact" className={`${path.toLowerCase().includes("contact") && "text-white"} hover:text-white font-bold transition text-sm`}>
            Kontak
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-[#d4af37] transition cursor-pointer">
            <Search size={20} />
          </button>
          <button className="text-white hover:text-[#d4af37] transition cursor-pointer">
            <ShoppingBag size={20} />
          </button>
          <button className="md:hidden text-white cursor-pointer">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
