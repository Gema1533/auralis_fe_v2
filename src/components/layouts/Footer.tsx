import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4 text-center md:text-left flex justify-center items-center">
            {/* <h3 className="text-2xl font-serif font-bold tracking-wider text-[#d4af37] mb-4">
              AURALIS
            </h3> */}
            <img src="./img/logo/1.png" className="w-80" alt="" />
            {/* <p className="text-gray-400">
              Seni keharuman murni untuk jiwa yang berkelas.
            </p> */}
          </div>
          <div className="md:col-span-2 hidden md:block  text-center md:text-left">
            <h3 className="text-lg  font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/produk"
                  className="text-gray-400 hover:text-[#d4af37]"
                >
                  Produk
                </a>
              </li>
              <li>
                <a
                  href="/tentang"
                  className="text-gray-400 hover:text-[#d4af37]"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="/kontak"
                  className="text-gray-400 hover:text-[#d4af37]"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Jadilah yang Pertama Tahu
            </h3>
            <p className="text-gray-400 mb-4">
              Dapatkan akses eksklusif ke peluncuran baru dan penawaran spesial
              kami.
            </p>
            <form className="flex max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="w-full bg-gray-800/50 border border-white/20 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
              <button
                type="submit"
                className="bg-[#d4af37] text-black font-bold px-5 rounded-r-md hover:bg-[#c09b2e] transition-colors"
              >
                Daftar
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-xs md:text-lg text-gray-500">
            &copy; 2024 AURALIS PARFUM. Seluruh Hak Cipta.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
