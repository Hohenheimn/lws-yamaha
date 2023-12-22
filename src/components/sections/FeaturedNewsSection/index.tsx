import React from "react";
import classNames from "classnames";
import Image from "next/image";

import Link from "next/link";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

//Note: Only 4 featured news will be displayed
type PropsType = {
  title: string;
  subTitle: string;
  news: Array<{
    id: number;
    image: string;
    title: string;
    date: string;
    url: string;
  }>;
};

const FeaturedNewsSection = (props: PropsType) => {
  const { news: data } = props;

  return (
    <div className="flex flex-col py-8 md:py-14">
      <div>
        <div className="flex gap-4 w-full items-center">
          <hr className="border-white flex-1" />
          <h1 className="text-white text-center whitespace-pre-wrap text-[1.9rem] xl:text-[2.5rem] font-bold">
            {props.title}
          </h1>
          <hr className="border-white flex-1" />
        </div>
        <p className="text-center text-gray-400">{props.subTitle}</p>
      </div>
      <SectionContainer width={"wide"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
          {data?.slice(0, 4).map((news, index) => (
            <figure
              key={index}
              className={`relative rounded-xl min-h-[200px] xl:min-h-[300px] overflow-hidden ${classNames(
                {
                  "lg:col-span-2 lg:row-span-2": index + 1 === 1,
                  "lg:col-span-2 lg:row-span-1": index + 1 === 2,
                }
              )}`}
            >
              <Link href={news.url} key={news.id}>
                <Image
                  fill
                  src={news.image}
                  alt={news.title}
                  className="object-cover bg-gray-100"
                />
                <figcaption className="relative p-5 bg-gradient-to-t from-background to-transparent flex flex-col justify-end h-full">
                  <p className="text-white">{news.date}</p>
                  <h3
                    className={`text-white font-semibold text-lg xl:text-2xl ${classNames(
                      {
                        "md:max-w-[80%]": index + 1 === 1,
                      }
                    )}`}
                  >
                    {news.title}
                  </h3>
                </figcaption>
              </Link>
            </figure>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default FeaturedNewsSection;
