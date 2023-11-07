import React from "react";

import MotorcycleCardList from "@/components/sections/MotorcycleCardList";
import { motocycleCarousel } from "@/data/motorcycle/motorcycleCarousel";

const MotorcycleCardListComponent = () => {
  return (
    <div>
      <MotorcycleCardList motorcycles={motocycleCarousel} nowrap={false} />
    </div>
  );
};

export default MotorcycleCardListComponent;
