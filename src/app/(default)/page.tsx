"use client";

import React, { useState } from "react";

import Hero from "@/components/Hero";
import MotorcycleCarouselSection from "@/components/Motorcycle/MotorcycleCarouselSection";
import ScreenBanner from "@/components/Shared/Modal/ScreenBannerModal";
import { motocycleCarousel } from "@/data/motorcycle/motorcycleCarousel";

const HomePage = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <div>
      {showBanner && (
        <ScreenBanner
          imageUrl="/assets/images/samples/sample-screen-banner.png"
          setShow={setShowBanner}
        />
      )}
      <Hero
        fullHeight={true}
        imageSrc={"/assets/images/samples/sample-banner.jpg"}
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
        <MotorcycleCarouselSection
          title={"Personal Commuter"}
          description={
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquam voluptate molestiae fuga architecto obcaecati dolorem blanditiis dolores, dolorum eveniet? Perferendis minima ullam ipsum sapiente veniam dolores facere quod dolorem."
          }
          motorcycle={motocycleCarousel}
          bgImage={"/assets/images/samples/sample-banner.jpg"}
          url={"#"}
        />
      </div>
      <MotorcycleCarouselSection
        title={"Big Bikes"}
        description={
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquam voluptate molestiae fuga architecto obcaecati dolorem blanditiis dolores, dolorum eveniet? Perferendis minima ullam ipsum sapiente veniam dolores facere quod dolorem."
        }
        motorcycle={motocycleCarousel}
        bgImage={"/assets/images/samples/sample-banner.jpg"}
        url={"#"}
      />
    </div>
  );
};

export default HomePage;
