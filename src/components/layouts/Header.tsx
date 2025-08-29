import { Menu, Search, ShoppingBag, X, Home, Package, Info, Phone } from "lucide-react";
import { useRouter } from "next/router";
import React, {useState, useEffect} from "react";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const path = router.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  console.log(path)

  // Cek posisi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/70 to-transparent"></div>
      <nav
        className={`w-full md:container md:mx-auto px-6 py-5 flex justify-between items-center relative z-10 transition-colors duration-300 ${
          isScrolled ? "bg-black/20 backdrop-blur-md border-white/10 md:bg-transparent md:backdrop-blur-none md:border-0" : ""
        }`}
      >
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
          <button className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Sidebar Mobile */}
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
              path === "/" ? "bg-[#d4af37] text-black" : "text-white hover:text-[#d4af37] hover:bg-white/10"
            }`}
          >
            <Home size={20} /> Beranda
          </Link>
          <Link 
            href="/product" 
            onClick={() => setIsOpen(false)} 
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              path.startsWith("/product") ? "bg-[#d4af37] text-black" : "text-white hover:text-[#d4af37] hover:bg-white/10"
            }`}
          >
            <Package size={20} /> Produk
          </Link>
          <Link 
            href="/aboutUs" 
            onClick={() => setIsOpen(false)} 
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              path.startsWith("/aboutUs") ? "bg-[#d4af37] text-black" : "text-white hover:text-[#d4af37] hover:bg-white/10"
            }`}
          >
            <Info size={20} /> Tentang
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              path.startsWith("/contact") ? "bg-[#d4af37] text-black" : "text-white hover:text-[#d4af37] hover:bg-white/10"
            }`}
          >
            <Phone size={20} /> Kontak
          </Link>
        </div>
      </div>

      {/* Overlay Background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
