import React from "react";
import Image from "next/image";
import Link from "next/link";

import BannerArrowDown from "./Icons/BannerArrowDown";

type props = {
  imageSrc: string;
  title: React.ReactNode;
  description: string;
  textPosition: "center" | "bottom-left" | "bottom-right" | "bottom-center";
  height: "medium" | "large";
  scrollTo?: string;
};

function HeroBanner({
  imageSrc,
  title,
  description,
  height,
  textPosition,
  scrollTo,
}: props) {
  return (
    <section
      className={` w-full relative ${height === "medium" && "h-[60vh]"} ${
        height === "large" && "h-screen"
      } flex justify-center`}
    >
      <Image src={imageSrc} alt="banner" fill className=" object-cover" />
      {scrollTo && (
        <div className=" absolute bottom-5">
          <BannerArrowDown
            width={90}
            height={90}
            color={"#fff"}
            link={scrollTo}
          />
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
}

export default HeroBanner;
