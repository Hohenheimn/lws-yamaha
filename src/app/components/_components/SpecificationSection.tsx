import React from "react";
import SpecsSection from "@/components/sections/SpecificationSection";

const SpecificationSection = () => {
  const categories = [
    "Engine",
    "Chasis",
    "Dimension",
    "Electrical",
    "Standard Equipment",
  ];

  const specifications = categories.map((category, index) => ({
    id: index + 1,
    category,
    specifications: [...Array(6)].map((_, index) => ({
      id: index + 1,
      name: `${category} Spec Name ${index + 1}`,
      value: `${category} Spec Value ${index + 1}`,
    })),
  }));

  return (
    <SpecsSection
      specifications={specifications}
      onClickBrochure={() => console.log("Download Brochure")}
    />
  );
};

export default SpecificationSection;
