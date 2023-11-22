import React from "react";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  title?: string;
  paragraph: string;
};

const TitleAndParagraphSection = (props: PropsType) => {
  const { title, paragraph } = props;
  return (
    <SectionContainer
      width={"narrowest"}
      className=" text-white text-center space-y-5"
    >
      {title && (
        <Heading type={"h5"} className="font-medium">
          {title}
        </Heading>
      )}
      <p className=" text-textGray">{paragraph}</p>
    </SectionContainer>
  );
};

export default TitleAndParagraphSection;
