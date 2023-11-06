import React from "react";
import Image from "next/image";

import Link from "next/link";

import Heading from "../Heading";

type PropsType = {
  accessoryImage: string;
  title: string;
  url: string;
};

const AccessoryCard = (props: PropsType) => {
  const { accessoryImage, title, url } = props;
  return (
    <Link href={url}>
      <div
        className={`w-[20rem] aspect-square bg-[#4b4b4b] rounded-lg p-5 flex flex-col justify-center items-center gap-5`}
      >
        <aside className=" w-full aspect-[1.2/1] relative">
          <Image
            src={accessoryImage}
            alt="Accessory"
            fill
            className=" object-contain"
          />
        </aside>
        <h4 className=" text-white text-xl font-medium text-center">{title}</h4>
      </div>
    </Link>
  );
};

export default AccessoryCard;
