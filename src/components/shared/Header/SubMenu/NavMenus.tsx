"use client";

import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { navMenusType } from "@/data/navigationUrl";

import { MenuType } from "..";

type PropsType = {
  menus: MenuType[] | undefined;
  onClose?: () => void;
};

const NavSubMenus = ({ menus, onClose }: PropsType) => {
  const pathname = usePathname();
  return (
    <section className="w-11/12">
      <button
        className=" text-base flex xl:hidden items-center mb-10"
        onClick={() => {
          onClose && onClose();
        }}
      >
        <MdOutlineKeyboardArrowLeft className=" text-3xl" />
        Back
      </button>
      <aside className=" pb-5 space-y-5 flex bo overflow-auto scrollbar-thin scrollbar-thumb-[#545454] hover:scrollbar-thumb-[#7a7a7a] scrollbar-thumb-rounded-full">
        <ul className=" text-textGray grid md:grid-rows-4 grid-cols-1 md:grid-cols-none md:grid-flow-col gap-x-20 gap-y-7 overflow-auto">
          {menus?.map((menu, menuIndx) => (
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
      </aside>
    </section>
  );
};

export default NavSubMenus;
