import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { fadeIn } from "@/constans/public";

const ContactInfoAndMap = () => {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{fadeIn}}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-serif text-white mb-6">
          Kunjungi Toko Kami
        </h2>
        <div className="space-y-4 text-gray-300">
          <div className="flex items-start">
            <MapPin
              size={20}
              className="text-[#d4af37] mr-4 mt-1 flex-shrink-0"
            />
            <span>
              Monumen Nasional, Gambir, Kota Jakarta Pusat, Daerah Khusus
              Ibukota Jakarta, Indonesia
            </span>
          </div>
          <div className="flex items-center">
            <Phone size={20} className="text-[#d4af37] mr-4" />
            <span>+62.... kontol</span>
          </div>
          <div className="flex items-center">
            <Mail size={20} className="text-[#d4af37] mr-4" />
            <span>service@auralisparfum.com</span>
          </div>
        </div>
      </div>

      <div className="h-80 w-full rounded-lg overflow-hidden border-2 border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666426372588!2d106.8249641758641!3d-6.175392360500336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1723755050123!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ContactInfoAndMap;
