import React from "react";
import Image from "next/image";
import Link from "next/link";

import Heading from "@/components/shared/Heading";
import classNames from "classnames";

type MotorcycleCardType = {
  imageSrc: string;
  features: string[];
  url: string;
  inheritWidth?: boolean;
  title: string;
};

const MotorcycleCard = (props: MotorcycleCardType) => {
  const { imageSrc, features, url, inheritWidth, title } = props;

  return (
    <ul
      className={classNames(
        "relative flex flex-col h-[70vh]",
        !inheritWidth && "w-[300px]"
      )}
    >
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
      <li className=" h-[18rem] flex flex-col justify-between rounded-br-md rounded-bl-md px-5 lg:px-8 py-6 bg-secondary text-white">
        <aside className="space-y-2">
          <Heading type="h6">{title}</Heading>
          <p className=" font-medium">Product Feature:</p>
          <ul className=" space-y-2">
            {features[0] && (
              <li className=" text-[#FFFFFF] flex gap-2">
                <div className=" h-1 aspect-square bg-white rounded-full mt-2"></div>
                <p className="line-clamp-2 text-xs">{features[0]}</p>
              </li>
            )}
            {features[1] && (
              <li className=" text-[#FFFFFF] flex gap-2">
                <div className=" h-1 aspect-square bg-white rounded-full mt-2"></div>
                <p className="line-clamp-2 text-xs">{features[1]}</p>
              </li>
            )}
            {features[2] && (
              <li className=" text-[#FFFFFF] flex gap-2">
                <div className=" h-1 aspect-square bg-white rounded-full mt-2"></div>
                <p className="line-clamp-2 text-xs">{features[2]}</p>
              </li>
            )}
          </ul>
        </aside>
        <aside className="flex w-full justify-center">
          <Link
            href={url}
            className="whitespace-nowrap inline-block duration-150 text-white rounded-3xl font-medium px-5 py-2 bg-tertiary hover:bg-hover-tertiary"
          >
            View Model
          </Link>
        </aside>
      </li>
    </ul>
  );
};

export default MotorcycleCard;
