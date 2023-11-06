import React from "react";

import MotorcycleCard from "@/components/motorcycle/MotorcycleCard";

const MotorcycleCardComponent = () => {
  return (
    <div className=" w-[350px] ">
      <MotorcycleCard
        imageSrc={"/assets/images/placeholder.png"}
        description={{
          engine_type:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magnam adipisci consequuntur distinctio deleniti nulla ea! Non dolor reprehenderit recusandae. Nulla aperiam, deserunt voluptate vitae perspiciatis eos adipisci placeat perferendis.",
          frame_type:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magnam adipisci consequuntur distinctio deleniti nulla ea! Non dolor reprehenderit recusandae. Nulla aperiam, deserunt voluptate vitae perspiciatis eos adipisci placeat perferendis.",
          dimention:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magnam adipisci consequuntur distinctio deleniti nulla ea! Non dolor reprehenderit recusandae. Nulla aperiam, deserunt voluptate vitae perspiciatis eos adipisci placeat perferendis.",
        }}
        url={"#"}
        inheritWidth={false}
      />
    </div>
  );
};

export default MotorcycleCardComponent;
