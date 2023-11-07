"use client";

import React, { useState } from "react";
import Link from "next/link";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { navTabType } from "@/data/navigationUrl";

type PropsType = {
  tabs: navTabType[];
  onClose?: () => void;
};

const NavSubTab = ({ tabs, onClose }: PropsType) => {
  const [activeTab, setActiveTab] = useState(tabs[0].tab_title);
  return (
    <section className=" w-11/12">
      <button
        className=" text-base flex xl:hidden items-center mb-5"
        onClick={() => {
          onClose && onClose();
        }}
      >
        <MdOutlineKeyboardArrowLeft className=" text-3xl" />
        Back
      </button>
      <ul className=" flex flex-col md:flex-row gap-5 items-center text-gray-300 tracking-wider mb-10">
        {tabs.map((item, indx: number) => (
          <li
            key={indx}
            className={`${
              activeTab === item.tab_title
                ? " text-2xl after:content-[''] text-white after:absolute after:w-full after:bottom-0 after:left-0 after:h-[2px] after:bg-white"
                : "text-lg"
            } cursor-pointer relative`}
            onClick={() => setActiveTab(item.tab_title)}
          >
            {item.tab_title}
          </li>
        ))}
      </ul>
      <aside className=" pb-5 space-y-5 flex bo overflow-auto scrollbar-thin scrollbar-thumb-[#545454] hover:scrollbar-thumb-[#7a7a7a] scrollbar-thumb-rounded-full">
        {tabs.map((item, indx) => (
          <div key={indx}>
            {item.tab_title === activeTab && (
              <ul className="grid md:grid-rows-6 grid-cols-1 md:grid-cols-none md:grid-flow-col gap-7 overflow-auto">
                {item.menus.map((menu, menuIndx) => (
                  <li key={menuIndx} className=" min-w-[7rem]">
                    <Link href={menu.url} className=" text-lg md:text-base">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </aside>
    </section>
  );
};

export default NavSubTab;
