import React from "react";

import Image from "next/image";

import SectionContainer from "@/components/sections/SectionContainer";
import Heading from "@/components/shared/Heading";

import config from "@/utils/config";

import validateImageUrl from "@/utils/validateImageUrl";

import Button from "../../shared/Button";

type PropsType = {
  title: string;
  image: string;
  autoImage?: boolean;
  description?: string;
  contentAlignment: "left" | "right" | "center";
  content: {
    type: "text" | "list" | "icons";
    value: string | string[] | IconsType[] | ListType[];
  }[];
  button?: {
    title: string;
    url: string;
  };
};

type ListType = {
  description: string;
  title: string;
};

type IconsType = {
  icon: string;
  title: string;
};

const ImageAndParagraph = (props: PropsType) => {
  const {
    title,
    content,
    image,
    contentAlignment,
    button,
    description,
    autoImage,
  } = props;
  console.log(content);
  return (
    <ul className="  w-full flex items-center flex-wrap md:flex-nowrap gap-20">
      <li
        className={` w-full md:w-1/2 flex justify-center items-center p-0  ${
          contentAlignment === "right" && "order-1 "
        } ${contentAlignment === "left" && "order-2"}`}
      >
        {autoImage && (
          <Image
            src={image}
            width={1000}
            height={1000}
            alt="Image"
            className=" object-cover"
          />
        )}
        {image && !autoImage && (
          <aside className="relative w-full aspect-[1.5/1]">
            <Image
              src={image}
              // width={1000}
              // height={1000}
              fill
              alt="Image"
              className=" object-cover"
            />
          </aside>
        )}
      </li>
      <li
        className={` w-full md:w-1/2 text-white  space-y-5 ${
          contentAlignment === "right" && "order-2 "
        } ${contentAlignment === "left" && "order-1 "}`}
      >
        <Heading type="h5">{title}</Heading>
        {description && <p>{description}</p>}
        {content.map(
          (
            item: { type: string; value: ListType[] | IconsType[] | any },
            indx
          ) => (
            <aside key={indx}>
              {item.type === "text" && typeof item.value === "string" && (
                <p className=" text-[#A3A3A3]">{item.value}</p>
              )}
              {item.type === "list" && item.value[0]?.title && (
                <ul>
                  {typeof item.value !== "string" && (
                    <>
                      {item.value.map(
                        (
                          item: { title: string; description: string },
                          indx: number
                        ) => (
                          <li key={indx} className=" py-5 border-b">
                            {item.title}
                            {item?.description && (
                              <p className=" text-textGray">
                                {item?.description}
                              </p>
                            )}
                          </li>
                        )
                      )}
                    </>
                  )}
                </ul>
              )}
              {item.type === "icons" && item.value[0]?.icon && (
                <>
                  {typeof item.value !== "string" && (
                    <ul className=" flex gap-5 flex-wrap justify-center">
                      {item.value.map(
                        (
                          icon: { icon: string; title: string },
                          indx: number
                        ) => (
                          <li
                            key={indx}
                            className=" flex flex-col items-center justify-center"
                          >
                            {icon.icon && (
                              <aside className=" w-20 aspect-square relative">
                                <Image
                                  src={validateImageUrl(icon.icon)}
                                  alt="icon"
                                  fill
                                  sizes="(max-width: 768px) 5rem, (max-width: 1200px) 5rem, 5rem"
                                  className=" object-contain"
                                />
                              </aside>
                            )}

                            {icon.title}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </>
              )}
            </aside>
          )
        )}
        {button?.title && (
          <div className="flex justify-start">
            <Button appearance="primary" url={button?.url} size={"medium"}>
              {button?.title}
            </Button>
          </div>
        )}
      </li>
    </ul>
  );
};

export default ImageAndParagraph;
