import React from "react";

import Image from "next/image";

import Heading from "@/components/shared/Heading";

import ImageAndParagraph from "@/components/sections/ImageAndParagraph";

import SectionContainer from "../SectionContainer";

type PropsType = {
  title: string;
  image: string;
  content: {
    type: "text" | "list";
    value: string | string[];
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
        title={title}
        image={image}
        content={content}
        imagePosition={"right"}
      />
    </SectionContainer>
  );
};

export default CcuMyRideLinkSection;