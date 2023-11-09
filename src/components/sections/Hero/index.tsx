import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

type PropsType = {
  desktopBgImage: string;
  mobileBgImage?: string;
  title: React.ReactNode;
  description: string;
  textPosition: "center" | "bottom-left" | "bottom-right" | "bottom-center";
  fullHeight: boolean;
  scrollTo?: string;
};

const Hero = (props: PropsType) => {
  const {
    desktopBgImage,
    mobileBgImage,
    title,
    description,
    fullHeight,
    textPosition,
    scrollTo,
  } = props;

  return (
    <section
      className={` w-full relative ${!fullHeight && "h-[60vh]"} ${
        fullHeight && "h-[85vh]"
      } flex justify-center`}
    >
      <Image
        src={desktopBgImage}
        alt="banner"
        fill
        className={` object-cover ${mobileBgImage && "hidden md:inline"}`}
      />
      {mobileBgImage && (
        <Image
          src={mobileBgImage}
          alt="banner"
          fill
          className={` object-cover ${mobileBgImage && "inline md:hidden"}`}
        />
      )}
      {scrollTo && (
        <div className=" absolute bottom-5">
          <Link href={scrollTo}>
            <aside className=" flex items-center flex-col text-white">
              <IoIosArrowDown className=" text-[5rem] -mb-16" />
              <IoIosArrowDown className=" text-[8rem] -mb-10" />
            </aside>
          </Link>
        </div>
      )}

      <div
        className={` h-full w-11/12 py-[5%] flex ${
          textPosition === "center" && "justify-center items-center text-center"
        }
      ${textPosition === "bottom-left" && "justify-start items-end"}
      ${textPosition === "bottom-right" && "justify-end items-end"}
      ${textPosition === "bottom-center" && "justify-center items-end"}`}
      >
        <aside className={` relative z-10 text-white `}>
          {title}
          <p>{description}</p>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
