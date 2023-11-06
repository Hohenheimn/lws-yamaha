import Image from "next/image";
import React from "react";

type PropsType = {
  image: string;
  title: string;
  description: string;
};

const FeatureCard = (props: PropsType) => {
  const feature = props;

  return (
    <figure className="relative basis-1/3 min-w-[300px] min-h-[400px] flex-1">
      <Image
        fill
        src={feature.image}
        alt={feature.title}
        className="object-cover"
      />
      <figcaption className="relative p-5 md:p-10 h-full w-full flex flex-col gap-4 justify-end text-white bg-gradient-to-t from-background from-20% to-transparent">
        <h3 className="text-xl font-semibold">{feature.title}</h3>
        <p>{feature.description}</p>
      </figcaption>
    </figure>
  );
};

export default FeatureCard;
