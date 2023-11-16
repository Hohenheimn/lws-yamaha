"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

import { GrMenu } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

import { IoMenuSharp } from "react-icons/io5";

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
    <nav className="w-full sticky top-0 flex h-[8vh] md:h-auto justify-center bg-primary-2 text-white py-5 z-40">
      <div className=" w-11/12 flex items-center justify-between gap-5">
        <aside>
          <Image
            src="/assets/images/logo/logo.png"
            alt="logo"
            width={120}
            height={100}
          />
        </aside>
        <aside className=" flex items-center gap-5 text-textGray">
          <ul className="hidden xl:flex gap-10 items-center text-center ">
            {navUrls.map((item, indx) => (
              <li key={indx}>
                {item?.menus || item?.tabs ? (
                  <div
                    className={` hover:text-white duration-150 cursor-pointer text-base flex items-center gap-2 ${
                      clickedMenu?.title === item.title && "text-white"
                    }`}
                    onClick={() => {
                      setClickedMenu(item);
                    }}
                  >
                    {item.title} <IoIosArrowDown />
                  </div>
                ) : (
                  <Link
                    href={`${item?.url}`}
                    className=" text-base hover:text-white duration-150"
                  >
                    {item.title}
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
                className={` hover:text-white duration-150 cursor-pointer text-base flex items-center gap-2 ${
                  clickedMenu?.title === "menu-bar" && "text-white"
                }`}
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
              >
                <div className=" hidden xl:flex items-center gap-2">
                  More <IoIosArrowDown />
                </div>
                <IoMenuSharp className=" inline-block xl:hidden text-2xl" />
              </div>
              {/* <FaBars
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
              /> */}
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
