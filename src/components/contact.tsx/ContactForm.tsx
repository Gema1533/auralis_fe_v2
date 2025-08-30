import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/constans/public";

const ContactForm = () => {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{ fadeIn }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-serif text-white mb-6">Kirim Pesan</h2>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-800/50 border border-white/20 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Alamat Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-800/50 border border-white/20 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Subjek
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full bg-gray-800/50 border border-white/20 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Pesan Anda
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full bg-gray-800/50 border border-white/20 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#d4af37] text-black font-bold py-3 px-10 rounded-full text-lg hover:bg-[#c09b2e] transition-all duration-300 transform hover:scale-105 inline-block shadow-lg shadow-yellow-500/20 w-full"
          >
            Kirim Pesan
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
