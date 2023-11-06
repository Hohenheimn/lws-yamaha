import React from "react";
import Image from "next/image";

type PropsType = {
  bgImage?: string;
  blur?: boolean;
  bgColor?: string;
  width: "narrow" | "wide" | "widest";
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = (props: PropsType) => {
  const { bgImage, bgColor, blur, width, children, className } = props;
  return (
    <section
      className={`relative w-full flex justify-center py-8 md:py-14 bg-center bg-cover bg-no-repeat`}
      style={{ backgroundColor: bgColor }}
    >
      {bgImage && (
        <Image
          src={bgImage}
          fill
          alt="background"
          className={` object-cover ${blur && "blur-sm"} `}
        />
      )}

      <div
        className={`z-10 ${width === "widest" && "w-full"} ${
          width === "wide" && "w-11/12"
        } ${width === "narrow" && "w-10/12 md:w-9/12 lg:w-8/12"} ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
