"use client";

import React, { useState } from "react";
import Link from "next/link";

import { navTabType } from "@/data/navigationUrl";

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
              "text-cs-md after:content-[''] text-white after:absolute after:w-full after:bottom-0 after:left-0 after:h-[2px] after:bg-white"
            } cursor-pointer relative`}
            onClick={() => setActiveTab(item.tab_title)}
          >
            {item.tab_title}
          </li>
        ))}
      </ul>
      <aside>
        {tabs.map((item, indx) => (
          <div key={indx}>
            {item.tab_title === activeTab && (
              <ul className="grid grid-rows-6 grid-flow-col gap-7">
                {item.menus.map((menu, menuIndx) => (
                  <li key={menuIndx}>
                    <Link href={menu.url}>{menu.name}</Link>
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
