"use client";

import React from "react";
import Link from "next/link";

import { navMenusType } from "@/data/navigationUrl";

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

export default NavMenus;
