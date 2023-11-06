import React, { useState } from "react";

import Link from "next/link";

import { IoMdCloseCircle } from "react-icons/io";

import { navUrlsType } from "@/data/navigationUrl";

import NavSubMenus from "./NavMenus";
import NavSubTab from "./NavSubTab";

type props = {
  clickedMenu: navUrlsType | null;
  setClickedMenu: Function;
};

export default function SubMenu({ clickedMenu, setClickedMenu }: props) {
  return (
    <nav className=" flex flex-col max-h-[92vh] overflow-auto md:px-0 justify-start items-center w-full absolute top-full left-0 py-10 bg-[#6a6a6a58] backdrop-blur-lg space-y-5">
      {clickedMenu?.tabs && <NavSubTab tabs={clickedMenu?.tabs} />}
      {clickedMenu?.menus && <NavSubMenus menus={clickedMenu?.menus} />}

      <aside
        className=" cursor-pointer group group-hover flex items-center justify-center gap-2"
        onClick={() => setClickedMenu(null)}
      >
        <p>Close</p>
        <IoMdCloseCircle className=" text-3xl text-gray-300 duration-150 group-hover:text-secondary-2" />
      </aside>
    </nav>
  );
}
