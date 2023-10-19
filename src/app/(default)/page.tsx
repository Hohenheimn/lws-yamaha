import React from "react";
import Image from "next/image";

import CardUnit from "@/components/CardUnit";
import CarouselSection from "@/components/CarouselSection";
import HeroBanner from "@/components/HeroBanner";
import SectionContainer from "@/components/SectionContainer";

const HomePage = () => {
  const sampleUnit = [
    {
      imageSrc: "/images/samples/sample-unit.png",
      description: {
        engine_type: "",
        frame_type: "",
        dimention: "",
      },
      url: "#",
    },
    {
      imageSrc: "/images/samples/sample-unit.png",
      description: {
        engine_type: "",
        frame_type: "",
        dimention: "",
      },
      url: "#",
    },
    {
      imageSrc: "/images/samples/sample-unit.png",
      description: {
        engine_type: "",
        frame_type: "",
        dimention: "",
      },
      url: "#",
    },
    {
      imageSrc: "/images/samples/sample-unit.png",
      description: {
        engine_type: "",
        frame_type: "",
        dimention: "",
      },
      url: "#",
    },
    {
      imageSrc: "/images/samples/sample-unit.png",
      description: {
        engine_type: "",
        frame_type: "",
        dimention: "",
      },
      url: "#",
    },
  ];
  return (
    <div>
      <HeroBanner
        height="large"
        imageSrc={"/images/samples/sample-banner.jpg"}
        title={"DESIGNED USING PURE TMAX DNA."}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dignissimos."
        }
        textWidth="medium"
        textPosition={"center"}
        scrollTo="#personal-commuter"
      />
      <div id="personal-commuter">
        <CarouselSection
          title={"Personal Commuter"}
          description={
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquam voluptate molestiae fuga architecto obcaecati dolorem blanditiis dolores, dolorum eveniet? Perferendis minima ullam ipsum sapiente veniam dolores facere quod dolorem."
          }
          units={sampleUnit}
          bgImage={"/images/samples/sample-banner.jpg"}
        />
      </div>
      <CarouselSection
        title={"Big Bikes"}
        description={
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquam voluptate molestiae fuga architecto obcaecati dolorem blanditiis dolores, dolorum eveniet? Perferendis minima ullam ipsum sapiente veniam dolores facere quod dolorem."
        }
        units={sampleUnit}
        bgImage={"/images/samples/sample-banner.jpg"}
      />
    </div>
  );
};

export default HomePage;
