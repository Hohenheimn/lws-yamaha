"use client";

import Hero from "@/components/sections/Hero";
import React, { ComponentProps } from "react";

type PropsType = Omit<ComponentProps<typeof Hero>, "title"> & {
  name: string;
};

const HeroSection = (props: PropsType) => {
  return (
    <Hero
      desktopBgImage={props.desktopBgImage}
      title={props.name}
      description={props.description}
      textPosition={"bottom-left"}
      isSeo={true}
    />
  );
};

export default HeroSection;
