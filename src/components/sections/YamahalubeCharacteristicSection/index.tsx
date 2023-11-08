import React from "react";

import Image from "next/image";

import Button from "@/components/shared/Button";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  title: string;
  image: string;
  characteristics: {
    title: string;
    description: string;
    highlighted_footer?: string;
  }[];
  url: string;
};

const YamahalubeCharacteristicSection = (props: PropsType) => {
  const { title, image, url, characteristics } = props;
  return (
    <section className=" flex justify-end">
      <section className="  w-[95.83%] gap-0 md:gap-20 flex flex-wrap md:flex-nowrap relative">
        <article className=" w-full md:w-6/12 space-y-5 text-white py-8 md:py-14  order-2 md:order-1">
          <Heading type={"h5"}>{title}</Heading>
          <ul className=" space-y-5">
            {characteristics.map((item, indx) => (
              <li key={indx} className=" pb-5 space-y-3 border-b">
                <p className=" font-medium">
                  {indx + 1}. {item.title}
                </p>
                <p className=" text-textGray">{item.description}</p>
                {item?.highlighted_footer && (
                  <p className=" font-medium">{item?.highlighted_footer}</p>
                )}
              </li>
            ))}
          </ul>
          <Button appearance="primary" url={url} size={"large"}>
            See Products
          </Button>
        </article>
        <aside className="  w-full md:w-6/12 order-1 md:order-2 flex justify-end -mb-16 md:mb-0">
          <div className=" w-6/12 md:w-full">
            <Image src={image} alt="Image" height={1000} width={1000} />
          </div>
        </aside>
      </section>
    </section>
  );
};

export default YamahalubeCharacteristicSection;
