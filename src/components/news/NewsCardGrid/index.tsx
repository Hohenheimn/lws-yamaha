import Button from "@/components/shared/Button";
import classNames from "classnames";
import Image from "next/image";

type PropsType = {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
  onClick(): void;
  direction?: "column" | "row"; // default: 'row'
};

const NewsCardGrid = (props: PropsType) => {
  return (
    <figure
      className={`flex flex-row gap-5 flex-wrap ${classNames({
        "flex-col": props.direction === "column",
      })}`}
    >
      <div
        className={`relative w-full min-w-[300px] h-full min-h-[250px] bg-[#464646] flex-[3]`}
      >
        <Image
          fill
          src={props.image}
          alt={props.title}
          className="object-cover"
        />
      </div>
      <figcaption className="text-white flex min-w-[300px] flex-col gap-2 flex-[2]">
        <p className="text-[#f1f1f1] font-semibold text-xl line-clamp-4">
          {props.title}
        </p>
        <p className="text-white">{props.date}</p>
        <p className={`text-[#A3A3A3]  line-clamp-5`}>{props.description}</p>
        <div className="w-fit flex items-end flex-1">
          <Button appearance="primary" size="medium" onClick={props.onClick}>
            See more
          </Button>
        </div>
      </figcaption>
    </figure>
  );
};

export default NewsCardGrid;
