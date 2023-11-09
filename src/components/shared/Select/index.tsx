import React from "react";
import { IoIosArrowDown } from "react-icons/io";

type PropsType = {
  select: string;
  setSelect: Function;
  choices: string[];
};

const Select = (props: PropsType) => {
  const { select, setSelect, choices } = props;
  return (
    <div className=" w-full relative">
      <IoIosArrowDown className="absolute top-[50%] translate-y-[-50%] right-5 text-2xl text-white" />
      <select
        placeholder=""
        className=" appearance-none w-full h-20 px-5 outline-none bg-transparent text-lg flex-1 placeholder:text-[#989898] text-white border border-[#898989] p-5"
      >
        {choices.map((item, indx) => (
          <option className=" bg-secondary" value={item} key={indx}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
