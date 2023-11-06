import React from "react";

import Image from "next/image";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  list: string[];
  title: string;
  first_description: string;
  second_description: string;
  image: string;
};

const CcuMyRideLinkSection = (props: PropsType) => {
  const { list, title, first_description, second_description, image } = props;
  return (
    <SectionContainer
      bgColor="#131313"
      width="narrow"
      className="flex justify-center"
    >
      <ul className="  flex items-center flex-wrap md:flex-nowrap gap-20">
        <li className=" w-full md:w-1/2 text-white  space-y-5">
          <Heading type="h5">{title}</Heading>
          <p className=" text-[#A3A3A3]">{first_description}</p>
          <ul>
            {list.map((item, indx) => (
              <li key={indx} className=" py-5 border-b">
                {indx + 1}. {item}
              </li>
            ))}
          </ul>
          <p className=" text-[#A3A3A3]">{second_description}</p>
        </li>
        <li className=" w-full md:w-1/2 flex justify-center items-center p-0 lg:p-10">
          <Image src={image} width={1000} height={1000} alt="Image" />
        </li>
      </ul>
    </SectionContainer>
  );
};

export default CcuMyRideLinkSection;
