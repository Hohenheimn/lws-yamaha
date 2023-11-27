import React from "react";

import Heading from "../Heading";

const Loading = () => {
  return (
    <section className=" relative w-full h-[92vh] flex justify-center items-center bg-primary text-white overflow-hidden">
      <aside className=" space-y-4  px-16 py-10 flex flex-col justify-center items-center rounded-lg">
        <h1 className=" w-[40rem] h-[5rem] bg-secondary-2 rounded-lg animate-pulse"></h1>
        <h1 className=" w-[40rem] h-[5rem] bg-secondary-2 rounded-lg animate-pulse"></h1>
        <p className="w-[30rem] h-[2rem] bg-secondary-2 rounded-lg animate-pulse "></p>
      </aside>
      <aside className="absolute bottom-[2rem] left-[50%] translate-x-[-50%]  w-[8rem] aspect-square rounded-full bg-secondary-2 animate-pulse"></aside>
    </section>
  );
};

export default Loading;
