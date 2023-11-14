import React, { useEffect, useState } from "react";

import Image from "next/image";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  headingText: string;
  tabs: tabType[];
};

type tabType = {
  tab_name: string;
  image: string;
  content: {
    title: string;
    description: string;
  }[];
};

const YConnectSection = (props: PropsType) => {
  const { tabs, headingText } = props;
  const [activeTab, setActiveTab] = useState<tabType>(tabs[0]);

  useEffect(() => {
    setActiveTab(tabs[0]);
  }, []);
  return (
    <SectionContainer
      bgColor="#131313"
      width="narrowest"
      className="flex flex-col items-center text-center text-white space-y-10"
    >
      <Heading type="h5" className=" w-10/12 font-medium">
        {headingText}
      </Heading>
      <aside className=" w-full overflow-x-auto hide-scrollBar">
        <ul className=" w-auto flex md:border-b-2 border-[#8C8C8C] gap-10 xl:gap-20 text-[#424242]">
          {tabs.map((tab, indx) => (
            <li
              onClick={() => setActiveTab(tab)}
              key={indx}
              className={`py-3 px-2 cursor-pointer whitespace-nowrap md:-mb-[2px] ${
                activeTab?.tab_name === tab.tab_name &&
                "border-b-[4px] border-red font-medium text-red"
              }`}
            >
              {tab.tab_name}
            </li>
          ))}
        </ul>
      </aside>
      <section className=" flex flex-wrap md:flex-nowrap items-center justify-center gap-5">
        <aside className=" w-[50%] md:w-auto">
          <Image src={activeTab.image} alt="phone" width={500} height={500} />
        </aside>
        <ul className=" text-start space-y-10">
          {activeTab.content.map((item, indx) => (
            <li
              key={indx}
              className={` ${
                activeTab.content.length !== indx + 1 &&
                "border-b-2 border-[#8C8C8C] pb-10"
              }`}
            >
              <Heading type={"h5"} className=" mb-3">
                {item.title}
              </Heading>
              <p className=" text-textGray">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </SectionContainer>
  );
};

export default YConnectSection;
