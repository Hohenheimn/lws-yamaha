import React, { useEffect, useState } from "react";

import Image from "next/image";

import ArrowTitle from "@/components/shared/ArrowTitle";
import Heading from "@/components/shared/Heading";

import { numberSeparator } from "@/utils/helpers";

import SectionContainer from "../SectionContainer";
import classNames from "classnames";

type PropsType = {
  motorcycle_detail: MotorcycleDetailType[];
};

type MotorcycleDetailType = {
  id: number;
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
  }, [motorcycle_detail]);

  return (
    <SectionContainer
      className=" flex items-end flex-col space-y-5"
      width="widest"
    >
      <div className=" w-full">
        <ArrowTitle title={"Color & Price"} />
      </div>

      <ul className="md:w-[95.83%] flex justify-end flex-wrap lg:flex-nowrap relative">
        <li className=" w-full lg:w-[50%] mr-0 lg:mr-[-10%] aspect-[1.2/1] md:aspect-[2/1] lg:aspect-auto lg:h-auto flex flex-col items-end justify-end z-10 relative">
          <aside className=" relative w-full h-full lg:max-w-[700px] lg:max-h-[700px]">
            <Image
              src={activeColor?.motorcycleImage}
              alt={activeColor?.motorcycleName}
              fill
              // width={700}
              // height={700}
              className=" object-contain"
            />
            <Heading
              type={"h4"}
              className=" text-white z-10 text-center absolute bottom-0 right-0 w-full flex justify-center"
            >
              {activeColor?.motorcycleName}
            </Heading>
          </aside>
        </li>

        <li className=" w-full lg:w-[70%] mt-5 lg:mt-16 relative md:rounded-bl-[3rem] md:rounded-tl-[3rem] overflow-hidden text-white flex items-center justify-center py-10 md:py-20 ">
          <div className="absolute w-full h-full">
            <Image
              src={activeColor?.desktopBgImage}
              fill
              alt="background"
              className={` object-cover object-center ${
                activeColor?.mobileBgImage && "hidden md:inline"
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
            <div className="w-full h-full relative bg-black/70"></div>
          </div>

          <aside className="relative z-10 space-y-8 w-10/12 lg:ml-[10%] lg:w-[60%] 2xl:w-[50%]">
            <div className="w-full max-w-[200px] md:max-w-[400px] h-[100px] md:h-[170px] relative">
              <Image
                src={activeColor?.titleImage}
                alt="title"
                fill
                className="object-contain object-left"
              />
            </div>

            <article className=" w-11/12 space-y-5">
              <aside className="space-y-5">
                <Heading type={"h5"}>ONLY THE BEST FOR YOU!</Heading>
                <p>{activeColor?.description}</p>
              </aside>
              <aside>
                <Heading type={"h5"}>Suggested Retail Price:</Heading>
                <Heading type={"h4"}>
                  P{numberSeparator(activeColor?.price || 0, 2)}
                </Heading>
              </aside>

              <div className="flex flex-col gap-1">
                {motorcycle_detail.length > 1 && (
                  <h5 className="font-semibold text-white">
                    Select your preferred color
                  </h5>
                )}
                <ul className="flex gap-2 flex-wrap">
                  {motorcycle_detail.map((item, indx) => (
                    <li>
                      <button
                        title={item.motorcycleName}
                        onClick={() => setActiveColor(item)}
                        className={` w-10 aspect-square cursor-pointer shadow shadow-white/50 ${classNames(
                          {
                            "border-2 white-red shadow-none":
                              item.id === activeColor?.id,
                          }
                        )}`}
                        style={{ backgroundColor: item.color }}
                        key={indx}
                      ></button>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </aside>
        </li>
      </ul>
    </SectionContainer>
  );
};

export default MotorcycleColorAndPriceSection;
