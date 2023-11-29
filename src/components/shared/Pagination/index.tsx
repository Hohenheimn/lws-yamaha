import React, { useEffect, useState } from "react";
import { MdPlayArrow } from "react-icons/md";

type Pagination = {
  setTablePage: Function;
  tablePage: number;
  totalPage: number;
};

export default function Pagination({
  setTablePage,
  tablePage,
  totalPage,
}: Pagination) {
  const SelectPage = (page: number) => {
    const SelectedPage = Number(page);
    setTablePage(SelectedPage);
  };

  const getPreviousAndNextNumbers = (number: number) => {
    const result = [];

    for (let i = number - 3; i <= number + 3; i++) {
      if (i >= 1 && i <= totalPage) {
        result.push(i);
      }
    }
    return result;
  };

  const [currentPages, setCurrentPages] = useState([1]);

  useEffect(() => {
    const activePage = getPreviousAndNextNumbers(tablePage);
    setCurrentPages(activePage);
  }, [tablePage, totalPage]);

  return (
    <div className=" w-full flex justify-end">
      <ul className=" flex items-center gap-3">
        <li>
          <button
            className="flex h-8 aspect-square justify-center items-center border border-white"
            disabled={1 === tablePage && true}
            onClick={() => setTablePage((page: number) => page - 1)}
          >
            <MdPlayArrow className="  rotate-180 text-[24px] text-white cursor-pointer" />
          </button>
        </li>

        <li className=" flex items-center text-gray-400 gap-x-2 ">
          {currentPages.map((item) => (
            <div
              onClick={() => SelectPage(item)}
              key={item}
              className={`${
                tablePage === item ? " text-white bg-red" : "border"
              } font-bold h-8 aspect-square 1550px:h-5 480px:h-6 text-[15px] flex justify-center items-center cursor-pointer`}
            >
              {item}
            </div>
          ))}
        </li>

        <li>
          <button
            className="flex h-8 aspect-square justify-center items-center border border-white"
            onClick={() => setTablePage((page: number) => page + 1)}
            disabled={tablePage === totalPage}
          >
            <MdPlayArrow className=" text-[24px] text-white cursor-pointer" />
          </button>
        </li>
      </ul>
    </div>
  );
}
