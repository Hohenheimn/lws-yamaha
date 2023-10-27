import React from "react";

import MotorcycleCarouselSection from "@/components/sections/MotorcycleCarouselSection";
import { motocycleCarousel } from "@/data/motorcycle/motorcycleCarousel";

const MotorcycleCarouselComponent = () => {
  return (
    <div className="">
      <MotorcycleCarouselSection
        title={"Big Bikes"}
        description={
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aliquam voluptate molestiae fuga architecto obcaecati dolorem blanditiis dolores, dolorum eveniet? Perferendis minima ullam ipsum sapiente veniam dolores facere quod dolorem."
        }
        motorcycle={motocycleCarousel}
        bgImage={"/assets/images/placeholder.png"}
        url={"#"}
      />
    </div>
  );
};

export default MotorcycleCarouselComponent;
