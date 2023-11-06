"use client";

import React, { useState } from "react";

import Hero from "@/components/sections/Hero";
import MotorcycleCarouselSection from "@/components/sections/MotorcycleCarouselSection";
import MotorcycleColorAndPriceSection from "@/components/sections/MotorcycleColorAndPriceSection";
import Heading from "@/components/shared/Heading";
import AnnouncementModal from "@/components/shared/Modal/AnnouncementModal";
import { motocycleCarousel } from "@/data/motorcycle/motorcycleCarousel";

const HomePage = () => {
  return (
    <div>
      <AnnouncementModal imageUrl="/assets/images/samples/sample-screen-banner.png" />
      <Hero
        fullHeight={true}
        imageSrc={"/assets/images/samples/sample-banner.jpg"}
        title={<Heading type="h2">{"DESIGNED USING\nPURE TMAX DNA."}</Heading>}
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
      <MotorcycleColorAndPriceSection
        colors={["red", "blue", "violet", "black"]}
        motorcycleImage={"/assets/images/placeholder.png"}
        motorcycleName="Race Blue"
        titleImage={"/assets/images/samples/sample-title.png"}
        backgroundImage={"/assets/images/placeholder.png"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima repellat id nihil nisi officia sequi delectus natus, facere exercitationem voluptatibus culpa porro necessitatibus, tempora velit a ratione dolores quidem."
        }
        price={124000}
      />
    </div>
  );
};

export default HomePage;
