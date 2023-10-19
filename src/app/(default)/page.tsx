import React from "react";

import CardUnit from "@/components/CardUnit";
import HeroBanner from "@/components/HeroBanner";

const HomePage = () => {
  return (
    <div>
      <HeroBanner
        height="large"
        imageSrc={"/images/samples/sample-banner.jpg"}
        title={"DESIGNED USING PURE TMAX DNA."}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dignissimos."
        }
        textWidth="medium"
        textPosition={"center"}
        scrollTo="#"
      />
    </div>
  );
};

export default HomePage;
