"use client";

import React from "react";

import Hero from "@/components/sections/Hero";
import MotorcycleCardList from "@/components/sections/MotorcycleCardList";
import Heading from "@/components/shared/Heading";
import InquieryAndFindDealerButtons from "@/components/shared/InquieryAndFindDealerButtons";
import { motocycleCarousel } from "@/data/motorcycle/motorcycleCarousel";
import useAPI from "@/hooks/useAPI";

const PersonalCommuterPage = () => {
  const { useGet } = useAPI("/api/vehicles?type=personal-commuter");
  const { isLoading: vehiclesLoading, data: vehicles } = useGet("vehicles");
  return (
    <section className=" bg-[#212121]">
      <Hero
        fullHeight={false}
        desktopBgImage={"/assets/images/samples/sample-banner-inside.jpg"}
        mobileBgImage={"/assets/images/samples/sample-banner-inside.jpg"}
        title={"PERSONAL COMMUTER"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Malesuada non mauris pellentesque augue fermentum tristique nulla et. In vitae donec fringilla elit hendrerit aliquet tristique congue."
        }
        textPosition={"center"}
      />
      <MotorcycleCardList
        motorcycles={[...motocycleCarousel, ...motocycleCarousel]}
        nowrap={false}
      />
      <InquieryAndFindDealerButtons />
    </section>
  );
};

export default PersonalCommuterPage;
