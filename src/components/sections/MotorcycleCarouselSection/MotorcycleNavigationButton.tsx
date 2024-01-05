import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useSwiper } from "swiper/react";

export const MotorcycleNavigationButton = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className=" absolute top-[50%] left-0 translate-y-[-50%] z-10 w-[54px] aspect-square rounded-full bg-gray-300 hover:bg-gray-400 duration-150 flex justify-center items-center"
      >
        <BiSolidLeftArrow className="text-cs-lg" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className=" absolute top-[50%] right-0 translate-y-[-50%] z-10 w-[54px] aspect-square rounded-full bg-gray-300 hover:bg-gray-400 duration-150 flex justify-center items-center"
      >
        <BiSolidRightArrow className=" text-cs-lg" />
      </button>
    </>
  );
};
