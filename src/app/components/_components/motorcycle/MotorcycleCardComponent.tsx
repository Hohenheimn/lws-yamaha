import React from "react";

import MotorcycleCard from "@/components/motorcycle/MotorcycleCard";

const MotorcycleCardComponent = () => {
  return (
    <div className=" w-[350px] ">
      <MotorcycleCard
        imageSrc={"/assets/images/samples/homepage/pc-1.png"}
        features={["Tough Design", "Electric Power Socket", "Blue Core Engine"]}
        url={"#"}
        inheritWidth={false}
      />
    </div>
  );
};

export default MotorcycleCardComponent;
