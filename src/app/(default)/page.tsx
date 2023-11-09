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
import PolicyAndGuidedbookSection from "@/components/sections/PolicyAndGuidedbookSection";
import ServiceDetailSection from "@/components/sections/ServiceDetailSection";
import YamahalubeCharacteristicSection from "@/components/sections/YamahalubeCharacteristicSection";
import YamahaTechnicalAcademySection from "@/components/sections/YamahaTechnicalAcademySection";
import YConnectSection from "@/components/sections/YConnectSection";
import YdtSection from "@/components/sections/YdtSection";
import Heading from "@/components/shared/Heading";
import AnnouncementModal from "@/components/shared/modal/AnnouncementModal";
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
      <ServiceDetailSection
        image={"/assets/images/samples/sample-service-1.png"}
        imagePosition={"right"}
        title="Owner's Manual & Warranty Guidebook"
        content={
          <aside>
            <p className=" text-textGray">
              Checkout details regarding your motorcycle of information about
              its warranty.
            </p>
          </aside>
        }
        url={"#"}
        urlTitle={"Grab a Copy"}
      />
      <ServiceDetailSection
        image={"/assets/images/samples/sample-service-2.png"}
        imagePosition={"left"}
        title="Experience service with Yamaha Advance Technology"
        content={
          <aside>
            <p className=" text-textGray">
              Lorem ipsum dolor sit amet consectetur. Sem eget in congue nisi
              sed lacinia viverra urna urna. Nec venenatis turpis massa
              vulputate egestas ultrices proin ac. Tempor gravida mattis nec
              tellus id sit mauris. Sit gravida massa et nisl habitant. Egestas
              aliquam diam mi faucibus maecenas volutpat. Velit tortor risus
              turpis sed pharetra aliquam morbi morbi. Tortor est varius diam
              tellus adipiscing.
            </p>
          </aside>
        }
        url={"#"}
        urlTitle={"Learn More"}
      />
      <ServiceDetailSection
        image={"/assets/images/samples/sample-service-2.png"}
        imagePosition={"left"}
        title="Choose only Original"
        content={
          <aside className=" space-y-5">
            <p className=" text-textGray">
              The one and only choice for maintaining the performance of Yamaha
              products. Genuine Yamaha parts must meet strict standards in all
              processes, from design to quality testing and manufacturing. They
              are the one and only choice for reaching and keeping 100%
              performance of Yamaha products.
            </p>
            <ul className=" flex gap-5 flex-wrap justify-center">
              <li className=" flex flex-col items-center justify-center">
                <aside className=" w-20 aspect-square relative">
                  <Image
                    src={"/assets/images/samples/reliability.png"}
                    alt="icon"
                    fill
                    sizes="(max-width: 768px) 5rem, (max-width: 1200px) 5rem, 5rem"
                    className=" object-contain"
                  />
                </aside>
                High Reliability
              </li>
              <li className=" flex flex-col items-center justify-center">
                <aside className=" w-20 aspect-square relative">
                  <Image
                    src={"/assets/images/samples/optimized.png"}
                    alt="icon"
                    fill
                    sizes="(max-width: 768px) 5rem, (max-width: 1200px) 5rem, 5rem"
                    className=" object-contain"
                  />
                </aside>
                Optimized Performance
              </li>
              <li className=" flex flex-col items-center justify-center">
                <aside className=" w-20 aspect-square relative">
                  <Image
                    src={"/assets/images/samples/quality.png"}
                    alt="icon"
                    fill
                    sizes="(max-width: 768px) 5rem, (max-width: 1200px) 5rem, 5rem"
                    className=" object-contain"
                  />
                </aside>
                Worldwide High Quality
              </li>
            </ul>
            <p className=" text-textGray">
              Only genuine Yamaha parts can bring out 100% performance in Yamaha
              products.
            </p>
          </aside>
        }
        url={"#"}
        urlTitle={"See Products"}
      />
      <YamahalubeCharacteristicSection
        url="#"
        title={"4 Characteristics of YAMAHALUBE"}
        image={"/assets/images/samples/sample-yamahalube.png"}
        characteristics={[
          {
            title:
              "Special locomotive oil developed by professional locomotive factory",
            description:
              "Developed by YAMAHA's professional team based on the characteristics and needs of locomotives and YAMAHA engines, so it can give full play to the best performance of YAMAHA engines.",
          },
          {
            title: "High power transmission",
            description:
              "High temperature oxidation stability, abrasion resistance, stable lubricity even under high-speed driving, and high power transmission performance.",
          },
          {
            title: "Low fuel consumption",
            description:
              "Using the most suitable base oil, in addition to suppressing the reduction in the amount of oil, it also suppresses the deterioration of the oil.",
          },
          {
            title: "Meets JASO MB specifications",
            description:
              "The JASO MB locomotive oil specification was formulated in 1998, and was revised in 2006 as a special oil test specification for locomotives. Based on the standard test of four-stroke engine oil,coupled with the friction performance test and high shear stability test standard specifically for the needs of locomotives, to ensure the quality of the manufacturer. In addition to meeting the JASO specifications, YAMALUBE has passed Yamaha’s internal standards that are stricter than the JASO specifications, so consumers can use it with peace of mind.",
            highlighted_footer:
              "(JASO = Japanese Automotive Standards Organization, Japanese Automotive Standards Organization specifications).",
          },
        ]}
      />
      <YamahaTechnicalAcademySection
        icon={"/assets/images/samples/sample-academy-star.png"}
        title={"Two Level"}
        description={
          "The YTA training program is split in two levels: YTA Bronze and Silver."
        }
        boxes={[
          {
            icon: "/assets/images/samples/sample-academy-star-bronze.png",
            title: "YTA Bronze",
            description:
              "YTA Bronze is a self-paced, correspondence training course designed to be completed by the candidate technician. To successfully complete this course, he must pass a wide-ranging test that covers the engine, drive-train, electrical and chassis systems and service procedures on Yamaha motorcycles.",
          },
          {
            icon: "/assets/images/samples/sample-academy-star-silver.png",
            title: "YTA Silver",
            description:
              "YTA Silver is a more comprehensive training course which focuses on advance system diagnosis and troubleshooting, providing hands-on learning using the latest products, tools and troubleshooting techniques.",
          },
        ]}
      />
      <YdtSection
        icon={"/assets/images/samples/sample-ydt-icon.png"}
        title={"Top 4 Benefits of Yamaha Diagnostic Tool 3"}
        image={"/assets/images/samples/sample-ydt-image.png"}
        content={[
          "Revitalized motorcycle after receiving preventive maintenance service and check-up with YDT3",
          "Reduced service waiting time",
          "Avoid incorrect parts replacement with accurate troubleshooting​",
          "Availability of digital view of MC inspection and repair ",
        ]}
      />
      <DealerSection />
    </div>
  );
};

export default HomePage;
