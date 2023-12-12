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
        className="appearance-none w-full  h-16 lg:h-20 px-5 outline-none bg-transparent text-lg flex-1 text-[#989898] border border-[#898989] p-5"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="" disabled hidden>
          Find by Province
        </option>
        <option className="bg-secondary text-white" value={"All"}>
          All
        </option>
        {choices.map((item, indx) => (
          <option className="bg-secondary text-white" value={item} key={indx}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
