"use client";

import SectionContainer from "@/components/sections/SectionContainer";
import GridEmbedSection from "@/components/shared/EmbedSocials/GridEmbedSection";

type PropsType = {
  embedId: string;
};

const GridEmbedSocialSection = (props: PropsType) => {
  const { embedId } = props;
  return (
    <SectionContainer width={"wide"}>
      <GridEmbedSection embedId={embedId} />
    </SectionContainer>
  );
};

export default GridEmbedSocialSection;
