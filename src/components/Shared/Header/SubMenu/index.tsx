import React, { useState } from "react";

import Link from "next/link";

import { IoMdCloseCircle } from "react-icons/io";

import { navUrlsType } from "@/data/navigationUrl";

import NavMenus from "./NavMenus";
import NavSubTab from "./NavSubTab";

type props = {
  clickedMenu: navUrlsType | null;
  setClickedMenu: Function;
};

export default function SubMenu({ clickedMenu, setClickedMenu }: props) {
  return (
    <nav className=" flex flex-col justify-center items-center w-full absolute top-full left-0 py-10 bg-[#6a6a6a58] backdrop-blur-lg space-y-5">
      <div className=" w-11/12">
        {clickedMenu?.tabs && <NavSubTab tabs={clickedMenu?.tabs} />}
        {clickedMenu?.menus && <NavMenus menus={clickedMenu?.menus} />}
      </div>
      <aside
        className=" cursor-pointer group group-hover flex items-center justify-center gap-2"
        onClick={() => setClickedMenu(null)}
      >
        <p>Close</p>
        <IoMdCloseCircle className=" text-cs-lg text-gray-300 duration-150 group-hover:text-secondary" />
      </aside>
    </nav>
  );
}
