import ContactForm from "@/components/contact.tsx/ContactForm";
import ContactHero from "@/components/contact.tsx/ContactHero";
import ContactInfoAndMap from "@/components/contact.tsx/ContactInfoAndMap";
import React from "react";

const contact = () => {
  return (
    <div>
      <ContactHero />
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <ContactInfoAndMap />
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default contact;
