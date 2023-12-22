import React from "react";
import Hero from "@/components/sections/Hero";
import InquieryAndFindDealerButtons from "@/components/sections/InquieryAndFindDealerButtons";
import ArrowTitle from "@/components/shared/ArrowTitle";
import GridEmbedSocialSection from "../components/_components/GridEmbedSocialSection";
import { createMetadata } from "@/utils/helpers";
import { Metadata } from "next";
import config from "@/utils/config";

export const metadata: Metadata = createMetadata({
  title: "Yamaha Lifestyle Studio",
  description:
    "Be one with your motorcycle. Experience a complete package of advanced features that will redefine your ride.",
  alternates: {
    canonical: `${config.apiNextBaseUrl}/yamaha-lifestyle-studio`,
  },
});

const YamahaLifestyleStudioPage = () => {
  return (
    <div className="bg-primary">
      <Hero
        desktopBgImage="/assets/images/samples/yamaha-life-style-studio.png"
        textPosition={"bottom-left"}
        title="Y-CONNECT"
        isSeo={true}
        description={`Be one with your motorcycle. Experience a complete package of advanced features\nthat will redefine your ride.`}
      />
      <section className=" mt-10 lg:mt-20">
        <ArrowTitle title="Instagram" />
        <GridEmbedSocialSection
          embedId={"8d78eb3ef179bccfe18f3e9bd3cb0e01e2252d6b"}
        />
      </section>

      <section className=" mt-10">
        <ArrowTitle title="Facebook" />
        <GridEmbedSocialSection
          embedId={"46528e56967326dd63c84579774f6e7ad836c217"}
        />
      </section>
      <InquieryAndFindDealerButtons />
    </div>
  );
};

export default YamahaLifestyleStudioPage;
