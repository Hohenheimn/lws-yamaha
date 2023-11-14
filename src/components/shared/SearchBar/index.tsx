import React from "react";
import { BsSearch } from "react-icons/bs";

type PropsType = {
  search: string;
  setSearch: Function;
  placeholder?: string;
};

const SearchBar = (props: PropsType) => {
  const { search, setSearch, placeholder } = props;
  return (
    <div className=" flex items-center gap-5 text-white border border-[#898989] h-16 lg:h-20 px-5">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        className=" outline-none bg-transparent text-lg flex-1 placeholder:text-[#989898] "
        autoComplete="off"
      />
      <BsSearch className=" text-3xl" />
    </div>
  );
};

export default SearchBar;
