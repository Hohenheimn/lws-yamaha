"use client";

import React, { useState } from "react";

import Image from "next/image";

import AccessoriesSection from "@/components/sections/AccessoriesSection";
import CcuMyRideLinkSection from "@/components/sections/CcuMyRideLinkSection";
import CcuUpdatingProcedureSection from "@/components/sections/CcuUpdatingProcedureSection";
import Hero from "@/components/sections/Hero";
import LifeWithMotorcycleSection from "@/components/sections/LifeWithMotorcyleSection";
import MotorcycleCarouselSection from "@/components/sections/MotorcycleCarouselSection";
import MotorcycleColorAndPriceSection from "@/components/sections/MotorcycleColorAndPriceSection";
import PolicyAndGuidedbookSection from "@/components/sections/PolicyAndGuidedbookSection";
import YConnectSection from "@/components/sections/YConnectSection";
import Heading from "@/components/shared/Heading";
import AnnouncementModal from "@/components/shared/Modal/AnnouncementModal";
import { ccuUpdateProcedure } from "@/data/ccuUpdateProcedure";
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
      <YConnectSection
        headingText={
          "Y-Connect is Yamahas latest innovation that connects man and machine digitally. This application is a brand exclusive that links your smart phone directly to your Yamaha motorcycle."
        }
        tabs={[
          {
            tab_name: "Stay Updated",
            image: "/assets/images/samples/sample-y-phone.png",
            content: [
              {
                title: "Convenience",
                description:
                  "Provides everything you need to maximize your riding experience (RPM, economical driving acceleration, intake manifold temp & radiator water temp and more)",
              },
              {
                title: "Fuel Consumption Tracker",
                description:
                  "Track your fuel usage when you ride and plot re-fueling stops for your trips. Previous logs can also be tracked for efficient planning of your next ride.",
              },
            ],
          },
          {
            tab_name: "Convenience",
            image: "/assets/images/samples/sample-y-phone.png",
            content: [
              {
                title: "Stay Updated",
                description:
                  "Provides everything you need to maximize your riding experience (RPM, economical driving acceleration, intake manifold temp & radiator water temp and more)",
              },
              {
                title: "Fuel Consumption Tracker",
                description:
                  "Track your fuel usage when you ride and plot re-fueling stops for your trips. Previous logs can also be tracked for efficient planning of your next ride.",
              },
            ],
          },
          {
            tab_name: "Connected",
            image: "/assets/images/samples/sample-y-phone.png",
            content: [
              {
                title: "Connected",
                description:
                  "Provides everything you need to maximize your riding experience (RPM, economical driving acceleration, intake manifold temp & radiator water temp and more)",
              },
              {
                title: "Fuel Consumption Tracker",
                description:
                  "Track your fuel usage when you ride and plot re-fueling stops for your trips. Previous logs can also be tracked for efficient planning of your next ride.",
              },
            ],
          },
          {
            tab_name: "Y-Connect Features",
            image: "/assets/images/samples/sample-y-phone.png",
            content: [
              {
                title: "Convenience",
                description:
                  "Provides everything you need to maximize your riding experience (RPM, economical driving acceleration, intake manifold temp & radiator water temp and more)",
              },
              {
                title: "Fuel Consumption Tracker",
                description:
                  "Track your fuel usage when you ride and plot re-fueling stops for your trips. Previous logs can also be tracked for efficient planning of your next ride.",
              },
            ],
          },
        ]}
      />
      <CcuUpdatingProcedureSection
        instructions={ccuUpdateProcedure}
        notes={[
          "It takes 10 to 15 minutes to update the software.",
          "To avoid draining the battery, please keep a charger connected to the battery while the software is updating.",
          " If you don't have a battery charger, please ask a Yamaha dealer, or run the engine while the software is updating.",
        ]}
      />
      <PolicyAndGuidedbookSection
        image={"/assets/images/samples/sample-warranty.png"}
        warrantyList={[
          {
            downloadUrl: "#",
            title: "Fi Warranty Guide Book",
          },
          {
            downloadUrl: "#",
            title: "Carburetor Warranty Guide Book",
          },
          {
            downloadUrl: "#",
            title: "Sports Machines Warranty Guide Book",
          },
        ]}
      />
    </div>
  );
};

export default HomePage;
