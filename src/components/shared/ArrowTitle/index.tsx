import { BsTriangleFill } from "react-icons/bs";

type PropsType = {
  title: string;
  description?: string;
};

const ArrowTitle = (props: PropsType) => {
  return (
    <div className="flex gap-7 items-center w-fit">
      <div className="flex items-center h-[40px] overflow-y-hidden">
        <div className="from-[#000000] to-[#D52B1E] via-[#D52B1E]  bg-gradient-to-r h-[40px] w-[80px]"></div>
        <BsTriangleFill className="h-full text-[40px] rotate-90 -translate-x-[5px] text-[#D52B1E]" />
      </div>
      <aside className=" space-y-2">
        <p className="text-[#f1f1f1] font-bold text-3xl">{props.title}</p>
        {props.description && (
          <p className=" text-textGray">{props.description}</p>
        )}
      </aside>
    </div>
  );
};

export default ArrowTitle;
