"use client";

import React from "react";

import dynamic from "next/dynamic";

import PolicyAndGuidedbookSectionComponent from "@/app/components/_components/PolicyAndGuidedbookSectionComponent";
import YamahaTechnicalAcademySectionComponent from "@/app/components/_components/YamahaTechnicalAcademySectionComponent";

import ParagraphAndDownloadSection from "@/components/sections/ParagraphAndDownloadSection";

import PolicyAndGuidedbookSection from "@/components/sections/PolicyAndGuidedbookSection";

import ServiceDetailSection from "@/components/sections/ServiceDetailSection";

import YamahaTechnicalAcademySection from "@/components/sections/YamahaTechnicalAcademySection";

import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";

import { SectionTypes } from "./sectionTypes";

const NewsGridSectionComponent = dynamic(
  () => import("../NewsGridSectionComponent")
);

const MotorcycleCarouselSectionComponent = dynamic(
  () => import("../MotorcycleCarouselSectionComponent")
);

const EmbedSocialSection = dynamic(
  () => import("@/app/components/_components/EmbedSocialSection")
);
const Hero = dynamic(() => import("@/components/sections/Hero"));
const ImageLinks = dynamic(() => import("@/components/sections/ImageLinks"));
const InquieryAndFindDealerButtons = dynamic(
  () => import("@/components/sections/InquieryAndFindDealerButtons")
);
const Loading = dynamic(() => import("@/components/shared/Loading"));

const AnnouncementModal = dynamic(
  () => import("@/components/shared/modals/AnnouncementModal")
);
const MotorcycleCarouselSection = dynamic(
  () => import("@/components/sections/MotorcycleCarouselSection")
);
const NewsGridSection = dynamic(
  () => import("@/components/sections/NewsGridSection")
);
const YamahaLifeStyleStudioSection = dynamic(
  () => import("@/components/sections/YamahaLifeStyleStudioSection")
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
      {pageSections?.map((section: SectionTypes) => (
        <section key={section?.id}>
          {section?.sectionType === "hero-section" && (
            <Hero
              fullHeight={section?.fullScreen}
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
              textPosition={
                section?.alignContentHorizontal && section?.alignContentVertical
                  ? `${section?.alignContentVertical}-${section?.alignContentHorizontal}`
                  : "center-center"
              }
              imageTitleUrl={section?.image}
              scrollDown={section?.scrollDown}
            />
          )}
          {section?.sectionType === "vehicle-section" && (
            <MotorcycleCarouselSectionComponent
              vehicleIds={section?.vehicleIds?.join(",")}
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
          {section?.sectionType === "text-section" && (
            <ParagraphAndDownloadSection
              paragraph={section?.description}
              textAlignment={section?.alignContentHorizontal}
              downloadLink={section?.url}
              labelUrl={section?.urlLabel}
            />
          )}
          {section?.sectionType === "warranty-guide-book-section" && (
            <PolicyAndGuidedbookSection
              image={
                section?.image?.includes("http") && section
                  ? section?.image
                  : `${imageBaseUrl}${section?.image}`
              }
              warrantyList={section?.contents}
            />
          )}
          {section?.sectionType === "service-detail-section" && (
            <ServiceDetailSection
              image={
                section?.image?.includes("http") && section
                  ? section?.image
                  : `${imageBaseUrl}${section?.image}`
              }
              imagePosition={"left"}
              title={section?.title}
              content={[
                {
                  type: "text",
                  value: section?.description,
                },
                ...section?.contents,
              ]}
              url={section?.url}
              urlTitle={section?.urlLabel}
            />
          )}
          {section?.sectionType === "yamaha-technical-academy-section" && (
            <YamahaTechnicalAcademySection
              icon={"/assets/images/samples/sample-academy-star.png"}
              title={section?.title}
              description={section?.description}
              boxes={section?.contents}
            />
          )}
        </section>
      ))}

      <InquieryAndFindDealerButtons />
    </>
  );
};

export default DisplaySection;
