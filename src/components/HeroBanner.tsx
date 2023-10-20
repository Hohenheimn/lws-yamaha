import React from "react";
import Image from "next/image";
import Link from "next/link";

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
        height === "large" && "h-[80vh]"
      } flex justify-center`}
    >
      <Image src={imageSrc} alt="banner" fill className=" object-cover" />
      {scrollTo && (
        <Link href={scrollTo} className=" absolute bottom-5">
          <Image
            src="/images/button-icons/banner-arrow-down.png"
            width={80}
            height={80}
            alt="arrow-down"
          />
        </Link>
      )}

      <div
        className={` h-full w-11/12 py-[5%] flex ${
          textPosition === "center" && "justify-center items-center"
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
