import React from "react";
import Image from "next/image";

type PropsType = {
  bgImage?: string;
  blur?: boolean;
  bgColor?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = (props: PropsType) => {
  const { bgImage, bgColor, blur, fullWidth, children, className } = props;
  return (
    <section
      className={`relative w-full flex justify-center py-14 bg-center bg-cover bg-no-repeat`}
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

      <div className={`z-10 ${fullWidth ? "w-full" : "w-11/12"} ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
