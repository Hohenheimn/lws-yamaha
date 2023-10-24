"use client";

import React, { useState } from "react";

import HeroBanner from "@/components/HeroBanner";
import ScreenBanner from "@/components/ScreenBanner";
import CarouselSection from "@/components/Section/VehicleCarouselSection";

const HomePage = () => {
  const [showBanner, setShowBanner] = useState(true);
  const sampleUnit = [
    {
      imageSrc: "/images/samples/sample-unit.png",
      description: {
        engine_type:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magnam adipisci consequuntur distinctio deleniti nulla ea! Non dolor reprehenderit recusandae. Nulla aperiam, deserunt voluptate vitae perspiciatis eos adipisci placeat perferendis.",
        frame_type:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magnam adipisci consequuntur distinctio deleniti nulla ea! Non dolor reprehenderit recusandae. Nulla aperiam, deserunt voluptate vitae perspiciatis eos adipisci placeat perferendis.",
        dimention:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magnam adipisci consequuntur distinctio deleniti nulla ea! Non dolor reprehenderit recusandae. Nulla aperiam, deserunt voluptate vitae perspiciatis eos adipisci placeat perferendis.",
      },
      url: "#",
    },
    {
      imageSrc: "/images/samples/sample-bigbike.png",
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
      imageSrc: "/images/samples/sample-bigbike.png",
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
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        textPosition={"center"}
        scrollTo="#personal-commuter"
      />
      <div id="personal-commuter">
        <CarouselSection
          title={"Personal Commuter"}
          description={
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquam voluptate molestiae fuga architecto obcaecati dolorem blanditiis dolores, dolorum eveniet? Perferendis minima ullam ipsum sapiente veniam dolores facere quod dolorem."
          }
          vehicles={sampleUnit}
          bgImage={"/images/samples/sample-banner.jpg"}
          url={"#"}
        />
      </div>
      <CarouselSection
        title={"Big Bikes"}
        description={
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquam voluptate molestiae fuga architecto obcaecati dolorem blanditiis dolores, dolorum eveniet? Perferendis minima ullam ipsum sapiente veniam dolores facere quod dolorem."
        }
        vehicles={sampleUnit}
        bgImage={"/images/samples/sample-banner.jpg"}
        url={"#"}
      />
    </div>
  );
};

export default HomePage;
