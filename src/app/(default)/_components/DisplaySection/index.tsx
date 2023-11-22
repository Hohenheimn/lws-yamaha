"use client";

import React from "react";

import dynamic from "next/dynamic";

import {
  motocycleCarousel,
  motocycleCarouselBB,
} from "@/data/motorcycle/motorcycleCarousel";
import news from "@/data/news";
import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";

import MotorcycleCarouselSectionComponent from "../MotorcycleCarouselSectionComponent";
import NewsGridSectionComponent from "../NewsGridSectionComponent";

const EmbedSocialSection = dynamic(
  () => import("@/app/components/_components/EmbedSocialSection")
);
const Hero = dynamic(() => import("@/components/sections/Hero"));
const MotorcycleCarouselSection = dynamic(
  () => import("@/components/sections/MotorcycleCarouselSection")
);
const NewsGridSection = dynamic(
  () => import("@/components/sections/NewsGridSection")
);
const YamahaLifeStyleStudioSection = dynamic(
  () => import("@/components/sections/YamahaLifeStyleStudioSection")
);
const ImageLinks = dynamic(() => import("@/components/sections/ImageLinks"));
const InquieryAndFindDealerButtons = dynamic(
  () => import("@/components/sections/InquieryAndFindDealerButtons")
);
const Loading = dynamic(() => import("@/components/shared/Loading"));
const AnnouncementModal = dynamic(
  () => import("@/components/shared/modals/AnnouncementModal")
);

type PropsType = {
  endpoint: string;
  queryName: string;
};

const DisplaySection = (props: PropsType) => {
  const { endpoint, queryName } = props;
  const { useGet } = useAPI(endpoint);
  const { data: page, isLoading: pageLoading }: any = useGet(queryName);
  const pageSections: any = page?.data;
  const imageBaseUrl = config.imageBaseUrl;

  if (pageLoading) {
    return <Loading />;
  }
  return (
    <>
      {/* <ServicesSection data={services} /> */}
      {pageSections?.map((section: any) => (
        <section key={section?.id}>
          {section?.sectionType === "hero-section" && (
            <Hero
              fullHeight={true}
              desktopBgImage={
                section?.backgroundImage?.includes("http") && section
                  ? section?.backgroundImage
                  : `${imageBaseUrl}${section?.backgroundImage}`
              }
              mobileBgImage={
                section?.backgroundImage?.includes("http")
                  ? section?.backgroundImage
                  : `${imageBaseUrl}${section?.backgroundImage}`
              }
              title={section?.title}
              description={section?.description}
              textPosition={"center"}
              scrollDown
            />
          )}
          {section?.sectionType === "vehicle-section" && (
            <MotorcycleCarouselSectionComponent
              vehicleIds={section.vehicleIds.join(",")}
              title={"Personal Commuter"}
              description={
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquam voluptate molestiae fuga architecto obcaecati dolorem blanditiis dolores, dolorum eveniet? Perferendis minima ullam ipsum sapiente veniam dolores facere quod dolorem."
              }
              image={"/assets/images/samples/homepage/bg-pc.png"}
              url={"#"}
            />
          )}
          {section?.sectionType === "news-section" && (
            <NewsGridSectionComponent
              newsIds={section?.newsArticleIds?.join(",")}
            />
          )}
          {section?.sectionType === "embed-social" && <EmbedSocialSection />}
          {section?.sectionType === "button-cards-section" && (
            <ImageLinks imageLinks={section?.buttonCards} />
          )}
        </section>
      ))}
      <InquieryAndFindDealerButtons />
    </>
  );
};

export default DisplaySection;
