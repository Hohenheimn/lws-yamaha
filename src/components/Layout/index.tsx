import React from "react";
import Image from "next/image";

import Link from "next/link";

import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { PiShareBold } from "react-icons/pi";

import SocialMediaIcons from "../SocialMediaIcons";
import { navUrls } from "./NavUrl";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  return (
    <main>
      <nav className="w-full flex justify-center bg-primary-2 text-white py-3">
        <div className=" w-11/12 flex items-center justify-between">
          <aside>
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={120}
              height={100}
            />
          </aside>
          <ul className=" flex gap-5 items-center">
            {navUrls.map((item, indx) => (
              <li key={indx}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
            <li>
              <BiSearch className=" text-1-2rem cursor-pointer" />
            </li>
            <li>
              <FaBars className=" text-1-2rem cursor-pointer" />
            </li>
          </ul>
        </div>
      </nav>
      {children}
      <footer className="w-full flex justify-center items-center flex-col bg-primary text-white pb-5 pt-10 space-y-20">
        <ul className=" flex items-center w-full gap-5">
          <li className=" border border-white flex-1"></li>
          <li>
            <Image
              src={"/images/footer/footer-quote.png"}
              width={700}
              height={200}
              alt={"footer-quote"}
            />
          </li>
          <li className=" border border-white flex-1"></li>
        </ul>
        <ul className=" flex gap-14">
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#" className=" flex gap-2 items-center">
              Yamaha Motor Global <PiShareBold className=" text-1-2rem" />
            </Link>
          </li>
        </ul>
        <p>Copyright {"©"} 2023 Yamaha Motors Philippines Inc.</p>
        <SocialMediaIcons />
      </footer>
    </main>
  );
}

export default Layout;
