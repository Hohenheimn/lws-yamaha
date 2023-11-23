import React, { useEffect, useState } from "react";

import Image from "next/image";

import ArrowTitle from "@/components/shared/ArrowTitle";
import Heading from "@/components/shared/Heading";

import { numberSeparator } from "@/utils/helpers";

import SectionContainer from "../SectionContainer";

type PropsType = {
  motorcycle_detail: MotorcycleDetailType[];
};

type MotorcycleDetailType = {
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

  const [activeColor, setActiveColor] = useState<MotorcycleDetailType>(
    motorcycle_detail[0]
  );

  useEffect(() => {
    setActiveColor(motorcycle_detail[0]);
  }, []);
  return (
    <SectionContainer
      className=" flex items-end flex-col space-y-5"
      width="widest"
    >
      <div className=" w-full">
        <ArrowTitle title={"Color & Price"} />
      </div>

      <ul className=" w-[95.83%] flex justify-end flex-wrap lg:flex-nowrap relative">
        <li className=" w-full lg:w-[50%] mr-0 lg:mr-[-10%] aspect-[1.2/1] md:aspect-[2/1] lg:aspect-auto lg:h-auto flex flex-col items-end justify-end z-10 relative">
          <aside className=" relative w-full h-full lg:max-w-[700px] lg:max-h-[700px]">
            <Image
              src={activeColor.motorcycleImage}
              alt="motorcycle"
              fill
              // width={700}
              // height={700}
              className=" object-contain"
            />
            <Heading
              type={"h4"}
              className=" text-white z-10 text-center absolute bottom-0 right-0 w-full flex justify-center"
            >
              {activeColor.motorcycleName}
            </Heading>
          </aside>
        </li>

        <li className=" w-full lg:w-[60%] mt-5 lg:mt-16 relative rounded-bl-[3rem] rounded-tl-[3rem] overflow-hidden text-white flex items-center justify-center py-10 md:py-20 ">
          <Image
            src={activeColor.desktopBgImage}
            fill
            alt="background"
            className={` object-cover object-center ${
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
          <aside className="relative z-10 space-y-8 w-10/12 lg:ml-[10%] lg:w-[60%] 2xl:w-[50%]">
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