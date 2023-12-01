"use client";

import React from "react";

import ImageAndParagraph from "@/components/sections/ImageAndParagraph";

import SectionContainer from "../SectionContainer";

type PropsType = {
  title: string;
  image: string;
  content: {
    type: "text" | "list";
    value: string | { title: string; description: string }[];
  }[];
};

const CcuMyRideLinkSection = (props: PropsType) => {
  const { title, image, content } = props;
  return (
    <SectionContainer
      bgColor="#131313"
      width="narrow"
      className="flex justify-center"
    >
      <ImageAndParagraph
        autoImage
        title={title}
        image={image}
        content={content}
        contentAlignment={"left"}
      />
    </SectionContainer>
  );
};

export default CcuMyRideLinkSection;
