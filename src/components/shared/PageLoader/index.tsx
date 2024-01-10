import Image from "next/image";
import React from "react";

const PageLoader = () => {
  return (
    <div className="z-50 fixed left-0 gap-3 top-0 h-screen w-screen text-white bg-black flex flex-col items-center justify-center">
      <div className="relative w-[150px] h-[50px]">
        <Image
          src="/assets/images/logo/logo.png"
          fill
          className="object-contain"
          alt={"Loading Image"}
        />
      </div>
      <div className="loader-line"></div>
    </div>
  );
};

export default PageLoader;
