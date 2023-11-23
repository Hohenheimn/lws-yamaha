type PropsType = {
  title: string;
  description?: string;
};

const ArrowTitle = (props: PropsType) => {
  return (
    <div className="flex gap-12 overflow-hidden items-center w-fit">
      <div className="flex relative items-center bg-[#D52B1E]">
        <div className="h-[40px] w-[40px] rotate-45 bg-[#D52B1E] absolute left-[70%]"></div>
        <div className="h-[40px] -ml-5 w-[80px] z-0 relative bg-gradient-to-r overflow-x-hidden from-[#000000] to-[#D52B1E] "></div>
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
