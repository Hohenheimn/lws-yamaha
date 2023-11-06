import React from "react";

import Hero from "@/components/sections/Hero";
import Heading from "@/components/shared/Heading";

const HeroComponent = () => {
  return (
    <div>
      <Hero
        fullHeight={false}
        imageSrc={"/assets/images/placeholder.png"}
        title={<Heading type="h2">{"INSIDE PAGES\nHERO BANNER."}</Heading>}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        textPosition={"bottom-left"}
      />
    </div>
  );
};

export default HeroComponent;
