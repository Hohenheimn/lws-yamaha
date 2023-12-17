import React from "react";
import Image from "next/image";
import Link from "next/link";

import SectionContainer from "@/components/sections/SectionContainer";

import config from "@/utils/config";

import Heading from "../../shared/Heading";

type PropsType = {
  imageLinks?: {
    url: string;
    name: string;
    backgroundImage: string;
  }[];
};

const ImageLinks = (props: PropsType) => {
  const { imageLinks } = props;
  const imageBaseUrl = config.imageBaseUrl;
  return (
    <SectionContainer className=" w-full flex justify-center" width={"wide"}>
      <ul className="  w-11/12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {imageLinks?.map((item, indx) => (
          <Link href={item.url} key={indx}>
            <li className=" relative rounded-3xl overflow-hidden aspect-[2.8/1] flex justify-center items-center text-white">
              <Image
                src={
                  item.backgroundImage.includes("http")
                    ? item.backgroundImage
                    : `${imageBaseUrl}${item?.backgroundImage}`
                }
                fill
                alt={`${item.name} background`}
                className={` object-cover blur-sm`}
              />
              <Heading type="h4" className="text-center z-10 font-medium">
                {item.name}
              </Heading>
            </li>
          </Link>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default ImageLinks;
