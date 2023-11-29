import React from "react";

import DealerSection from "@/components/sections/DealerSection";
import Hero from "@/components/sections/Hero";
import InquieryAndFindDealerButtons from "@/components/sections/InquieryAndFindDealerButtons";

export const generateMetadata = () => {
  return {
    title: "Find Dealer",
    description: "",
  };
};

const FindDealer = () => {
  return (
    <>
      <Hero
        desktopBgImage="/assets/images/samples/sample-dealer-hero.png"
        textPosition={"bottom-left"}
        title="DEALER LOCATOR"
        description={`Lorem ipsum dolor sit amet consectetur. Malesuada non mauris pellentesque\naugue fermentum tristique nulla et. In vitae donec fringilla elit hendrerit aliquet`}
      />
      <DealerSection />
      <InquieryAndFindDealerButtons />
    </>
  );
};

export default FindDealer;
