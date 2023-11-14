import React from "react";
import Image from "next/image";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  icon: string;
  title: string;
  image: string;
  content: string[];
};

const YdtSection = (props: PropsType) => {
  const { icon, title, image, content } = props;
  return (
    <section className=" text-white pt-8 md:pt-14 flex flex-col items-center">
      <ul className=" flex w-full items-center gap-10 md:gap-20 mb-5">
        <li className=" h-[2px] bg-[#FCFCFC] flex-1"></li>
        <li>
          <Image src={icon} alt="image" width={300} height={300} />
        </li>
        <li className=" h-[2px] bg-[#FCFCFC] flex-1"></li>
      </ul>
      <Heading type="h5" className=" font-medium">
        {title}
      </Heading>
      <SectionContainer
        width="narrow"
        className="flex flex-wrap md:flex-nowrap gap-10"
      >
        <aside className=" w-full md:w-[40%]">
          <Image src={image} alt="image" width={800} height={800} />
        </aside>
        <ul className=" w-full flex-1 flex flex-col justify-center">
          {content.map((item, indx) => (
            <li key={indx} className={`${indx > 0 && "pt-5"} pb-5 border-b`}>
              <Heading type="h5">
                {(indx + 1).toString().padStart(2, "0")}{" "}
              </Heading>
              <p className=" text-textGray">{item}</p>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
};

export default YdtSection;
