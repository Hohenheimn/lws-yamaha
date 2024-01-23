"use client";

import React from "react";
import dynamic from "next/dynamic";

import GridEmbedSocialSection from "@/app/components/_components/GridEmbedSocialSection";
import BlogSection from "@/components/sections/BlogSection";
import ParagraphAndDownloadSection from "@/components/sections/ParagraphAndDownloadSection";
import PolicyAndGuidedbookSection from "@/components/sections/PolicyAndGuidedbookSection";
import PrivacyPolicySection from "@/components/sections/PrivacyPolicySection";
import ServiceDetailSection from "@/components/sections/ServiceDetailSection";
import VideoSection from "@/components/sections/VideoSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

import YamahaHistorySection from "@/components/sections/YamahaHistorySection";
import YamahalubeCharacteristicSection from "@/components/sections/YamahalubeCharacteristicSection";
import YamahaTechnicalAcademySection from "@/components/sections/YamahaTechnicalAcademySection";

import YdtSection from "@/components/sections/YdtSection";

import ArrowTitle from "@/components/shared/ArrowTitle";

import AnnouncementModal from "@/components/shared/modals/AnnouncementModal";
import useAPI from "@/hooks/useAPI";
import validateImageUrl from "@/utils/validateImageUrl";

import ImageTwoColParagraph from "../ImageTwoColParagraphSection";
import OurServicesComponent from "../OurServicesComponent";
import PageSectionType from "../PageSectionType";
import { SectionTypes } from "./sectionTypes";

const NewsGridSectionComponent = dynamic(
  () => import("../NewsGridSectionComponent")
);
const MotorcycleCarouselSectionComponent = dynamic(
  () => import("../MotorcycleCarouselSectionComponent")
);
const Hero = dynamic(() => import("@/components/sections/Hero"));
const ImageLinks = dynamic(() => import("@/components/sections/ImageLinks"));
const Loading = dynamic(() => import("@/components/shared/Loading"));

const YamahaLifestyleStudioPageSection = dynamic(
  () => import("../YamahaLifestyleStudioPageSection")
);
type PropsType = {
  endpoint: string;
  queryName: string;
  slug: string;
};

