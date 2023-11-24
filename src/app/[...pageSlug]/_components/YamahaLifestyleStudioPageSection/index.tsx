import YamahaLifeStyleStudioSection from "@/components/sections/YamahaLifeStyleStudioSection";
import React from "react";

type PropsType = Partial<{
  title: string;
  description: string;
  url: string;
  urlLabel: string;
  contents: Array<{
    name: string;
    embedSocialId: string;
  }>;
}>;

const YamahaLifestyleStudioPageSection = (props: PropsType) => {
  return (
    <YamahaLifeStyleStudioSection
      title={props?.title}
      subTitle={props.description}
      button={{
        onClick: () => {},
        text: `${props?.urlLabel}`,
      }}
      embedSocials={props.contents?.map((content) => ({
        embedSocialId: content.embedSocialId,
        title: content.name,
      }))}
    />
  );
};

export default YamahaLifestyleStudioPageSection;
