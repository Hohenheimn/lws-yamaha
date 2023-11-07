import React from "react";
import Image from "next/image";

type PropsType = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const SquareCard = (props: PropsType) => {
  return (
    <div className="p-6 flex text-white flex-col items-center min-w-[300px] flex-1 max-w-[400px] gap-4 text-center border border-white rounded-2xl">
      <div className="relative h-[100px] w-[200px]">
        <Image
          src={props.image}
          alt={props.title}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="text-xl font-semibold">{props.title}</h3>
      <p className="text-gray-400">{props.description}</p>
    </div>
  );
};

export default SquareCard;
