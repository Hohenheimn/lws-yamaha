"use client";

import React from "react";

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

import Button from "../../Button";
import VehicleCard, { VehicleCardType } from "../../Vehicles/VehicleCard";
import SectionContainer from "../SectionContainer";
import { SwiperNavigationButton } from "./VehicleNavigationButton";

type props = {
  title: string;
  description: string;
  vehicles: VehicleCardType[];
  bgImage: string;
  url: string;
};

function VehicleCarouselSection({
  title,
  description,
  vehicles,
  bgImage,
  url,
}: props) {
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  return (
    <SectionContainer
      className=" flex flex-col items-center space-y-5"
      bgImage={bgImage}
      blur={true}
    >
      <aside className=" w-11/12 max-w-[60rem] text-center text-white">
        <h4 className=" mb-3">{title}</h4>
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
          <SwiperNavigationButton />
          {vehicles.map((item, indx) => (
            <SwiperSlide key={indx}>
              <VehicleCard
                imageSrc={item.imageSrc}
                description={item.description}
                url={item.url}
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
}

export default VehicleCarouselSection;
