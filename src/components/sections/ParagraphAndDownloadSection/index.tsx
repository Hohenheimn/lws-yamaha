import React from "react";
import Link from "next/link";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";
import config from "@/utils/config";

type PropsType = {
  title?: string;
  paragraph?: string;
  downloadLink?: string;
  labelUrl?: string;
  textAlignment?: "left" | "center" | "right";
};

const ParagraphAndDownloadSection = (props: PropsType) => {
  const { title, paragraph, downloadLink, labelUrl, textAlignment } = props;
  return (
    <SectionContainer
      width={"wide"}
      className={` text-white space-y-5 ${
        textAlignment === "left" && "text-start"
      } ${textAlignment === "center" && "text-center"} ${
        textAlignment === "right" && "text-end"
      }`}
    >
      {title && (
        <Heading type="h5" className=" text-white font-medium">
          {title}
        </Heading>
      )}

      {paragraph && (
        <p className="w-full text-white whitespace-pre-wrap xl:mx-auto max-w-[1300px]">
          {paragraph}
        </p>
      )}

      {labelUrl && (
        <Link
          href={`${config.imageBaseUrl}${downloadLink}`}
          download={true}
          target="_blank"
          className="text-center w-full p-3 inline-block duration-150 text-white font-medium rounded-lg md:whitespace-nowrap md:px-12 md:py-3 md:w-1/3  bg-tertiary hover:bg-hover-tertiary"
        >
          {labelUrl}
        </Link>
      )}
    </SectionContainer>
  );
};

export default ParagraphAndDownloadSection;
