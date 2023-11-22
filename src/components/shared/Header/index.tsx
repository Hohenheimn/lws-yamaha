"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSearch } from "react-icons/bi";

import { FaBars } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";

import { IoIosArrowDown } from "react-icons/io";

import { IoMenuSharp } from "react-icons/io5";

import { navUrls, navUrlsType } from "@/data/navigationUrl";

import MobileMenu from "./MobileMenu";
import SubMenu from "./SubMenu";

export type MenuType = {
  id: number;
  label: string;
  url: string;
  parentId: string | null;
  children: MenuType[];
};

type PropsType = {
  menu: MenuType[];
};

const Header = (props: PropsType) => {
  const { menu } = props;

  const pathname = usePathname();

  const [clickedMenu, setClickedMenu] = useState<MenuType | null>(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const HandlerResize = () => {
      if (window.innerWidth <= 1280) {
        setClickedMenu(null);
      } else {
        setMobileMenu(false);
      }
    };
    window.addEventListener("resize", HandlerResize);
    HandlerResize();
    return () => {
      window.removeEventListener("resize", HandlerResize);
    };
  });

  return (
    <nav className="w-full sticky top-0 flex h-[8vh] md:h-auto justify-center bg-primary-2 text-white py-5 z-40">
      <div className=" w-11/12 flex items-center justify-between gap-5">
        <aside>
          <Link href={"/"}>
            <Image
              src="/assets/images/logo/logo.png"
              alt="logo"
              width={120}
              height={100}
            />
          </Link>
        </aside>
        <aside className=" flex items-center gap-5 text-textGray">
          <ul className="hidden xl:flex gap-10 items-center text-center ">
            {menu
              .sort((a, b) => a.id - b.id)
              .map((item, indx) => (
                <li key={indx}>
                  {item?.children ? (
                    <div
                      className={` hover:text-white duration-150 cursor-pointer text-base flex items-center gap-2 ${
                        (clickedMenu?.label === item.label ||
                          pathname.includes(item.url)) &&
                        "text-white"
                      }`}
                      onClick={() => {
                        setClickedMenu(item);
                      }}
                    >
                      {item.label} <IoIosArrowDown />
                    </div>
                  ) : (
                    <Link
                      href={`${item?.url}`}
                      className={` text-base hover:text-white duration-150 ${
                        (clickedMenu?.label === item.label ||
                          pathname.includes(item.url)) &&
                        "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
          </ul>
          <ul className="flex gap-5 items-center text-center">
            <li>
              <BiSearch className=" text-2xl cursor-pointer" />
            </li>
            <li>
              <div
                className={` hover:text-white duration-150 cursor-pointer text-base flex items-center gap-2 `}
              >
                <IoMenuSharp
                  className=" inline-block xl:hidden text-2xl"
                  onClick={() => setMobileMenu(!mobileMenu)}
                />
              </div>
            </li>
          </ul>
        </aside>
      </div>
      {clickedMenu !== null && (
        <SubMenu clickedMenu={clickedMenu} setClickedMenu={setClickedMenu} />
      )}
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} menu={menu} />}
    </nav>
  );
};

export default Header;
