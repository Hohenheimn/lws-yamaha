import React from "react";
import Image from "next/image";

type PropsType = {
  bgImage?: string;
  mobileBgImage?: string;
  blur?: boolean;
  bgColor?: string;
  width: "narrowest" | "narrow" | "wide" | "widest";
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = (props: PropsType) => {
  const { bgImage, bgColor, blur, width, children, className, mobileBgImage } =
    props;
  return (
    <section
      className={`relative w-full flex justify-center py-8 md:py-14 bg-center bg-cover overflow-hidden bg-no-repeat`}
      style={{ backgroundColor: bgColor }}
    >
      {blur && (
        <aside className="bg-carousel w-full h-full absolute top-0 left-0 z-10"></aside>
      )}
      {bgImage && (
        <Image
          src={bgImage}
          fill
          alt="background"
          className={` object-cover ${mobileBgImage && "hidden md:inline"} ${
            blur && "blur-sm"
          }`}
        />
      )}

      {mobileBgImage && (
        <Image
          src={mobileBgImage}
          alt="background"
          fill
          className={` object-cover ${mobileBgImage && "inline md:hidden"} ${
            blur && "blur-sm"
          }`}
        />
      )}

      <div
        className={`z-10 ${width === "widest" && "w-full"} ${
          width === "wide" && "w-11/12"
        } ${width === "narrow" && "w-11/12 lg:w-10/12 2xl:w-9/12"} ${
          width === "narrowest" && "w-11/12 lg:w-10/12 2xl:w-8/12"
        } ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
