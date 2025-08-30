import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Sidebar from "@/components/layouts/Sidebar";

const MainLayaout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#0c0c0c] text-gray-300 font-sans overflow-x-hidden">
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayaout;
