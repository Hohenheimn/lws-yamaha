import ServicesSection from "@/components/sections/ServicesSection";
import { ComponentProps } from "react";

const services: ComponentProps<typeof ServicesSection>["data"] = [
  {
    id: 1,
    category: "Express Service",
    services: [...Array(2)].map((_, index) => ({
      id: index + 1,
      type: `Express ${index + 1}`,
      laborTime: `${index + 15} mins`,
    })),
  },
  {
    id: 2,
    category: "Regular Service",
    services: [...Array(10)].map((_, index) => ({
      id: index + 1,
      type: `Regular ${index + 1}`,
      laborTime: `${index + 15} mins`,
    })),
  },
];

export default services;
