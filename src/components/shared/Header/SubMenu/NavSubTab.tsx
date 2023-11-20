"use client";

import React, { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { navTabType } from "@/data/navigationUrl";

import { MenuType } from "..";

type PropsType = {
  tabs: MenuType[];
  onClose?: () => void;
};

const NavSubTab = ({ tabs, onClose }: PropsType) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(
    tabs.some((item) => pathname.includes(item.url)) ? pathname : tabs[0].url
  );
  return (
    <section className=" w-11/12">
      <button
        className=" text-base flex xl:hidden items-center mb-10"
        onClick={() => {
          onClose && onClose();
        }}
      >
        <MdOutlineKeyboardArrowLeft className=" text-3xl" />
        Back
      </button>
      <ul className=" flex flex-col md:flex-row gap-16 items-center text-textGray tracking-wider mb-5">
        {tabs.map((item, indx: number) => (
          <li
            key={indx}
            className={`${
              activeTab.includes(item.url) &&
              " after:content-[''] text-white after:absolute after:w-full after:bottom-0 after:left-0 after:h-[2px] after:bg-white"
            } text-lg cursor-pointer relative`}
            onClick={() => setActiveTab(item.url)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <aside className=" text-textGray pb-5 space-y-5 flex bo overflow-auto scrollbar-thin scrollbar-thumb-[#545454] hover:scrollbar-thumb-[#7a7a7a] scrollbar-thumb-rounded-full">
        {tabs.map((item, indx) => (
          <div key={indx}>
            {activeTab.includes(item.url) && (
              <ul className="grid md:grid-rows-6 grid-cols-1 md:grid-cols-none md:grid-flow-col gap-x-20 gap-y-5 overflow-auto">
                {item.children.map((menu, menuIndx) => (
                  <li key={menuIndx} className=" min-w-[7rem]">
                    <Link
                      href={menu.url}
                      className={`${
                        menu.url === pathname && "text-white"
                      } text-lg md:text-base`}
                    >
                      {menu.label}
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
