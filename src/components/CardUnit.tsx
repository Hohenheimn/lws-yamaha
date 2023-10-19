import React from "react";
import Image from "next/image";
import Link from "next/link";

export type cardUnitType = {
  imageSrc: string;
  description: {
    engine_type: string;
    frame_type: string;
    dimention: string;
  };
  url: string;
};

function CardUnit({ imageSrc, description, url }: cardUnitType) {
  return (
    <ul className="w-full h-full relative flex flex-col">
      <li className=" w-full aspect-[1.8/1] relative after:content-[''] after:absolute after:w-full after:bottom-0 after:left-0 after:h-[40%] after:bg-white after:rounded-tl-lg  after:rounded-tr-lg">
        <Image
          src={imageSrc}
          fill
          className=" object-contain z-10"
          alt="unit"
        />
      </li>
      <li className=" flex-1 bg-secondary text-white py-8 px-5 space-y-5 rounded-bl-lg rounded-br-lg flex flex-col justify-between">
        <aside className="space-y-5">
          <h5>Mio Gravis</h5>
          <ul className=" grid gap-2 grid-cols-5">
            <li className=" col-span-2 text-cs-xs font-montserrat-medium">
              Engine Type:
            </li>
            <li className=" col-span-3 text-cs-xs text-gray-300">
              {description.engine_type}
            </li>
            <li className=" col-span-2 text-cs-xs font-montserrat-medium">
              Frame Type:
            </li>
            <li className=" col-span-3 text-cs-xs text-gray-300">
              {description.frame_type}
            </li>
            <li className=" col-span-2 text-cs-xs font-montserrat-medium">
              Dimension:
            </li>
            <li className=" col-span-3 text-cs-xs text-gray-300">
              {description.dimention}
            </li>
          </ul>
        </aside>
        <aside className="flex w-full justify-center">
          <Link
            href={url}
            className=" bg-tertiary hover:bg-hover-tertiary duration-150 text-white px-5 py-2 rounded-3xl text-cs-xs font-montserrat-medium"
          >
            View Model
          </Link>
        </aside>
      </li>
    </ul>
  );
}

export default CardUnit;