const DisplaySection = (props: PropsType) => {
  const { endpoint, queryName } = props;
  const { useGet }: any = useAPI(endpoint);
  const { data: page, isLoading: pageLoading }: any = useGet(queryName);
  const pageSections: any = page?.data;

  if (pageLoading) {
    return <Loading />;
  }

  const renderSection = (section: any, index: number) => {
    switch (section.sectionType) {
      case PageSectionType.lifestyleStudio:
        return (
          <YamahaLifestyleStudioPageSection
            {...section}
            url={section.url}
            key={section.id}
          />
        );
      case PageSectionType.imageTwoColParagraph:
        return <ImageTwoColParagraph {...section} key={section.id} />;
      case PageSectionType.heroSection:
        return (
          <Hero
            fullHeight={section?.fullScreen}
            button={{
              text: section.urlLabel,
              url: section.url,
              isDownload: section.isUrlDownload,
            }}
            desktopBgImage={
              section?.backgroundImage
                ? validateImageUrl(section?.backgroundImage)
                : ""
            }
            isSeo={index === 0}
            mobileBgImage={
              section?.backgroundImage
                ? validateImageUrl(section?.backgroundImage)
                : ""
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
            imageContent={
              section?.imageContent
                ? validateImageUrl(section?.imageContent)
                : ""
            }
          />
        );
      case PageSectionType.vehicleSection:
        return (
          <MotorcycleCarouselSectionComponent
            vehicleIds={section?.vehicleIds?.join(",")}
            title={section?.title}
            description={section?.description}
            image={validateImageUrl(section?.backgroundImage)}
            url={section?.url}
          />
        );
      case PageSectionType.newsSection:
        return (
          <NewsGridSectionComponent
            newsIds={section?.newsArticleIds?.join(",")}
          />
        );

      case PageSectionType.buttonCardsSection:
        return <ImageLinks imageLinks={section?.buttonCards} />;

      case PageSectionType.textSection:
        return (
          <ParagraphAndDownloadSection
            title={section?.title}
            paragraph={section?.description}
            textAlignment={section?.alignContentHorizontal}
            downloadLink={section?.url}
            labelUrl={section?.urlLabel}
          />
        );

      case PageSectionType.warrantyGuideBookSection:
        return (
          <PolicyAndGuidedbookSection
            image={validateImageUrl(section?.image)}
            warrantyList={section?.contents}
          />
        );

      case PageSectionType.serviceDetailSection:
        return (
          <ServiceDetailSection
            image={validateImageUrl(section?.image)}
            contentAlignment={section?.alignContentHorizontal}
            title={section?.title}
            description={section?.description}
            content={[
              {
                type: "list",
                value: section?.contents?.map(
                  (content: { title: string; description: string }) => {
                    return {
                      title: content.title,
                      description: content.description,
                    };
                  }
                ),
              },
              {
                type: "icons",
                value: section?.contents?.map((content: any) => {
                  return {
                    icon: content.image ? validateImageUrl(content.image) : "",
                    title: content.label,
                  };
                }),
              },
            ]}
            url={section?.url}
            urlTitle={section?.urlLabel}
          />
        );
      case PageSectionType.yamahaTechnicalAcademySection:
        return (
          <YamahaTechnicalAcademySection
            icon={"/assets/images/samples/sample-academy-star.png"}
            title={section?.title}
            description={section?.description}
            boxes={section?.contents}
          />
        );

      case PageSectionType.yamalubeCharacteristicSection:
        return (
          <YamahalubeCharacteristicSection
            title={section?.title}
            image={validateImageUrl(section?.image)}
            characteristics={section?.contents}
            url={section?.url}
          />
        );

      case PageSectionType.videoSection:
        return (
          <VideoSection
            youtubeUrl={section?.video}
            description={section?.description}
            title={section?.title}
            imagePreview={section?.image}
            isSeo={index === 0}
          />
        );

      case PageSectionType.ydtSection:
        return (
          <YdtSection
            icon={"/assets/images/ydt/ydt-icon.png"}
            title={section?.title}
            image={validateImageUrl(section?.image)}
            content={section?.contents}
          />
        );

      case PageSectionType.ourServiceSection:
        return <OurServicesComponent />;

      case PageSectionType.whyChooseUsSection:
        return (
          <WhyChooseUsSection
            features={section?.contents.map(
              (
                item: { image: string; title: string; description: string },
                index: any
              ) => {
                return {
                  id: index,
                  image: validateImageUrl(item?.image),
                  title: item?.title,
                  description: item?.description,
                };
              }
            )}
          />
        );

      case PageSectionType.blogSection:
        return (
          <BlogSection
            blog={{
              id: Number(section?.id),
              backgroundImage: validateImageUrl(section?.backgroundImage),
              title: section?.title,
              description: section?.description,
            }}
          />
        );
      case PageSectionType.yamahaHistorySection:
        return <YamahaHistorySection newsData={section?.contents} />;

      case PageSectionType.privacyPolicySection:
        return (
          <PrivacyPolicySection
            title={section?.title}
            content={section?.contents}
            isSeo={index === 0}
          />
        );

      case PageSectionType.embedSocialSection:
        return (
          <section className=" mt-10 lg:mt-20">
            <ArrowTitle title={section?.title} />
            {section?.contents.map((item: any, indx: any) => (
              <GridEmbedSocialSection key={indx} embedId={item} />
            ))}
          </section>
        );
    }
  };

  const renderAnnoucementModal = () => {
    if (!["home", "", "/"].includes(props.slug)) return;
    return (
      <AnnouncementModal desktopImage={"/assets/images/announcement.jpg"} />
    );
  };

  return (
    <>
      {pageSections?.map((section: SectionTypes, index: number) => (
        <section key={section?.id}>{renderSection(section, index)}</section>
      ))}
      {/* <InquieryAndFindDealerButtons /> */}
    </>
  );
};

export default DisplaySection;
