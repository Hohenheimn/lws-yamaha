import React, { useState } from "react";

import Link from "next/link";

import { IoMdCloseCircle } from "react-icons/io";

import { navMenusType, navTabType, navUrlsType } from "./NavUrl";

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

const NavMenus = ({ menus }: { menus: navMenusType[] }) => {
  return (
    <section className=" space-y-10">
      <ul className="grid grid-rows-6 grid-flow-col gap-7">
        {menus.map((menu, menuIndx) => (
          <li key={menuIndx}>
            <Link href={menu.url}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
const NavSubTab = ({ tabs }: { tabs: navTabType[] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].tab_title);
  return (
    <section className=" space-y-10">
      <ul className=" flex gap-5 text-cs-md items-center text-gray-300 tracking-wider">
        {tabs.map((item, indx: number) => (
          <li
            key={indx}
            className={`${
              activeTab === item.tab_title &&
              "text-cs-md after:content-[''] font-montserrat-bold text-white after:absolute after:w-full after:bottom-0 after:left-0 after:h-[2px] after:bg-white"
            } cursor-pointer relative`}
            onClick={() => setActiveTab(item.tab_title)}
          >
            {item.tab_title}
          </li>
        ))}
      </ul>
      <aside>
        {tabs.map((item, indx) => (
          <>
            {item.tab_title === activeTab && (
              <ul className="grid grid-rows-6 grid-flow-col gap-7">
                {item.menus.map((menu, menuIndx) => (
                  <li key={menuIndx}>
                    <Link href={menu.url}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </aside>
    </section>
  );
};
