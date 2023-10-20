"use client";

import React, { useState } from "react";

import CarouselSection from "@/components/CarouselSection";
import HeroBanner from "@/components/HeroBanner";
import ScreenBanner from "@/components/ScreenBanner";

const HomePage = () => {
  const [showBanner, setShowBanner] = useState(true);
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
      {showBanner && (
        <ScreenBanner
          imageUrl="/images/samples/sample-screen-banner.png"
          setShow={setShowBanner}
        />
      )}
      <HeroBanner
        height="large"
        imageSrc={"/images/samples/sample-banner.jpg"}
        title={
          <h2>
            DESIGNED USING
            <br />
            PURE TMAX DNA.
          </h2>
        }
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dignissimos."
        }
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
          url={"#"}
        />
      </div>
      <CarouselSection
        title={"Big Bikes"}
        description={
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquam voluptate molestiae fuga architecto obcaecati dolorem blanditiis dolores, dolorum eveniet? Perferendis minima ullam ipsum sapiente veniam dolores facere quod dolorem."
        }
        units={sampleUnit}
        bgImage={"/images/samples/sample-banner.jpg"}
        url={"#"}
      />
    </div>
  );
};

export default HomePage;
