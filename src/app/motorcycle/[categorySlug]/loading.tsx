import React from "react";
import { SiYamahamotorcorporation } from "react-icons/si";

const PageLoader = () => {
  return (
    <div className="z-50 fixed left-0 gap-3 top-0 h-screen w-screen text-white bg-black flex flex-col items-center justify-center">
      <div className="relative flex items-center p-5 justify-center">
        <SiYamahamotorcorporation size={50} />
        <div className="w-full h-full border-t-2 animate-spin absolute border-white rounded-full"></div>
      </div>
      <span className="animate-pulse">Loading . . .</span>
    </div>
  );
};

export default PageLoader;
