import React from "react";

import Hero from "@/components/sections/Hero";

// import Heading from "@/components/shared/Heading";

const HeroComponent = () => {
  return (
    <Hero
      fullHeight={false}
      imageSrc={"/assets/images/placeholder.png"}
      // title={<Heading type="h2">{"INSIDE PAGES\nHERO BANNER."}</Heading>}
      title="qwew"
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      textPosition={"bottom-left"}
    />
  );
};

export default HeroComponent;
