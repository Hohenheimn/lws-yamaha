import WhyChooseUsSectoin from "@/components/sections/WhyChooseUsSection";
import { ComponentProps } from "react";

const whyChooseUsFeatures: ComponentProps<
  typeof WhyChooseUsSectoin
>["features"] = [
  {
    id: 1,
    image: "/assets/images/whyChooseUs/yamahaTechnicalAcademy.png",
    title: "Pro Care",
    description:
      "Only certified technicians who have passed our global standard training will touch your motorcycle. They utilize accurate product knowledge with a wealth of work experience and provide the right maintenance with skills that have been refined to meet your needs.",
  },
  {
    id: 2,
    image: "/assets/images/whyChooseUs/yamalube.png",
    title: "Global Unified Oil",
    description:
      "Your Yamaha runs best with Yamalube. It has been made with precision for all our motorcycle categories and brings out only the best in your motorcycle.",
  },
  {
    id: 3,
    image: "/assets/images/whyChooseUs/serbilis.png",
    title: "Fast & Reliable Service",
    description:
      "We value your time and pride ourselves in running our services efficiently to make sure each second you spend with us is a great experience.",
  },
  {
    id: 4,
    image: "/assets/images/whyChooseUs/yamahaDiagnosticTools.png",
    title: "Advance Technology",
    description:
      "We provide cutting-edge technology in the maintenance of your Yamaha motorcycle, such as the Yamaha Diagnostic Tool. It identifies defects in increasingly complex modern motorcycles more quickly and accurately.",
  },
];

export default whyChooseUsFeatures;
