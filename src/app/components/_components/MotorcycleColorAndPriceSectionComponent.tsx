import React from "react";

import MotorcycleColorAndPriceSection from "@/components/sections/MotorcycleColorAndPriceSection";

const MotorcycleColorAndPriceSectionComponent = () => {
  return (
    <div>
      <MotorcycleColorAndPriceSection
        colors={["red", "blue", "violet", "black"]}
        motorcycleImage={"/assets/images/placeholder.png"}
        motorcycleName="Race Blue"
        titleImage={"/assets/images/samples/sample-title.png"}
        backgroundImage={"/assets/images/placeholder.png"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima repellat id nihil nisi officia sequi delectus natus, facere exercitationem voluptatibus culpa porro necessitatibus, tempora velit a ratione dolores quidem."
        }
        price={124000}
      />
    </div>
  );
};

export default MotorcycleColorAndPriceSectionComponent;
