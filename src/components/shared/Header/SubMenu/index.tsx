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
    <nav className="flex flex-col max-h-[92vh] md:px-0 justify-start items-center w-full absolute top-full left-0 py-4 bg-[#28282890] backdrop-blur-lg md:h-80">
      {clickedMenu?.children[0].children && (
        <NavSubTab
          tabs={clickedMenu?.children}
          setClickedMenu={setClickedMenu}
        />
      )}
      {!clickedMenu?.children[0].children && (
        <NavSubMenus
          menus={clickedMenu?.children}
          setClickedMenu={setClickedMenu}
        />
      )}

      <aside
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 cursor-pointer group group-hover flex items-center justify-center gap-1 mb-1"
        onClick={() => setClickedMenu(null)}
      >
        <p className="font-medium lg:text-sm">Close</p>
        <IoMdCloseCircle className="text-3xl text-gray-300 duration-150 group-hover:text-secondary-2" />
      </aside>
    </nav>
  );
}
