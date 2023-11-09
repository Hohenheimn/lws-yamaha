import React from "react";
import Image from "next/image";

import Button from "@/components/shared/Button";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  image: string;
  imagePosition: "left" | "right";
  title: string;
  content: React.ReactNode;
  url: string;
  urlTitle: string;
};

const ServiceDetailSection = (props: PropsType) => {
  const { image, imagePosition, title, content, url, urlTitle } = props;
  return (
    <SectionContainer
      width="narrow"
      className="flex items-center flex-wrap lg:flex-nowrap gap-10 text-white"
    >
      <aside
        className={` w-full lg:w-6/12 ${
          imagePosition === "right" && "order-2 "
        } ${imagePosition === "left" && "order-1"}`}
      >
        <Image
          src={image}
          alt="Image"
          width={800}
          height={800}
          className=" w-auto h-auto"
        />
      </aside>
      <article
        className={` w-full lg:w-6/12 space-y-5 ${
          imagePosition === "right" && "order-1 "
        } ${imagePosition === "left" && "order-2 "}`}
      >
        <Heading type="h5" className=" font-medium">
          {title}
        </Heading>
        {content}
        <Button appearance="primary" url={url} size={"medium"}>
          {urlTitle}
        </Button>
      </article>
    </SectionContainer>
  );
};

export default ServiceDetailSection;
