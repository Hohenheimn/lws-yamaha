import React from "react";
import Image from "next/image";

import ImageAndParagraph from "@/components/sections/ImageAndParagraph";

import Button from "@/components/shared/Button";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  image?: string;
  contentAlignment: "left" | "right" | "center";
  title?: string;
  content?: {
    type: "text" | "icons";
    value:
      | string
      | {
          icon: string;
          title: string;
        }[];
  }[];
  url?: string;
  urlTitle?: string;
};

const ServiceDetailSection = (props: PropsType) => {
  const { image, contentAlignment, title, content, url, urlTitle } = props;
  return (
    <SectionContainer
      width="narrow"
      className="flex flex-wrap lg:flex-nowrap gap-10 text-white"
    >
      <ImageAndParagraph
        title={title ?? ""}
        image={image ?? ""}
        button={{ title: urlTitle ?? "", url: url ?? "" }}
        contentAlignment={contentAlignment}
        content={content ?? []}
      />
    </SectionContainer>
  );
};

export default ServiceDetailSection;
