import React from "react";

import MotorcycleCard, {
  MotorcycleCardType,
} from "@/components/Motorcycle/MotorcycleCard";

type PropsType = {
  motorcycles: MotorcycleCardType[];
  nowrap: boolean;
};

function MotorcycleCardList(props: PropsType) {
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
}

export default MotorcycleCardList;
