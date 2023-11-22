import React from "react";

import Heading from "../Heading";

const Loading = () => {
  return (
    <section className=" w-screen h-screen flex justify-center items-center bg-primary text-white">
      <Heading type={"h1"} className=" animate-pulse">
        Loading...
      </Heading>
    </section>
  );
};

export default Loading;
