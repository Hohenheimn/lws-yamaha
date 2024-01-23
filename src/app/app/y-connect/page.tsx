import React from "react";

import YConnectSectionComponent from "@/app/components/_components/YConnectSectionComponent";
import Hero from "@/components/sections/Hero";

export const generateMetadata = () => {
  return {
    title: "Y-Connect",
    description: "",
  };
};

const YConnectPage = () => {
  return (
    <>
      <Hero
        desktopBgImage="/assets/images/samples/sample-y-connect-hero.png"
        textPosition={"center-left"}
        title="Y-CONNECT"
        isSeo={true}
        description={`Be one with your motorcycle. Experience a complete package of advanced features\nthat will redefine your ride.`}
      />
      <YConnectSectionComponent />
    </>
  );
};

export default YConnectPage;
