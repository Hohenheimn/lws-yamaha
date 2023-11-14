"use client";

import React, { ComponentProps } from "react";

// Import Swiper React components
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import MotorcycleCard from "@/components/motorcycle/MotorcycleCard";
import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";

import useAPI from "@/hooks/useAPI";

import SectionContainer from "../SectionContainer";
import { MotorcycleNavigationButton } from "./MotorcycleNavigationButton";

type PropsType = {
  title: string;
  description: string;
  motorcycle: Array<ComponentProps<typeof MotorcycleCard>>;
  desktopBgImage: string;
  mobileBgImage?: string;
  url: string;
};

const MotorcycleCarouselSection = (props: PropsType) => {
  const { title, description, motorcycle, desktopBgImage, url, mobileBgImage } =
    props;
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
      className=" relative h-full flex flex-col items-center space-y-5"
      bgImage={desktopBgImage}
      mobileBgImage={mobileBgImage}
      width={"wide"}
    >
      <aside className=" w-11/12 max-w-[60rem] text-center text-white">
        <Heading type="h4">{title}</Heading>
        <p>{description}</p>
      </aside>
      <div className=" w-full relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          className=" unit-carousel"
          breakpoints={breakpoints}
        >
          <MotorcycleNavigationButton />
          {motorcycle.map((item, indx) => (
            <SwiperSlide key={indx}>
              <MotorcycleCard
                imageSrc={item.imageSrc}
                description={item.description}
                url={item.url}
                inheritWidth={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Button url={url} size="large" appearance="primary">
        View Other Models
      </Button>
    </SectionContainer>
  );
};

export default MotorcycleCarouselSection;
