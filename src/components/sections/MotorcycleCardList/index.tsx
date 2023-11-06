import React, { ComponentProps } from "react";

import MotorcycleCard from "@/components/motorcycle/MotorcycleCard";

type PropsType = {
  motorcycles: Array<ComponentProps<typeof MotorcycleCard>>;
  nowrap: boolean;
};

const MotorcycleCardList = (props: PropsType) => {
  const { motorcycles, nowrap } = props;
  return (
    <ul
      className={` w-full ${
        nowrap ? "grid grid-cols-4" : "flex flex-wrap"
      } gap-5`}
    >
      {motorcycles?.map((item, indx) => (
        <li key={indx}>
          <MotorcycleCard
            imageSrc={item.imageSrc}
            description={item.description}
            url={item.url}
            inheritWidth={nowrap ? true : false}
          />
        </li>
      ))}
    </ul>
  );
};

export default MotorcycleCardList;
