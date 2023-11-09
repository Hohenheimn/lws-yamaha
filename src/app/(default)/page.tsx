"use client";

import React, { useState } from "react";

import Image from "next/image";

import AccessoriesSection from "@/components/sections/AccessoriesSection";
import CcuMyRideLinkSection from "@/components/sections/CcuMyRideLinkSection";
import CcuUpdatingProcedureSection from "@/components/sections/CcuUpdatingProcedureSection";
import DealerSection from "@/components/sections/DealerSection";
import Hero from "@/components/sections/Hero";
import LifeWithMotorcycleSection from "@/components/sections/LifeWithMotorcyleSection";
import MotorcycleCarouselSection from "@/components/sections/MotorcycleCarouselSection";
import MotorcycleColorAndPriceSection from "@/components/sections/MotorcycleColorAndPriceSection";
import NewsGridSection from "@/components/sections/NewsGridSection";
import PolicyAndGuidedbookSection from "@/components/sections/PolicyAndGuidedbookSection";
import ServiceDetailSection from "@/components/sections/ServiceDetailSection";
import YamahaLifeStyleStudioSection from "@/components/sections/YamahaLifeStyleStudioSection";
import YamahalubeCharacteristicSection from "@/components/sections/YamahalubeCharacteristicSection";
import YamahaTechnicalAcademySection from "@/components/sections/YamahaTechnicalAcademySection";
import YConnectSection from "@/components/sections/YConnectSection";
import YdtSection from "@/components/sections/YdtSection";
import Heading from "@/components/shared/Heading";
import AnnouncementModal from "@/components/shared/modal/AnnouncementModal";
import { ccuUpdateProcedure } from "@/data/ccuUpdateProcedure";
import {
  motocycleCarousel,
  motocycleCarouselBB,
} from "@/data/motorcycle/motorcycleCarousel";
import news from "@/data/news";

const HomePage = () => {
  return (
    <div>
      <AnnouncementModal imageUrl="/assets/images/samples/sample-screen-banner.png" />
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
      />
      <YamahaLifeStyleStudioSection />
    </div>
  );
};

export default HomePage;
