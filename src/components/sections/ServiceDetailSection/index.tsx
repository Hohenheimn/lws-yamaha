import React from "react";
import Image from "next/image";

import Button from "@/components/shared/Button";

import Heading from "@/components/shared/Heading";

import ImageAndParagraph from "@/components/sections/ImageAndParagraph";

import SectionContainer from "../SectionContainer";

type PropsType = {
  image: string;
  imagePosition: "left" | "right";
  title: string;
  content: {
    type: "text" | "icons";
    value:
      | string
      | {
          icon: string;
          title: string;
        }[];
  }[];
  url: string;
  urlTitle: string;
};

const ServiceDetailSection = (props: PropsType) => {
  const { image, imagePosition, title, content, url, urlTitle } = props;
  return (
    <SectionContainer
      width="narrow"
      className="flex flex-wrap lg:flex-nowrap gap-10 text-white"
    >
      <ImageAndParagraph
        title={title}
        image={image}
        button={{ title: urlTitle, url: url }}
        imagePosition={imagePosition}
        content={content}
      />
    </SectionContainer>
  );
};

export default ServiceDetailSection;
