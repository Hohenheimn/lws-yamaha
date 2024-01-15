"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import "swiper/css";

import "swiper/css";

import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import Heading from "@/components/shared/Heading";
import validateImageUrl from "@/utils/validateImageUrl";

import SectionContainer from "../SectionContainer";

type PropsType = {
  headingText: string;
  tabs: tabType[];
};

type tabType = {
  tab_name: string;
  image: string;
  description?: string;
  contentType: "slider" | "content";
  content:
    | {
        title: string;
        description?: string;
        image?: string;
      }[];
};

const YConnectSection = (props: PropsType) => {
  const { tabs, headingText } = props;
  const [activeTab, setActiveTab] = useState<tabType>(tabs[0]);

  useEffect(() => {
    setActiveTab(tabs[0]);
  }, []);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1550: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  return (
    <SectionContainer
      bgColor="#131313"
      width="narrowest"
      className="flex flex-col items-center text-center text-white space-y-10"
    >
      <Heading type="h5" className=" w-10/12 font-medium">
        {headingText}
      </Heading>
      <ul className="w-full flex flex-wrap gap-x-5 md:gap-10 lg:gap-[100px] text-white md:border-b-2 border-[#8C8C8C]">
        {tabs.map((tab, indx) => (
          <li
            onClick={() => setActiveTab(tab)}
            key={indx}
            className={`py-1 pt-3 lg:py-3 cursor-pointer whitespace-nowrap -mb-[2px] ${
              activeTab?.tab_name === tab.tab_name &&
              "border-b-[2px] border-red font-medium text-red"
            }`}
          >
            {tab.tab_name}
          </li>
        ))}
      </ul>
      <section className="w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-5">
        {activeTab?.contentType === "slider" && (
          <aside className=" w-full flex flex-col justify-center items-center">
            {activeTab?.description && (
              <p className=" text-center mb-6 w-full max-w-[50rem]">
                {activeTab?.description}
              </p>
            )}
            <div className=" w-full y-connect-carousel">
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  Keyboard,
                  Autoplay,
                ]}
                spaceBetween={200}
                freeMode
                // loop={true}
                centeredSlides
                // autoplay={{ delay: 2000 }}
                centeredSlidesBounds
                breakpoints={breakpoints}
              >
                {activeTab?.content?.map((item, indx) => (
                  <SwiperSlide key={indx}>
                    <aside className=" w-[320px] flex flex-col items-center">
                      <h5 className=" text-center font-medium text-lg">
                        {item?.title}
                      </h5>

                      <Image
                        src={`${validateImageUrl(item.image)}`}
                        alt=""
                        width={300}
                        height={300}
                      />
                    </aside>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </aside>
        )}
        {activeTab.contentType === "content" && (
          <>
            <aside className=" w-[20%] md:w-auto">
              <Image
                src={activeTab.image}
                alt="phone"
                width={500}
                height={500}
              />
            </aside>
            <ul className=" w-[80%] text-start space-y-10">
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
                  <p className=" text-textGray whitespace-pre-wrap">
                    {item?.description}
                  </p>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </SectionContainer>
  );
};

export default YConnectSection;
