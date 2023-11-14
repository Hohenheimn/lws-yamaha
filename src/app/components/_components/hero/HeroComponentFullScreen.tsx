import React from "react";

import Hero from "@/components/sections/Hero";
import Heading from "@/components/shared/Heading";

const HeroComponentFullScreen = () => {
  return (
    <div>
      <Hero
        fullHeight={true}
        desktopBgImage={"/assets/images/samples/sample-banner.jpg"}
        mobileBgImage={"/assets/images/samples/sample-banner.jpg"}
        title={<Heading type="h2">{`HOMEPAGE \n HERO BANNER`}</Heading>}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        textPosition={"center"}
        scrollTo="#personal-commuter"
      />
    </div>
  );
};

export default HeroComponentFullScreen;
