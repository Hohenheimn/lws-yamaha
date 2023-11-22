"use client";

import React from "react";

import Hero from "@/components/sections/Hero";
import MotorcycleCardList from "@/components/sections/MotorcycleCardList";
import Heading from "@/components/shared/Heading";
import InquieryAndFindDealerButtons from "@/components/sections/InquieryAndFindDealerButtons";
import {
  motocycleCarousel,
  motocycleCarouselBB,
} from "@/data/motorcycle/motorcycleCarousel";
import useAPI from "@/hooks/useAPI";

const SportsMachinePage = () => {
  const { useGet } = useAPI("/api/vehicles?type=personal-commuter");
  const { isLoading: vehiclesLoading, data: vehicles } = useGet("vehicles");
  return (
    <section className=" bg-[#212121]">
      <Hero
        fullHeight={false}
        desktopBgImage={"/assets/images/samples/sample-sport-machine-hero.jpg"}
        mobileBgImage={"/assets/images/samples/sample-sport-machine-hero.jpg"}
        title={"SPORTS MACHINE"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Malesuada non mauris pellentesque augue fermentum tristique nulla et. In vitae donec fringilla elit hendrerit aliquet tristique congue."
        }
        textPosition={"center"}
      />
      <MotorcycleCardList
        motorcycles={[...motocycleCarouselBB, ...motocycleCarouselBB]}
        nowrap={false}
      />
      <InquieryAndFindDealerButtons />
    </section>
  );
};

export default SportsMachinePage;
