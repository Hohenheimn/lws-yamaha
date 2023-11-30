import React from "react";

import CcuMyRideLinkSectionComponent from "@/app/components/_components/CcuMyRideLinkSectionComponent";
import CcuUpdatingProcedureSectionComponenet from "@/app/components/_components/CcuUpdatingProcedureSectionComponenet";
import Hero from "@/components/sections/Hero";

export const generateMetadata = () => {
  return {
    title: "CCU",
    description: "",
  };
};

const page = () => {
  return (
    <>
      <Hero
        desktopBgImage="/assets/images/samples/sample-ccu-hero.png"
        textPosition={"center-left"}
        title={`THE NEW CCU\nTECHNOLOGY`}
        description={`Lorem ipsum dolor sit amet consectetur. Malesuada non mauris pellentesque\naugue fermentum tristique nulla et. In vitae donec fringilla elit hendrerit aliquet`}
      />
      <CcuMyRideLinkSectionComponent />
      <CcuUpdatingProcedureSectionComponenet />
    </>
  );
};

export default page;
