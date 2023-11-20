import React from "react";
import Image from "next/image";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  image: string;
  title: string;
  paragraphs: string[];
};

const AssuranceAndConfidenceSection = (props: PropsType) => {
  const { image, title, paragraphs } = props;
  return (
    <SectionContainer width={"wide"} className=" space-y-10">
      <aside className=" w-full aspect-[4/1] relative">
        <Image src={image} alt="image" fill className=" object-cover" />
      </aside>
      <article className=" space-y-5 text-[#FFFFFF]">
        <Heading type="h5" className=" font-medium">
          {title}
        </Heading>
        <div className="space-y-5 two-col-paragraph">
          {paragraphs.map((paragraph, indx) => (
            <p key={indx}>{paragraph}</p>
          ))}
        </div>
      </article>
    </SectionContainer>
  );
};

export default AssuranceAndConfidenceSection;
