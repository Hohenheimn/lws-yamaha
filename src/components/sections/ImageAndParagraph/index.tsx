import React from "react";

import Image from "next/image";

import SectionContainer from "@/components/sections/SectionContainer";
import Heading from "@/components/shared/Heading";

import Button from "../../shared/Button";

type PropsType = {
  title: string;
  image: string;
  imagePosition: "left" | "right";
  content: {
    type: "text" | "list" | "icons";
    value:
      | string
      | string[]
      | {
          icon: string;
          title: string;
        }[];
  }[];
  button?: {
    title: string;
    url: string;
  };
};

const ImageAndParagraph = (props: PropsType) => {
  const { title, content, image, imagePosition, button } = props;
  return (
    <ul className="  flex items-center flex-wrap md:flex-nowrap gap-20">
      <li
        className={` w-full md:w-1/2 flex justify-center items-center p-0 lg:p-10 ${
          imagePosition === "right" && "order-2 "
        } ${imagePosition === "left" && "order-1"}`}
      >
        <Image src={image} width={1000} height={1000} alt="Image" />
      </li>
      <li
        className={` w-full md:w-1/2 text-white  space-y-5 ${
          imagePosition === "right" && "order-1 "
        } ${imagePosition === "left" && "order-2 "}`}
      >
        <Heading type="h5">{title}</Heading>
        {content.map((item, indx) => (
          <aside key={indx}>
            {item.type === "text" && typeof item.value === "string" && (
              <p className=" text-[#A3A3A3]">{item.value}</p>
            )}
            {item.type === "list" && (
              <ul>
                {typeof item.value !== "string" && (
                  <>
                    {item.value.map((item: any, indx) => (
                      <li key={indx} className=" py-5 border-b">
                        {indx + 1}. {item}
                      </li>
                    ))}
                  </>
                )}
              </ul>
            )}
            {item.type === "icons" && (
              <>
                {typeof item.value !== "string" && (
                  <ul className=" flex gap-5 flex-wrap justify-center">
                    {item.value.map((icon: any, indx) => (
                      <li
                        key={indx}
                        className=" flex flex-col items-center justify-center"
                      >
                        <aside className=" w-20 aspect-square relative">
                          <Image
                            src={icon.icon}
                            alt="icon"
                            fill
                            sizes="(max-width: 768px) 5rem, (max-width: 1200px) 5rem, 5rem"
                            className=" object-contain"
                          />
                        </aside>
                        {icon.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </aside>
        ))}
        {button && (
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
