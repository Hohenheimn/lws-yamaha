"use client";

import React from "react";

import Hero from "@/components/sections/Hero";
import MotorcycleCardList from "@/components/sections/MotorcycleCardList";
import Heading from "@/components/shared/Heading";
import { motocycleCarousel } from "@/data/motorcycle/motorcycleCarousel";
import useAPI from "@/hooks/useAPI";

const SportsMachinePage = () => {
  const { useGet } = useAPI("/api/vehicles?type=personal-commuter");
  const { isLoading: vehiclesLoading, data: vehicles } = useGet("vehicles");
  return (
    <section>
      <Hero
        fullHeight={false}
        desktopBgImage={"/assets/images/samples/sample-banner-inside.jpg"}
        mobileBgImage={"/assets/images/samples/sample-banner-inside.jpg"}
        title={<Heading type="h2">{"PERSONAL COMMUTER"}</Heading>}
        description={
          "Lorem ipsum dolor sit amet consectetur. Malesuada non mauris pellentesque augue fermentum tristique nulla et. In vitae donec fringilla elit hendrerit aliquet tristique congue."
        }
        textPosition={"center"}
      />
      <MotorcycleCardList motorcycles={motocycleCarousel} nowrap={false} />
    </section>
  );
};

export default SportsMachinePage;
