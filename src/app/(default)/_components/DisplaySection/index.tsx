"use client";

import React from "react";

import EmbedSocialSection from "@/app/components/_components/EmbedSocialSection";
import Hero from "@/components/sections/Hero";
import MotorcycleCarouselSection from "@/components/sections/MotorcycleCarouselSection";
import NewsGridSection from "@/components/sections/NewsGridSection";
import YamahaLifeStyleStudioSection from "@/components/sections/YamahaLifeStyleStudioSection";
import ImageLinks from "@/components/shared/ImageLinks";
import InquieryAndFindDealerButtons from "@/components/shared/InquieryAndFindDealerButtons";
import Loading from "@/components/shared/Loading";
import AnnouncementModal from "@/components/shared/modals/AnnouncementModal";
import {
  motocycleCarousel,
  motocycleCarouselBB,
} from "@/data/motorcycle/motorcycleCarousel";
import news from "@/data/news";
import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";

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
      {pageSections?.map((section: any) => (
        <section key={section?.id}>
          {section?.sectionType === "hero-section" && (
            <Hero
              fullHeight={true}
              desktopBgImage={
                section?.backgroundImage.includes("http")
                  ? section?.backgroundImage
                  : `${imageBaseUrl}${section?.backgroundImage}`
              }
              mobileBgImage={
                section?.backgroundImage.includes("http")
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
            <MotorcycleCarouselSection
              title={"Personal Commuter"}
              description={
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquam voluptate molestiae fuga architecto obcaecati dolorem blanditiis dolores, dolorum eveniet? Perferendis minima ullam ipsum sapiente veniam dolores facere quod dolorem."
              }
              motorcycle={motocycleCarousel}
              desktopBgImage={"/assets/images/samples/homepage/bg-pc.png"}
              url={"#"}
            />
          )}
          {section?.sectionType === "news-section" && (
            <NewsGridSection
              news={news.map((data) => ({
                ...data,
                onClick: () => console.log(data),
              }))}
              onViewAll={() => {}}
            />
          )}
          {section?.sectionType === "embed-social" && <EmbedSocialSection />}
          {section?.sectionType === "button-cards-section" && (
            <div className="mt-16">
              <ImageLinks />
            </div>
          )}
        </section>
      ))}
      <InquieryAndFindDealerButtons />
    </>
  );
};

export default DisplaySection;
