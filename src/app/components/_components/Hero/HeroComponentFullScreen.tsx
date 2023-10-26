import React from "react";

import Hero from "@/components/Hero";

const HeroComponentFullScreen = () => {
  return (
    <div>
      <Hero
        fullHeight={true}
        imageSrc={"/assets/images/placeholder.png"}
        title={
          <h2>
            HOMEPAGE
            <br />
            HERO BANNER
          </h2>
        }
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        textPosition={"center"}
        scrollTo="#personal-commuter"
      />
    </div>
  );
};

export default HeroComponentFullScreen;
