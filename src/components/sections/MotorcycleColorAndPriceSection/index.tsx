import React from "react";

import Image from "next/image";

import ArrowTitle from "@/components/shared/ArrowTitle";
import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

const MotorcycleColorAndPriceSection = () => {
  const dummyColors = ["red", "blue", "violet", "black"];
  return (
    <SectionContainer className=" flex items-end flex-col" fullWidth={true}>
      <div className=" w-full mb-8">
        <ArrowTitle title={"Color & Price"} />
      </div>

      <ul className=" w-[95.83%] flex flex-wrap md:flex-nowrap">
        <li className=" relative flex flex-col items-center w-[80%] md:w-[50%] md:aspect-auto mr-[-10%] z-10">
          <Image
            src={"/assets/images/placeholder.png"}
            alt="motorcycle"
            width={1000}
            height={1000}
          />
          <Heading type={"h3"} className=" text-white">
            Race Blue
          </Heading>
        </li>
        <li className=" w-[90%] ml-auto md:w-[70%] -mt-10 md:mt-10 py-10 text-white flex items-center justify-center relative rounded-bl-3xl rounded-tl-3xl overflow-hidden">
          <Image
            src={"/assets/images/placeholder.png"}
            fill
            alt="background"
            className=" object-cover"
          />
          <aside className="relative z-10 space-y-8 max-w-[90%] md:max-w-[60%] lg:max-w-[50%]">
            <Image
              src={"/assets/images/samples/sample-title.png"}
              alt="title"
              height={100}
              width={600}
            />
            <article className=" w-11/12 space-y-8">
              <aside className=" space-y-5">
                <Heading type={"h4"}>ONLY THE BEST FOR YOU!</Heading>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  minima repellat id nihil nisi officia sequi delectus natus,
                  facere exercitationem voluptatibus culpa porro necessitatibus,
                  tempora velit a ratione dolores quidem.
                </p>
              </aside>
              <aside>
                <Heading type={"h4"}>Suggested Retail Price:</Heading>
                <Heading type={"h4"}>P124,000.00</Heading>
              </aside>

              <ul className="flex gap-2 flex-wrap">
                {dummyColors.map((color, indx) => (
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
