import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";

type PropsType = {
  imageUrl: string;
};

const AnnouncementModal = (props: PropsType) => {
  const [show, setShow] = useState(true);
  const { imageUrl } = props;
  return (
    <>
      {show && (
        <section className=" fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#00000043] z-50 px-10">
          <aside className=" relative w-11/12 max-w-[80rem]">
            <div className=" flex justify-end w-full">
              <AiOutlineCloseCircle
                onClick={() => setShow(false)}
                className=" text-white text-cs-lg mb-2 cursor-pointer hover:text-gray-300 duration-150"
              />
            </div>
            <aside className=" w-full h-[80vh]  relative">
              <Image
                src={imageUrl}
                alt="Banner"
                fill
                className=" object-contain h-auto"
              />
            </aside>
          </aside>
        </section>
      )}
    </>
  );
};

export default AnnouncementModal;
