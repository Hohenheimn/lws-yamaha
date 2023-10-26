import React from "react";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";

type PropsType = {
  imageUrl: string;
  setShow: Function;
};

const ScreenBannerModal = (props: PropsType) => {
  const { imageUrl, setShow } = props;
  return (
    <section className=" fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#00000043] z-50">
      <aside className=" relative">
        <div className=" flex justify-end w-full">
          <AiOutlineCloseCircle
            onClick={() => setShow(false)}
            className=" text-white text-cs-lg mb-2 cursor-pointer hover:text-gray-300 duration-150"
          />
        </div>
        <Image
          src={imageUrl}
          alt="Banner"
          width={1100}
          height={500}
          className=" object-contain"
        />
      </aside>
    </section>
  );
};

export default ScreenBannerModal;
