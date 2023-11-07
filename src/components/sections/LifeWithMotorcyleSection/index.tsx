import React from "react";
import Image from "next/image";

import SectionContainer from "../SectionContainer";

type PropsType = {
  imageTitle: string;
  backgroundImage: string;
  description: string;
};

const LifeWithMotorcycleSection = (props: PropsType) => {
  const { imageTitle, backgroundImage, description } = props;
  return (
    <SectionContainer className=" flex items-end flex-col" width="widest">
      <section className=" min-h-[80vh] flex items-center relative w-[95.83%]">
        <aside className=" absolute right-0 top-0 w-[85%] h-full">
          <Image
            src={backgroundImage}
            alt={"background"}
            fill
            className=" object-cover"
          />
        </aside>
        <aside className=" relative z-10 space-y-10">
          <Image
            src={imageTitle}
            width={550}
            height={550}
            alt="Be One With Speed"
          />
          <p className=" text-xl text-white w-full md:w-[50%] lg:w-[40%] xl:w-[25%] ">
            {description}
          </p>
        </aside>
      </section>
    </SectionContainer>
  );
};

export default LifeWithMotorcycleSection;
