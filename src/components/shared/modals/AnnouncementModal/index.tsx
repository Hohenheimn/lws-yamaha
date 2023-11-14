"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";

type PropsType = {
  desktopImage: string;
  mobileBgImage?: string;
};

const AnnouncementModal = (props: PropsType) => {
  const [show, setShow] = useState(true);
  const { desktopImage, mobileBgImage } = props;
  return (
    <>
      {show && (
        <section className=" fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#00000043] z-50 px-10">
          <aside className=" relative">
            <div className=" flex justify-end w-full absolute top-[-40px] right-0">
              <AiOutlineCloseCircle
                onClick={() => setShow(false)}
                className=" text-white text-cs-lg mb-2 cursor-pointer hover:text-gray-300 duration-150"
              />
            </div>

            {desktopImage && (
              <Image
                src={desktopImage}
                alt="Banner"
                width={1000}
                height={500}
                className={`${mobileBgImage && "hidden md:inline"}`}
              />
            )}

            {mobileBgImage && (
              <Image
                src={mobileBgImage}
                alt="Banner"
                width={1000}
                height={500}
                className={` ${mobileBgImage && "inline md:hidden"}`}
              />
            )}
          </aside>
        </section>
      )}
    </>
  );
};

export default AnnouncementModal;
