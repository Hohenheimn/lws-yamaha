import React from "react";
import Link from "next/link";
import { title } from "process";

import Button from "@/components/shared/Button";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  paragraph?: string;
  downloadLink?: string;
  labelUrl?: string;
  textAlignment?: "left" | "center" | "right";
};

const ParagraphAndDownloadSection = (props: PropsType) => {
  const { paragraph, downloadLink, labelUrl, textAlignment } = props;
  return (
    <SectionContainer
      width={"narrow"}
      className={` text-white space-y-5 ${
        textAlignment === "left" && "text-start"
      } ${textAlignment === "center" && "text-center"} ${
        textAlignment === "right" && "text-end"
      }`}
    >
      <Heading type="h5" className=" text-white font-medium">
        {paragraph}
      </Heading>
      <Link
        href={downloadLink ? downloadLink : ""}
        download={true}
        target="_blank"
        className="whitespace-nowrap inline-block duration-150 text-white font-medium rounded-lg px-16 py-3  text-xl bg-tertiary hover:bg-hover-tertiary"
      >
        {labelUrl}
      </Link>
    </SectionContainer>
  );
};

export default ParagraphAndDownloadSection;
