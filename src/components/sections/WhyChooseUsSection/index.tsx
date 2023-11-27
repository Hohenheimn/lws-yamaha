import React, { ComponentProps } from "react";

import SquareCard from "@/components/service/SquareCard";
import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  features: Array<ComponentProps<typeof SquareCard>>;
};

const WhyChooseUsSection = (props: PropsType) => {
  return (
    <SectionContainer width={"wide"}>
      <div className="flex flex-col text-white gap-5">
        <Heading type="h4" className="text-center">
          Why Choose Us?
        </Heading>
        <div className="flex gap-4 w-full flex-wrap justify-center">
          {props.features.map((_) => (
            <SquareCard key={_.id} {..._} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUsSection;
