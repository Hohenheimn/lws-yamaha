"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

import { navUrls, navUrlsType } from "@/data/navigationUrl";

import MobileMenu from "./MobileMenu";
import SubMenu from "./SubMenu";

const Header = () => {
  const [clickedMenu, setClickedMenu] = useState<navUrlsType | null>(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const HandlerResize = () => {
      if (window.innerWidth <= 1280) {
        setMobileMenu(true);
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
    <nav className="w-full relative top-0 flex h-[8vh] md:h-auto justify-center bg-primary-2 text-white py-5 z-40">
      <div className=" w-11/12 flex items-center justify-between gap-5">
        <aside>
          <Image
            src="/assets/images/logo/logo.png"
            alt="logo"
            width={120}
            height={100}
          />
        </aside>
        <aside className=" flex items-center gap-5">
          <ul className="hidden xl:flex gap-5 items-center text-center">
            {navUrls.map((item, indx) => (
              <li key={indx}>
                {item?.url ? (
                  <Link href={item?.url} className=" text-base">
                    {item.title}
                  </Link>
                ) : (
                  <div
                    className=" cursor-pointer text-base"
                    onClick={() => {
                      setClickedMenu(item);
                    }}
                  >
                    {item.title}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <ul className="flex gap-5 items-center text-center">
            <li>
              <BiSearch className=" text-base cursor-pointer" />
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
                className=" text-base cursor-pointer"
              />
            </li>
          </ul>
        </aside>
      </div>
      {clickedMenu !== null && !mobileMenu && (
        <SubMenu clickedMenu={clickedMenu} setClickedMenu={setClickedMenu} />
      )}
      {clickedMenu !== null && mobileMenu && (
        <MobileMenu setClickedMenu={setClickedMenu} />
      )}
    </nav>
  );
};

export default Header;
