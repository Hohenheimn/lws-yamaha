import React from "react";

import Image from "next/image";

import ArrowTitle from "@/components/shared/ArrowTitle";
import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  colors: string[];
  motorcycleImage: string;
  motorcycleName: string;
  titleImage: string;
  backgroundImage: string;
  description: string;
  price: number;
};

const MotorcycleColorAndPriceSection = ({
  colors,
  motorcycleImage,
  motorcycleName,
  titleImage,
  backgroundImage,
  description,
  price,
}: PropsType) => {
  const numberSeparator = (currency: string | number, decimal?: number) => {
    return parseFloat(currency?.toString())
      .toFixed(decimal ?? 2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <SectionContainer className=" flex items-end flex-col" fullWidth={true}>
      <div className=" w-full mb-8">
        <ArrowTitle title={"Color & Price"} />
      </div>

      <ul className=" w-[95.83%] flex flex-wrap md:flex-nowrap">
        <li className=" relative flex flex-col items-center w-[80%] md:w-[60%] md:aspect-auto mr-[-10%] z-10">
          <Image
            src={motorcycleImage}
            alt="motorcycle"
            width={1000}
            height={1000}
            className=" order-2 md:order-1"
          />
          <Heading type={"h3"} className=" text-white order-1 md:order-2">
            {motorcycleName}
          </Heading>
        </li>
        <li className=" w-[90%] ml-auto md:w-[70%] -mt-10 md:mt-10 py-10 text-white flex items-center justify-center relative rounded-bl-3xl rounded-tl-3xl overflow-hidden">
          <Image
            src={backgroundImage}
            fill
            alt="background"
            className=" object-cover"
          />
          <aside className="relative z-10 space-y-8 max-w-[90%] md:max-w-[60%] lg:max-w-[50%]">
            <Image src={titleImage} alt="title" height={100} width={600} />
            <article className=" w-11/12 space-y-8">
              <aside className=" space-y-5">
                <Heading type={"h4"}>ONLY THE BEST FOR YOU!</Heading>
                <p>{description}</p>
              </aside>
              <aside>
                <Heading type={"h4"}>Suggested Retail Price:</Heading>
                <Heading type={"h4"}>P{numberSeparator(price, 2)}</Heading>
              </aside>

              <ul className="flex gap-2 flex-wrap">
                {colors.map((color, indx) => (
                  <li
                    className=" w-10 aspect-square"
                    style={{ backgroundColor: color }}
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
