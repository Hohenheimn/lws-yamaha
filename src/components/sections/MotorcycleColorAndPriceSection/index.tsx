import React, { useEffect, useState } from "react";

import Image from "next/image";

import ArrowTitle from "@/components/shared/ArrowTitle";
import Heading from "@/components/shared/Heading";

import { numberSeparator } from "@/utils/helpers";

import SectionContainer from "../SectionContainer";

type PropsType = {
  motorcycle_detail: motorcycle_detail[];
};

type motorcycle_detail = {
  color: string;
  motorcycleImage: string;
  motorcycleName: string;
  titleImage: string;
  desktopBgImage: string;
  mobileBgImage?: string;
  description: string;
  price: number;
};

const MotorcycleColorAndPriceSection = (props: PropsType) => {
  const { motorcycle_detail } = props;

  const [activeColor, setActiveColor] = useState<motorcycle_detail>(
    motorcycle_detail[0]
  );

  useEffect(() => {
    setActiveColor(motorcycle_detail[0]);
  }, []);
  return (
    <SectionContainer className=" flex items-end flex-col" width="widest">
      <div className=" w-full mb-10 md:mb-20">
        <ArrowTitle title={"Color & Price"} />
      </div>

      <ul className=" w-full md:w-[95.83%] flex flex-wrap items-start justify-end md:flex-nowrap  relative">
        <li>
          <Image
            src={activeColor.desktopBgImage}
            fill
            alt="background"
            className={` object-cover ${
              activeColor.mobileBgImage && "hidden md:inline"
            }`}
          />
          {activeColor?.mobileBgImage && (
            <Image
              src={activeColor?.mobileBgImage}
              fill
              alt="background"
              className={` object-bottom object-cover inline md:hidden`}
            />
          )}

          <div className=" absolute w-full md:w-6/12 h-[70%] md:h-full left-0 top-0 bg-gradient-to-b md:bg-gradient-to-r from-[#131313] from-70% to-[#13131300]"></div>
        </li>
        <li className=" w-full md:w-[50%] 2xl:w-[60%] relative md:absolute left-0 bottom-0 flex flex-col items-center justify-end z-10">
          <aside className="relative w-full flex flex-col items-center md:items-start justify-center">
            <div className=" w-[80%] md:w-auto relative">
              <Image
                src={activeColor.motorcycleImage}
                alt="motorcycle"
                // fill
                width={700}
                height={700}
                className=" object-contain"
              />
              <Heading
                type={"h4"}
                className=" text-white z-10 text-center max-w-[50rem] md:absolute md:bottom-0 md:left-[50%] md:translate-x-[-50%]"
              >
                {activeColor.motorcycleName}
              </Heading>
            </div>
          </aside>
        </li>

        <li className="w-full md:w-[50%] 2xl:w-[50%] text-white relative flex items-center justify-center py-10 md:py-20 ">
          <aside className="relative z-10 space-y-8 max-w-[90%] md:max-w-[70%] 2xl:max-w-[60%] ">
            <Image
              src={activeColor.titleImage}
              alt="title"
              height={100}
              width={600}
            />
            <article className=" w-11/12 space-y-8">
              <aside className=" space-y-5">
                <Heading type={"h5"}>ONLY THE BEST FOR YOU!</Heading>
                <p>{activeColor.description}</p>
              </aside>
              <aside>
                <Heading type={"h5"}>Suggested Retail Price:</Heading>
                <Heading type={"h4"}>
                  P{numberSeparator(activeColor.price, 2)}
                </Heading>
              </aside>

              <ul className="flex gap-2 flex-wrap">
                {motorcycle_detail.map((item, indx) => (
                  <li
                    onClick={() => setActiveColor(item)}
                    className={` w-10 aspect-square cursor-pointer  ${
                      item.color === activeColor.color && " border-2 border-red"
                    }`}
                    style={{ backgroundColor: item.color }}
                    key={indx}
                  ></li>
                ))}
              </ul>
            </article>
          </aside>
        </li>
      </ul>
    </SectionContainer>
  );
};

export default MotorcycleColorAndPriceSection;
