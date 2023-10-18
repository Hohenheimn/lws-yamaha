import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <aside className=" h-[80vh] w-full relative">
        <Image
          src={"/images/samples/sample-banner.jpg"}
          alt="banner"
          fill
          className=" object-cover"
        />
      </aside>
      {/* <h1>HomePage</h1>
      <h2>HomePage</h2>
      <h3>HomePage</h3>
      <h4>HomePage</h4>
      <h5>HomePage</h5>
      <p>paragraph</p> */}
    </div>
  );
};

export default HomePage;
