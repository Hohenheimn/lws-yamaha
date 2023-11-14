import React from "react";
import Image from "next/image";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  icon: string;
  title: string;
  description: string;
  boxes: {
    icon: string;
    title: string;
    description: string;
  }[];
};

const YamahaTechnicalAcademySection = (props: PropsType) => {
  const { icon, title, description, boxes } = props;
  return (
    <SectionContainer
      width="narrowest"
      className=" flex flex-col items-center text-white text-center gap-10"
    >
      <Image src={icon} alt="Academy Star" width={500} height={500} />
      <aside>
        <Heading type={"h5"} className=" font-medium">
          {title}
        </Heading>
        <p className=" text-textGray">{description}</p>
      </aside>
      <ul className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {boxes.map((item, indx) => (
          <li
            key={indx}
            className=" flex flex-col items-center gap-5 bg-secondary p-10 rounded-lg shadow-md shadow-secondary"
          >
            <Image
              src={item.icon}
              alt="Academy Star"
              width={150}
              height={150}
            />
            <Heading type={"h5"} className=" font-medium">
              {item.title}
            </Heading>
            <p className=" text-textGray">{item.description}</p>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default YamahaTechnicalAcademySection;
