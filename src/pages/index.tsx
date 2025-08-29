import React from "react";
import HeroSection from "../components/HeroSection";
import PhilosophySection from "../components/PhilosophySection";
import MasterpieceSection from "../components/MasterpieceSection";
import ScentDiscovery from "../components/ScentDiscovery";
import ArtOfPerfumery from "../components/ArtOfPerfumery";
import TestimonialSection from "../components/TestimonialSection";

export const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: i * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const index = () => {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <MasterpieceSection />
      <ScentDiscovery />
      <ArtOfPerfumery />
      <TestimonialSection />
    </>
  );
};

export default index;
