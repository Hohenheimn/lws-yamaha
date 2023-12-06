"use client";

import React, { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { PiShareBold } from "react-icons/pi";

import { navTabType } from "@/data/navigationUrl";

import { MenuType } from "..";

type PropsType = {
  tabs: MenuType[];
  onClose?: () => void;
  setClickedMenu?: Function;
};

const NavSubTab = ({ tabs, onClose, setClickedMenu }: PropsType) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(
    tabs.some((item) => pathname.includes(item.url)) ? pathname : tabs[0].url
  );
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
      <ul className=" flex flex-col md:flex-row gap-3 md:gap-16 items-center text-gray-300 tracking-wider mb-5">
        {tabs.map((item, indx: number) => (
          <li
            key={indx}
            className={`${
              activeTab.includes(item.url) &&
              " after:content-[''] text-white after:absolute after:w-full after:bottom-0 after:left-0 after:h-[2px] after:bg-white"
            } text-lg relative  flex gap-2  items-center`}
          >
            <div
              onClick={() => setActiveTab(item.url)}
              className=" cursor-pointer"
            >
              {item.label}
            </div>

            {item?.withLinkIcon && (
              <Link href={item.url}>
                <PiShareBold className=" text-1-2rem" />
              </Link>
            )}
          </li>
        ))}
      </ul>
      <aside className=" text-gray-300 pb-5 flex bo overflow-auto scrollbar-thin scrollbar-thumb-[#545454] hover:scrollbar-thumb-[#7a7a7a] scrollbar-thumb-rounded-full">
        {tabs.map((item, indx) => (
          <div key={indx}>
            {activeTab.includes(item.url) && (
              <ul className="grid md:grid-rows-6 grid-cols-1 md:grid-cols-none md:grid-flow-col gap-x-20 gap-y-5 overflow-auto">
                {item.children.map((menu, menuIndx) => (
                  <li key={menuIndx} className=" min-w-[7rem]">
                    <Link
                      href={menu.url}
                      className={`${
                        menu.url === pathname && "text-white font-bold"
                      } text-lg md:text-base`}
                      onClick={() => {
                        setClickedMenu && setClickedMenu(null);
                      }}
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
