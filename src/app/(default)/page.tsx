"use client";

import React, { useState } from "react";

import AccessoriesSection from "@/components/sections/AccessoriesSection";
import CcuMyRideLinkSection from "@/components/sections/CcuMyRideLinkSection";
import Hero from "@/components/sections/Hero";
import LifeWithMotorcycleSection from "@/components/sections/LifeWithMotorcyleSection";
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
          desktopBgImage={"/assets/images/samples/sample-banner.jpg"}
          url={"#"}
        />
      </div>
      <MotorcycleCarouselSection
        title={"Big Bikes"}
        description={
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquam voluptate molestiae fuga architecto obcaecati dolorem blanditiis dolores, dolorum eveniet? Perferendis minima ullam ipsum sapiente veniam dolores facere quod dolorem."
        }
        motorcycle={motocycleCarousel}
        desktopBgImage={"/assets/images/samples/sample-banner.jpg"}
        url={"#"}
      />
      <MotorcycleColorAndPriceSection
        motorcycle_detail={[
          {
            color: "#1e1e1e",
            motorcycleImage: "/assets/images/samples/sample-unit -2.png",
            motorcycleName: "Race Black",
            titleImage: "/assets/images/samples/sample-title.png",
            desktopBgImage: "/assets/images/samples/sample-banner.jpg",

            description:
              "Lorem ipsum dolor sit  facere exercitationem voluptatibus culpa porro necessitatibus, tempora velit a ratione dolores quidem.",
            price: 155800,
          },
          {
            color: "#01b1e9",
            motorcycleImage: "/assets/images/placeholder.png",
            motorcycleName: "Race Blue",
            titleImage: "/assets/images/samples/sample-title.png",
            desktopBgImage: "/assets/images/samples/sample-banner.jpg",
            mobileBgImage: "/assets/images/samples/sample-screen-banner.png",
            description:
              "Lorem ipsum dolor sit  repellat id nihil nisi officia sequi delectus natus, facere exercitationem voluptatibus culpa porro necessitatibus, tempora velit a ratione dolores quidem.",
            price: 1000000,
          },
          {
            color: "#a0afcc",
            motorcycleImage: "/assets/images/placeholder.png",
            motorcycleName: "Race Gray",
            titleImage: "/assets/images/samples/sample-title.png",
            desktopBgImage: "/assets/images/samples/sample-banner.jpg",
            mobileBgImage: "/assets/images/samples/sample-screen-banner.png",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima repellat id nihil nisi officia sequi delectus natus, facere exercitationem voluptatibus culpa porro necessitatibus, tempora velit a ratione dolores quidem.",
            price: 95000,
          },
        ]}
      />
      <LifeWithMotorcycleSection
        imageTitle={"/assets/images/samples/sample-be-one-with-speed.png"}
        desktopBgImage={"/assets/images/placeholder.png"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima repellat id nihil nisi officia sequi delectus natus, facere exercitationem voluptatibus culpa porro necessitatibus, tempora velit a ratione dolores quidem."
        }
      />
      <AccessoriesSection
        accessories={[
          {
            accessoryImage: "/assets/images/placeholder.png",
            title: "Crank Case Cover Carbon",
            url: "#",
          },
          {
            accessoryImage: "/assets/images/placeholder.png",
            title: "Crank Case Cover Carbon",
            url: "#",
          },
          {
            accessoryImage: "/assets/images/placeholder.png",
            title: "Crank Case Cover Carbon",
            url: "#",
          },
          {
            accessoryImage: "/assets/images/placeholder.png",
            title: "Crank Case Cover Carbon",
            url: "#",
          },
        ]}
      />
      <CcuMyRideLinkSection
        list={[
          "Launch MyRide-Link App",
          "Tap [Settings] in the bottom menu",
          'Check "App Version" in "Settings"',
        ]}
        title={"How to check MyRide-Link App Version"}
        first_description={
          "Before updating CCU software, check MyRide-Link app version by following procedure"
        }
        second_description={
          "Check that App version is the latest 2.30. If App version is before 2.30, update MyRide-Link App in App Store / Google Store"
        }
        image={"/assets/images/samples/sample-mobile.png"}
      />
    </div>
  );
};

export default HomePage;
