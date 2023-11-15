import React from "react";

import Hero from "@/components/sections/Hero";
import Heading from "@/components/shared/Heading";

const HeroComponent = () => {
  return (
    <div>
      <Hero
        fullHeight={false}
        desktopBgImage={"/assets/images/samples/sample-banner-inside.jpg"}
        mobileBgImage={"/assets/images/samples/sample-banner-inside.jpg"}
        title={<Heading type="h2">{"INSIDE PAGES\nHERO BANNER."}</Heading>}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        textPosition={"bottom-left"}
        imageTitle="/assets/images/samples/sample-yamahalube-icon.png"
        readMore="#"
      />
    </div>
  );
};

export default HeroComponent;
