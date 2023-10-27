import React from "react";
import Image from "next/image";
import Link from "next/link";

import Heading from "@/components/shared/Heading";

export type MotorcycleCardType = {
  imageSrc: string;
  description: {
    engine_type: string;
    frame_type: string;
    dimention: string;
  };
  url: string;
  inheritWidth?: boolean;
};

function MotorcycleCard({
  imageSrc,
  description,
  url,
  inheritWidth,
}: MotorcycleCardType) {
  return (
    <ul className={` relative flex flex-col ${!inheritWidth && "w-[300px]"}`}>
      <li className="w-full flex justify-center relative after:content-[''] after:absolute after:w-full after:bottom-0 after:left-0 after:h-[40%] after:bg-white after:rounded-tl-xl  after:rounded-tr-xl">
        <aside className=" w-[272px] aspect-square relative">
          <Image
            src={imageSrc}
            fill
            className="z-10 object-contain"
            alt="vehicle"
          />
        </aside>
      </li>
      <li className=" h-[325px] flex flex-col justify-between rounded-br-md rounded-bl-md px-3 py-6 bg-secondary text-white">
        <aside className="space-y-5">
          <Heading type="h5">Mio Gravis</Heading>
          <ul className=" grid gap-2 grid-cols-5">
            <li className=" col-span-2 text-cs-xs font-medium">Engine Type:</li>
            <li className=" line-clamp-2 col-span-3 text-cs-xs text-gray-300">
              {description.engine_type}
            </li>
            <li className=" col-span-2 text-cs-xs font-medium">Frame Type:</li>
            <li className=" line-clamp-1 col-span-3 text-cs-xs text-gray-300">
              {description.frame_type}
            </li>
            <li className=" col-span-2 text-cs-xs font-medium">Dimension:</li>
            <li className=" line-clamp-2 col-span-3 text-cs-xs text-gray-300">
              {description.dimention}
            </li>
          </ul>
        </aside>
        <aside className="flex w-full justify-center">
          <Link
            href={url}
            className=" bg-tertiary hover:bg-hover-tertiary duration-150 text-white px-5 py-2 rounded-3xl text-cs-xs font-medium"
          >
            View Model
          </Link>
        </aside>
      </li>
    </ul>
  );
}

export default MotorcycleCard;
