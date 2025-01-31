"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { MenuType } from "..";
import NavSubMenus from "../SubMenu/NavMenus";
import NavSubTab from "../SubMenu/NavSubTab";

type PropsType = {
  setMobileMenu: Function;
  menu: MenuType[];
};

const MobileMenu = ({ setMobileMenu, menu }: PropsType) => {
  const pathname = usePathname();
  const container = useRef<any>();

  const [selectedMenu, setSelectedMenu] = useState<undefined | MenuType>(
    undefined
  );

  useEffect(() => {
    const clickOutSide = (e: any) => {
      if (!container.current.contains(e.target)) {
        setMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  });

  useEffect(() => {
    const HandlerResize = () => {
      if (window.innerWidth >= 1280) {
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
    <nav
      ref={container}
      className=" flex flex-col max-h-[92vh] overflow-auto md:px-0 justify-start items-center w-full absolute top-full left-0 py-10 bg-[#28282890] backdrop-blur-lg space-y-5"
    >
      {!selectedMenu && (
        <ul className="w-11/12 space-y-3 text-gray-300">
          {menu.map((item, indx) => (
            <li key={indx} className=" flex w-full justify-between">
              {item?.children ? (
                <>
                  <div
                    className={`cursor-pointer text-2xl w-full flex items-center justify-between  ${
                      pathname.includes(item.url) && "text-white font-medium"
                    }`}
                    onClick={() => {
                      setSelectedMenu(item);
                    }}
                  >
                    {item.label}
                    <MdOutlineKeyboardArrowRight className=" text-3xl" />
                  </div>
                </>
              ) : (
                <Link
                  href={`${item?.url}`}
                  className=" text-2xl"
                  onClick={() => {
                    setSelectedMenu(undefined);
                    setMobileMenu(false);
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}

      {selectedMenu?.children[0].children && (
        <NavSubTab
          tabs={selectedMenu.children}
          onClose={() => setSelectedMenu(undefined)}
          setMobileMenu={setMobileMenu}
        />
      )}
      {!selectedMenu?.children[0].children && (
        <NavSubMenus
          menus={selectedMenu?.children}
          onClose={() => setSelectedMenu(undefined)}
          setMobileMenu={setMobileMenu}
        />
      )}

      <aside
        className=" cursor-pointer group group-hover flex items-center justify-center gap-2 "
        onClick={() => setMobileMenu(false)}
      >
        <p>Close</p>
        <IoMdCloseCircle className=" text-cs-lg text-gray-300 duration-150 group-hover:text-secondary" />
      </aside>
    </nav>
  );
};

export default MobileMenu;
