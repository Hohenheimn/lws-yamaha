"use client";

import React from "react";

import Hero from "@/components/sections/Hero";
import MotorcycleCarouselSection from "@/components/sections/MotorcycleCarouselSection";
import NewsGridSection from "@/components/sections/NewsGridSection";
import YamahaLifeStyleStudioSection from "@/components/sections/YamahaLifeStyleStudioSection";
import Heading from "@/components/shared/Heading";
import AnnouncementModal from "@/components/shared/modals/AnnouncementModal";
import {
  motocycleCarousel,
  motocycleCarouselBB,
} from "@/data/motorcycle/motorcycleCarousel";
import news from "@/data/news";
import useAPI from "@/hooks/useAPI";

const HomePage = () => {
  const { useGet, usePost } = useAPI("/api/vehicles");
  const { data: vehicles, isLoading: vehiclesLoading } = useGet("vehicles");

  return (
    <div>
      <AnnouncementModal desktopImage="/assets/images/samples/sample-screen-banner.png" />
      <Hero
        fullHeight={true}
        desktopBgImage={"/assets/images/samples/sample-banner.jpg"}
        mobileBgImage={"/assets/images/samples/sample-banner.jpg"}
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
          desktopBgImage={"/assets/images/samples/homepage/bg-pc.png"}
          url={"#"}
        />
      </div>
      <MotorcycleCarouselSection
        title={"Big Bikes"}
        description={
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquam voluptate molestiae fuga architecto obcaecati dolorem blanditiis dolores, dolorum eveniet? Perferendis minima ullam ipsum sapiente veniam dolores facere quod dolorem."
        }
        motorcycle={motocycleCarouselBB}
        desktopBgImage={"/assets/images/samples/homepage/bg-bb.png"}
        url={"#"}
      />
      <NewsGridSection
        news={news.map((data) => ({
          ...data,
          onClick: () => console.log(data),
        }))}
        onViewAll={() => {}}
      />
      <YamahaLifeStyleStudioSection />
    </div>
  );
};

export default HomePage;
