import React from "react";

import CardUnit from "./CardUnit";
import SectionContainer from "./SectionContainer";

function CarouselSection() {
  return (
    <SectionContainer className=" flex flex-col items-center">
      <aside className=" w-11/12 max-w-[60rem] text-center text-white">
        <h4 className=" mb-3">Personal Commuter</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          aliquam voluptate molestiae fuga architecto obcaecati dolorem
          blanditiis dolores, dolorum eveniet? Perferendis minima ullam ipsum
          sapiente veniam dolores facere quod dolorem.
        </p>
      </aside>
    </SectionContainer>
  );
}

export default CarouselSection;
