import React from "react";

import Hero from "@/components/Hero";

const HeroComponent = () => {
  return (
    <div>
      <Hero
        fullHeight={false}
        imageSrc={"/assets/images/placeholder.png"}
        title={
          <h2>
            INSIDE PAGES
            <br />
            HERO BANNER.
          </h2>
        }
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        textPosition={"bottom-left"}
      />
    </div>
  );
};

export default HeroComponent;
