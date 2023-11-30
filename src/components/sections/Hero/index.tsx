"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import validateImageUrl from "@/utils/validateImageUrl";

type PropsType = {
  desktopBgImage?: string;
  mobileBgImage?: string;
  title?: string;
  description?: string;
  textPosition:
    | "center-center"
    | "center-left"
    | "center-right"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center"
    | "top-left"
    | "top-right"
    | "top-center"
    | any;

  fullHeight?: boolean;
  scrollDown?: boolean;
  imageTitleUrl?: string;
  readMore?: string;
};

const Hero = (props: PropsType) => {
  const {
    desktopBgImage,
    mobileBgImage,
    title,
    description,
    fullHeight,
    textPosition,
    scrollDown,
    imageTitleUrl,
    readMore,
  } = props;

  return (
    <>
      <section
        className={` w-full relative ${!fullHeight && "h-[52vh]"} ${
          fullHeight && "h-[92vh]"
        } flex justify-center ${!desktopBgImage && "bg-black"}`}
      >
        {desktopBgImage && (
          <Image
            src={validateImageUrl(desktopBgImage)}
            alt="banner"
            fill
            className={` object-cover ${mobileBgImage && "hidden md:inline"}`}
          />
        )}

        {mobileBgImage && (
          <Image
            src={validateImageUrl(mobileBgImage)}
            alt="banner"
            fill
            className={` object-cover ${mobileBgImage && "inline md:hidden"}`}
          />
        )}
        {scrollDown && (
          <div className=" absolute bottom-16">
            <Link href={"#explore"}>
              <aside className=" flex items-center flex-col text-white">
                <IoIosArrowDown className=" text-[5rem] -mb-16" />
                <IoIosArrowDown className=" text-[8rem] -mb-10" />
              </aside>
            </Link>
          </div>
        )}

        <div
          className={` h-full w-11/12 py-[5%] flex 
            ${textPosition === "bottom-left" && "justify-start items-end"}
            ${textPosition === "bottom-right" && "justify-end items-end"}
            ${textPosition === "bottom-center" && "justify-center items-end"}
            ${textPosition === "top-left" && "justify-start items-start"}
            ${textPosition === "top-right" && "justify-end items-start"}
            ${textPosition === "top-center" && "justify-center items-start"}
            ${textPosition === "center-left" && "justify-start items-center"}
            ${textPosition === "center-right" && "justify-end items-center"}
            ${
              textPosition === "center-center" &&
              "justify-center items-center text-center"
            }
            `}
        >
          <aside
            className={` relative z-10 text-white w-full max-w-[40rem] 3xl:max-w-[55rem]`}
          >
            {imageTitleUrl && (
              <Image
                src={validateImageUrl(imageTitleUrl)}
                alt="title"
                width={300}
                height={300}
              />
            )}
            {title && (
              <Heading type="h2" className=" uppercase whitespace-pre-wrap">
                {title}
              </Heading>
            )}

            {description && (
              <p className=" text-lg whitespace-pre-wrap">{description}</p>
            )}

            {readMore && (
              <div className=" mt-5">
                <Button appearance={"primary"} size={"medium"} url={readMore}>
                  Read More
                </Button>
              </div>
            )}
          </aside>
        </div>
      </section>
      <div id="explore"></div>
    </>
  );
};

export default Hero;
