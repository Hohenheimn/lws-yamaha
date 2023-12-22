import Hero from "@/components/sections/Hero";
import config from "@/utils/config";
import React from "react";

type PropsType = APIVechicleType;

const HeroSection = (props: PropsType) => {
  return (
    <Hero
      desktopBgImage={`${config.imageBaseUrl}${props.desktopImage}`}
      title={props.title}
      description={props.description}
      textPosition={"bottom-left"}
      isSeo={true}
    />
  );
};

export default HeroSection;
