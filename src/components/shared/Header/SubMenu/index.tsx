import React, { useEffect, useRef } from "react";

import { IoMdCloseCircle } from "react-icons/io";

import { MenuType } from "..";
import NavSubMenus from "./NavMenus";
import NavSubTab from "./NavSubTab";

type props = {
  clickedMenu: MenuType | null;
  setClickedMenu: Function;
};

export default function SubMenu({ clickedMenu, setClickedMenu }: props) {
  const container = useRef<any>();

  useEffect(() => {
    const clickOutSide = (e: any) => {
      if (!container.current.contains(e.target)) {
        setClickedMenu(null);
      }
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  });

  useEffect(() => {
    const HandlerResize = () => {
      if (window.innerWidth < 1280) {
        setClickedMenu(null);
      }
    };
    window.addEventListener("resize", HandlerResize);
    HandlerResize();
    return () => {
      window.removeEventListener("resize", HandlerResize);
    };
  });

  return (
    <nav
      ref={container}
      className="flex flex-col max-h-[92vh] md:px-0 justify-start items-center w-full absolute top-full left-0 py-4 bg-[#28282890] backdrop-blur-lg"
    >
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
        className="  cursor-pointer group group-hover flex items-center justify-center gap-1 mt-5"
        onClick={() => setClickedMenu(null)}
      >
        <p className="font-medium lg:text-sm">Close</p>
        <IoMdCloseCircle className="text-3xl text-gray-300 duration-150 group-hover:text-gray-400" />
      </aside>
    </nav>
  );
}
