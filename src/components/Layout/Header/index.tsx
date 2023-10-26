"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

import { navUrls, navUrlsType } from "./NavUrl";
import SubMenu from "./SubMenu";

const Header = () => {
  const [clickedMenu, setClickedMenu] = useState<navUrlsType | null>(null);
  return (
    <nav className="w-full sticky top-0 flex justify-center bg-primary-2 text-white py-5 z-40">
      <div className=" w-11/12 flex items-center justify-between gap-5">
        <aside>
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            width={120}
            height={100}
          />
        </aside>
        <ul className="hidden xl:flex gap-8 items-center text-center">
          {navUrls.map((item, indx) => (
            <li key={indx}>
              {item?.url ? (
                <Link href={item?.url}>
                  <p>{item.title}</p>
                </Link>
              ) : (
                <div
                  className=" cursor-pointer"
                  onClick={() => {
                    setClickedMenu(item);
                  }}
                >
                  {item.title}
                </div>
              )}
            </li>
          ))}
          <li>
            <BiSearch className=" text-cs-md cursor-pointer" />
          </li>
          <li>
            <FaBars
              onClick={() =>
                setClickedMenu({
                  title: "menu-bar",
                  menus: [
                    {
                      name: "About Us",
                      url: "",
                    },
                    {
                      name: "Contact & Inquiry",
                      url: "",
                    },
                    {
                      name: "Privacy Policy",
                      url: "",
                    },
                  ],
                })
              }
              className=" text-cs-md cursor-pointer"
            />
          </li>
        </ul>
      </div>
      {clickedMenu !== null && (
        <SubMenu clickedMenu={clickedMenu} setClickedMenu={setClickedMenu} />
      )}
    </nav>
  );
};

export default Header;
