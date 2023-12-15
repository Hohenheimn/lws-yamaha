"use client";

import React, { ComponentProps } from "react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import MotorcycleCard from "@/components/motorcycle/MotorcycleCard";
import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";

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
    1400: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1550: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <SectionContainer
      className="relative flex flex-col items-center justify-center min-h-[90vh]"
      bgImage={desktopBgImage}
      mobileBgImage={mobileBgImage}
      width={"wide"}
      blur
    >
      <aside className=" w-11/12 max-w-[60rem] text-center text-white space-y-4">
        <Heading type="h4">{title}</Heading>
        <p className="text-sm">{description}</p>
      </aside>
      <div className="w-full relative mb-6 lg:mb-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4}
          className="unit-carousel"
          freeMode
          loop
          breakpoints={breakpoints}
        >
          <MotorcycleNavigationButton />
          {motorcycle?.map((item, indx) => (
            <SwiperSlide key={indx}>
              <MotorcycleCard
                imageSrc={item.imageSrc}
                features={item.features}
                url={item.url}
                inheritWidth={true}
                title={item.title}
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
