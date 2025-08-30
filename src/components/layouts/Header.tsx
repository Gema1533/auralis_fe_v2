import { useSidebarAction, useSidebarSelector } from "@/hooks/useSidebar";
import { Menu, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {useState, useEffect} from "react";

const Header = () => {
  const router = useRouter();
  const path = router.pathname;
  const [ isScrolled, setIsScrolled] = useState(false);
  const { action } = useSidebarAction();
  const { open } = useSidebarSelector()
 
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
        <Link
          href="/"
          className="text-3xl font-serif font-bold tracking-wider text-[#d4af37]"
        >
          AURALIS
        </Link>
        <div className="hidden md:flex space-x-10 items-center bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
          <Link href="/" className={`${path === "/" && "text-white "} hover:text-white font-bold transition text-sm`}>
            Beranda
          </Link>
          <Link href="/product" className={`${path.toLowerCase().includes("product") && "text-white"} hover:text-white font-bold transition text-sm`}>
            Produk
          </Link>
          <Link href="/aboutUs" className={`${path.toLowerCase().includes("aboutus") && "text-white"} hover:text-white font-bold transition text-sm`}>
            Tentang
          </Link>
          <Link href="/contact" className={`${path.toLowerCase().includes("contact") && "text-white"} hover:text-white font-bold transition text-sm`}>
            Kontak
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-[#d4af37] transition cursor-pointer">
            <Search size={20} />
          </button>
          <button className="text-white hover:text-[#d4af37] transition cursor-pointer">
            <ShoppingBag size={20} />
          </button>
          <button className="md:hidden text-white cursor-pointer" >
            <Menu size={24}  onClick={() => action(!open)}/>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
