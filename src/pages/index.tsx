import React from "react";
import HeroSection from "../components/HeroSection";
import PhilosophySection from "../components/PhilosophySection";
import MasterpieceSection from "../components/MasterpieceSection";
import ScentDiscovery from "../components/ScentDiscovery";
import ArtOfPerfumery from "../components/ArtOfPerfumery";
import TestimonialSection from "../components/TestimonialSection";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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


// export async function getServerSideProps(context: { locale?: string }) {
//   const locale = context.locale || "id"; 
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }

export default index;
