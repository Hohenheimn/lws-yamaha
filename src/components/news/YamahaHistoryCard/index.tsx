import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

import Button from "@/components/shared/Button";

export type YamahaHistoryType = {
  id: number;
  image: string;
  title: string;
  description: string;
  externalLink: string;
};

type PropsType = YamahaHistoryType & {
  onClick?: () => void;
};

const YamahaHistoryCard = (props: PropsType) => {
  return (
    <figure className="min-w-[300px] max-w-[500px] flex flex-col justify-between gap-5 ">
      <aside className=" space-y-3">
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden bg-[#464646]">
          <Image
            fill
            src={props.image}
            alt={props.title}
            className="object-cover"
          />
        </div>
        <figcaption className="flex flex-col gap-3">
          <p className="text-[#f1f1f1] font-semibold text-2xl line-clamp-2">
            {props.title}
          </p>
          <p className="text-[#A3A3A3] line-clamp-4">{props.description}</p>
        </figcaption>
      </aside>
      <div>
        <Button
          appearance={"primary"}
          size={"medium"}
          onClick={props.onClick}
          url={props.externalLink}
        >
          Read More
        </Button>
      </div>
    </figure>
  );
};

export default YamahaHistoryCard;
