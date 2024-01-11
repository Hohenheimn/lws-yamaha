"use client";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

type PropsType = {
  image: string;
  title: string;
  description: string;
};

const FeatureCard = (props: PropsType) => {
  const [isSeeMore, setIsSeeMore] = useState(true);
  const feature = props;

  const characterLength = props.description.length;

  return (
    <figure className="relative basis-1/3 min-w-[300px] min-h-[400px] flex-1">
      <Image
        fill
        src={feature.image}
        alt={feature.title}
        className="object-cover"
      />
      <figcaption className="relative p-5 md:p-10 h-full w-full flex flex-col justify-end text-white bg-gradient-to-t from-background from-20% to-transparent">
        <div className="space-y-4">
          <h4 className="text-xl font-medium">{feature.title}</h4>
          <p
            className={classNames(
              "text-sm md:text-base text-[#dbdbdb] max-w-[400px]",
              isSeeMore && "truncate text-ellipsis"
            )}
          >
            {feature.description}
          </p>
        </div>
        {characterLength > 55 ? (
          <button
            className="text-sm md:text-base text-[#c6c6c6] w-fit mt-2 border-b-[2px] border-[#c6c6c6] font-semibold"
            onClick={() => setIsSeeMore(!isSeeMore)}
          >
            {isSeeMore ? "See more" : "See less"}
          </button>
        ) : null}
      </figcaption>
    </figure>
  );
};

export default FeatureCard;
