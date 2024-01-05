import SectionContainer from "@/components/sections/SectionContainer";
import React from "react";
import Image from "next/image";
import config from "@/utils/config";

type PropsType = Partial<{
  alignContentHorizontal: "left" | "right" | "center";
  alignContentVertical: "bottom" | "top" | "center";
  description: string;
  id: number;
  image: string;
  title: string;
}>;

const ImageTwoColParagraph = (props: PropsType) => {
  return (
    <SectionContainer
      width={"widest"}
      className="px-10 flex flex-col gap-5 text-white"
    >
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400] xl:h-[500px]">
        <Image
          src={`${config.imageBaseUrl}${props?.image}`}
          fill
          alt={`${props?.title}`}
          className="object-cover object-center"
        />
      </div>
      <div className="font-bold mt-10">{props?.title}</div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="flex-col flex-1 gap-5">
          {props?.description
            ?.split("\n\n")
            .slice(0, props?.description?.split("\n\n").length / 2 - 1)
            .map((desc, idx) => (
              <div key={idx} className="whitespace-pre-wrap pb-5">
                {desc}
              </div>
            ))}
        </div>
        <div className="flex-col flex-1 gap-5">
          {props?.description
            ?.split("\n\n")
            .slice(props?.description?.split("\n\n").length / 2 - 1)
            .map((desc, idx) => (
              <div key={idx} className="whitespace-pre-wrap pb-5">
                {desc}
              </div>
            ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ImageTwoColParagraph;
