import React from "react";
import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoIosExpand } from "react-icons/io";

import downloadUrl, { shareUrl } from "@/utils/helpers";

type PropsType = {
  imageUrl: string;
  className?: string;
  onClick?: () => void;
};

const GalleryItem = (props: PropsType) => {
  const { imageUrl, className, onClick } = props;

  const shareHandler = (url: string) => {
    const shareData = {
      title: "",
      text: "",
      url: url,
    };
    shareUrl(shareData);
  };

  return (
    <li className={` relative w-full group ${className}`}>
      <Image src={imageUrl} alt={"background"} fill className=" object-cover" />
      <aside className=" scale-0 duration-100 group-hover:scale-100 absolute top-0 left-0 w-full h-full flex justify-center items-center gap-5 bg-[#00000093]">
        <IoMdDownload
          onClick={() => downloadUrl(imageUrl)}
          className=" text-white text-3xl hover:text-secondary duration-150 cursor-pointer"
        />
        <IoIosExpand
          onClick={onClick}
          className=" text-white text-3xl hover:text-secondary duration-150 cursor-pointer"
        />
        <FaShareAlt
          onClick={() => shareHandler(imageUrl)}
          className=" text-white text-3xl hover:text-secondary duration-150 cursor-pointer"
        />
      </aside>
    </li>
  );
};

export default GalleryItem;
