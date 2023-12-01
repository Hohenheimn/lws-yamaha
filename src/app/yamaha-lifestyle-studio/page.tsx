import React from "react";

import Hero from "@/components/sections/Hero";

import InquieryAndFindDealerButtons from "@/components/sections/InquieryAndFindDealerButtons";

import ArrowTitle from "@/components/shared/ArrowTitle";

import EmbedSocialSection from "../components/_components/EmbedSocialSection";
import GridEmbedSocialSection from "../components/_components/GridEmbedSocialSection";

export const generateMetadata = () => {
  return {
    title: "Yamaha Lifestyle Studio",
    description: "",
  };
};

const YamahaLifestyleStudioPage = () => {
  return (
    <>
      <Hero
        desktopBgImage="/assets/images/samples/sample-y-connect-hero.png"
        textPosition={"center-left"}
        title="Y-CONNECT"
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
    </>
  );
};

export default YamahaLifestyleStudioPage;
