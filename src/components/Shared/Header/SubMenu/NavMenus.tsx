"use client";

import React from "react";
import Link from "next/link";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { navMenusType } from "@/data/navigationUrl";

type PropsType = {
  menus: navMenusType[];
  onClose?: () => void;
};

const NavSubMenus = ({ menus, onClose }: PropsType) => {
  return (
    <section className="w-11/12 space-y-10">
      <button
        className=" text-base flex xl:hidden items-center mb-5"
        onClick={() => {
          onClose && onClose();
        }}
      >
        <MdOutlineKeyboardArrowLeft className=" text-3xl" />
        Back
      </button>
      <aside className=" pb-5 space-y-5 flex bo overflow-auto scrollbar-thin scrollbar-thumb-[#545454] hover:scrollbar-thumb-[#7a7a7a] scrollbar-thumb-rounded-full">
        <ul className="grid md:grid-rows-6 grid-cols-1 md:grid-cols-none md:grid-flow-col gap-7 overflow-auto">
          {menus.map((menu, menuIndx) => (
            <li key={menuIndx} className=" min-w-[7rem]">
              <Link href={menu.url} className=" text-lg md:text-base">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default NavSubMenus;
