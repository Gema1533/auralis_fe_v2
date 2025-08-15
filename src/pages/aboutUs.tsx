import AboutHero from "@/components/aboutUs/AboutHero";
import CallToAction from "@/components/aboutUs/CallToAction";
import OurPhilosophy from "@/components/aboutUs/OurPhilosophy";
import OurStory from "@/components/aboutUs/OurStory";
import React from "react";

const aboutUs = () => {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <OurPhilosophy />
      <CallToAction />
    </div>
  );
};

export default aboutUs;
