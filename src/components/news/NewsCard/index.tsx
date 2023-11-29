import Image from "next/image";

import Button from "@/components/shared/Button";

import NewsCardGrid from "../NewsCardGrid";

export type NewsCardType = {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
  url: string;
  onClick?: () => void;
};

type PropsType = NewsCardType;

const NewsCard = (props: PropsType) => {
  return (
    <figure className="bg-[#323232] min-w-[300px] max-w-[450px] rounded-lg overflow-hidden">
      <div className="relative w-full h-[300px] bg-[#464646]">
        <Image
          fill
          src={props.image}
          alt={props.title}
          className="object-cover"
        />
      </div>
      <figcaption className="p-5 flex flex-col gap-3">
        <p className="text-[#f1f1f1]">{props.date}</p>
        <p className="text-[#f1f1f1] font-semibold text-2xl line-clamp-2">
          {props.title}
        </p>
        <p className="text-[#A3A3A3] line-clamp-4 mb-3">{props.description}</p>
        <Button
          appearance={"primary"}
          url={props.url}
          size={"large"}
          onClick={props.onClick}
        >
          Read More
        </Button>
      </figcaption>
    </figure>
  );
};

export default NewsCard;
