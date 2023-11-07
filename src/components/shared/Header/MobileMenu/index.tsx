import React, { useState } from "react";
import Link from "next/link";
import { IoMdCloseCircle } from "react-icons/io";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { navTabType, navUrls, navUrlsType } from "@/data/navigationUrl";

import NavSubMenus from "../SubMenu/NavMenus";
import NavSubTab from "../SubMenu/NavSubTab";

type PropsType = {
  setClickedMenu: Function;
};

const MobileMenu = ({ setClickedMenu }: PropsType) => {
  const [selectedMenu, setSelectedMenu] = useState<undefined | navUrlsType>(
    undefined
  );
  return (
    <nav className=" flex flex-col max-h-[92vh] overflow-auto md:px-0 justify-start items-center w-full absolute top-full left-0 py-10 bg-[#6a6a6a58] backdrop-blur-lg space-y-5">
      {!selectedMenu && (
        <ul className="w-11/12 space-y-3">
          {navUrls.map((item, indx) => (
            <li key={indx} className=" flex w-full justify-between">
              {item?.url ? (
                <Link href={item?.url} className=" text-2xl">
                  {item.title}
                </Link>
              ) : (
                <>
                  <div
                    className=" cursor-pointer  text-2xl w-full flex items-center justify-between"
                    onClick={() => {
                      setClickedMenu(item);
                      setSelectedMenu(item);
                    }}
                  >
                    {item.title}
                    <MdOutlineKeyboardArrowRight className=" text-3xl" />
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      {selectedMenu?.tabs && (
        <NavSubTab
          tabs={selectedMenu.tabs}
          onClose={() => setSelectedMenu(undefined)}
        />
      )}
      {selectedMenu?.menus && (
        <NavSubMenus
          menus={selectedMenu.menus}
          onClose={() => setSelectedMenu(undefined)}
        />
      )}

      <aside
        className=" cursor-pointer group group-hover flex items-center justify-center gap-2"
        onClick={() => setClickedMenu(null)}
      >
        <p>Close</p>
        <IoMdCloseCircle className=" text-cs-lg text-gray-300 duration-150 group-hover:text-secondary" />
      </aside>
    </nav>
  );
};

export default MobileMenu;
