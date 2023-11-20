import React from "react";
import Image from "next/image";
import Link from "next/link";

import SectionContainer from "@/components/sections/SectionContainer";

import Heading from "../Heading";

const ImageLinks = () => {
  return (
    <section className=" w-full flex justify-center">
      <ul className="  w-11/12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Link href={"#"}>
          <li className=" relative rounded-3xl overflow-hidden aspect-[2.8/1] flex justify-center items-center text-white">
            <Image
              src={"/assets/images/samples/sample-banner.jpg"}
              fill
              alt="background"
              className={` object-cover blur-sm`}
            />
            <Heading type="h4" className="text-center z-10 font-medium">
              Parts & Accessories
            </Heading>
          </li>
        </Link>
        <Link href={"#"}>
          <li className=" relative rounded-3xl overflow-hidden aspect-[2.8/1] flex justify-center items-center text-white">
            <Image
              src={"/assets/images/samples/sample-banner.jpg"}
              fill
              alt="background"
              className={` object-cover blur-sm`}
            />
            <Heading type="h4" className="text-center z-10 font-medium">
              Services
            </Heading>
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default ImageLinks;
