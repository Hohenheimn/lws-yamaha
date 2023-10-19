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

import CardUnit, { cardUnitType } from "./CardUnit";
import SectionContainer from "./SectionContainer";

type props = {
  title: string;
  description: string;
  units: cardUnitType[];
  bgImage: string;
};

function CarouselSection({ title, description, units, bgImage }: props) {
  return (
    <SectionContainer
      className=" flex flex-col items-center"
      bgImage={bgImage}
      blur={true}
    >
      <aside className=" w-11/12 max-w-[60rem] text-center text-white mb-5">
        <h4 className=" mb-3">{title}</h4>
        <p>{description}</p>
      </aside>
      <div className=" w-full relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          autoHeight
          className=" unit-carousel"
        >
          <SwiperNavigationButton />
          {units.map((item, indx) => (
            <SwiperSlide key={indx}>
              <CardUnit
                imageSrc={item.imageSrc}
                description={item.description}
                url={item.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionContainer>
  );
}

export default CarouselSection;

export const SwiperNavigationButton = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className=" absolute top-[50%] left-0 translate-y-[-50%] z-10 w-14 aspect-square rounded-full bg-gray-300 hover:bg-gray-400 duration-150 flex justify-center items-center"
      >
        <BiSolidLeftArrow className="text-cs-lg" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className=" absolute top-[50%] right-0 translate-y-[-50%] z-10 w-14 aspect-square rounded-full bg-gray-300 hover:bg-gray-400 duration-150 flex justify-center items-center"
      >
        <BiSolidRightArrow className="text-cs-lg" />
      </button>
    </>
  );
};
