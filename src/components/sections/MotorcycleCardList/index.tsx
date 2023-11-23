import React, { ComponentProps } from "react";

import MotorcycleCard from "@/components/motorcycle/MotorcycleCard";

import SectionContainer from "../SectionContainer";

type PropsType = {
  motorcycles: Array<ComponentProps<typeof MotorcycleCard>>;
  nowrap: boolean;
};

const MotorcycleCardList = (props: PropsType) => {
  const { motorcycles, nowrap } = props;
  return (
    <SectionContainer width={"wide"}>
      <ul
        className={` w-full ${
          nowrap ? "grid grid-cols-4" : "flex flex-wrap justify-center"
        }  gap-10`}
      >
        {motorcycles?.map((item, indx) => (
          <li key={indx}>
            <MotorcycleCard
              imageSrc={item.imageSrc}
              features={item.features}
              url={item.url}
              inheritWidth={nowrap ? true : false}
              title={item.title}
            />
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default MotorcycleCardList;
