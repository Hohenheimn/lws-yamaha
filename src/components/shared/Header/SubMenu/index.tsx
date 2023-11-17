import React from "react";

import { IoMdCloseCircle } from "react-icons/io";

import { MenuType } from "..";
import NavSubMenus from "./NavMenus";
import NavSubTab from "./NavSubTab";

type props = {
  clickedMenu: MenuType | null;
  setClickedMenu: Function;
};

export default function SubMenu({ clickedMenu, setClickedMenu }: props) {
  return (
    <nav className=" flex flex-col max-h-[92vh] overflow-auto md:px-0 justify-start items-center w-full absolute top-full left-0 pt-10 pb-3 bg-[#6a6a6a58] backdrop-blur-lg space-y-2">
      {clickedMenu?.children[0].children && (
        <NavSubTab tabs={clickedMenu?.children} />
      )}
      {!clickedMenu?.children[0].children && (
        <NavSubMenus menus={clickedMenu?.children} />
      )}

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
