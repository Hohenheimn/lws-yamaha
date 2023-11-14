import SquareCard from "@/components/service/SquareCard";
import Heading from "@/components/shared/Heading";
import React, { ComponentProps } from "react";

type PropsType = {
  features: Array<ComponentProps<typeof SquareCard>>;
};

const WhyChooseUsSectoin = (props: PropsType) => {
  return (
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
  );
};

export default WhyChooseUsSectoin;
