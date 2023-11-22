import React from "react";
import Link from "next/link";
import { title } from "process";

import Button from "@/components/shared/Button";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  paragraph: string;
  downloadLink: string;
};

const ParagraphAndDownloadSection = (props: PropsType) => {
  const { paragraph, downloadLink } = props;
  return (
    <SectionContainer
      width={"narrow"}
      className=" text-white text-center space-y-5"
    >
      <Heading type="h5" className=" text-white font-medium">
        {paragraph}
      </Heading>
      <Link
        href={downloadLink}
        download={true}
        target="_blank"
        className="whitespace-nowrap inline-block duration-150 text-white font-medium rounded-lg px-16 py-3  text-xl bg-tertiary hover:bg-hover-tertiary"
      >
        Download Yamaha Warranty Policy
      </Link>
    </SectionContainer>
  );
};

export default ParagraphAndDownloadSection;
