import React from "react";

import MotorcycleColorAndPriceSection from "@/components/sections/MotorcycleColorAndPriceSection";

const MotorcycleColorAndPriceSectionComponent = () => {
  return (
    <MotorcycleColorAndPriceSection
      motorcycle_detail={[
        {
          id: 1,
          color: "#1e1e1e",
          motorcycleImage: "/assets/images/samples/sample-unit -2.png",
          motorcycleName: "Race Black",
          titleImage: "/assets/images/samples/sample-title.png",
          desktopBgImage: "/assets/images/samples/sample-color-price.png",

          description:
            "Lorem ipsum dolor sit  facere exercitationem voluptatibus culpa porro necessitatibus, tempora velit a ratione dolores quidem.",
          price: 155800,
        },
        {
          id: 2,
          color: "#01b1e9",
          motorcycleImage: "/assets/images/placeholder.png",
          motorcycleName: "Race Blue",
          titleImage: "/assets/images/samples/sample-title.png",
          desktopBgImage: "/assets/images/samples/sample-color-price.png",
          mobileBgImage: "/assets/images/samples/sample-screen-banner.png",
          description:
            "Lorem ipsum dolor sit  repellat id nihil nisi officia sequi delectus natus, facere exercitationem voluptatibus culpa porro necessitatibus, tempora velit a ratione dolores quidem.",
          price: 1000000,
        },
        {
          id: 3,
          color: "#a0afcc",
          motorcycleImage: "/assets/images/placeholder.png",
          motorcycleName: "Race Gray",
          titleImage: "/assets/images/samples/sample-title.png",
          desktopBgImage: "/assets/images/samples/sample-color-price.png",
          mobileBgImage: "/assets/images/samples/sample-screen-banner.png",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima repellat id nihil nisi officia sequi delectus natus, facere exercitationem voluptatibus culpa porro necessitatibus, tempora velit a ratione dolores quidem.",
          price: 95000,
        },
      ]}
    />
  );
};

export default MotorcycleColorAndPriceSectionComponent;
