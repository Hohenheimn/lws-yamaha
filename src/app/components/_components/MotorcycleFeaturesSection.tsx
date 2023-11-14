import React, { ComponentProps } from "react";
import FeaturesSection from "@/components/sections/MotorcycleFeaturesSection";

const MotorcycleFeaturesSection = () => {
  const features: ComponentProps<typeof FeaturesSection>["features"] = [
    ...Array(6),
  ].map((_, index) => ({
    id: index + 1,
    title: "Refined 155CC Blue Core Engine",
    description:
      "A liquid-cooled, 4-stroke SOHC, 155cc, single-cylinder, 4-valve, fuel-injected engine with CVT is adopted. By the continuous development of technology, the upgraded engine makes use of a new cylinder head and a compact combustion chamber to achieve a higher compression ratio.",
    image: "/assets/images/samples/sample-carousel-bg.jpg",
  }));

  return <FeaturesSection features={features} />;
};

export default MotorcycleFeaturesSection;
