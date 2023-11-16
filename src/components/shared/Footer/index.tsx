"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

import { MdKeyboardArrowRight } from "react-icons/md";

import { PiShareBold } from "react-icons/pi";

import Breadcrumps from "@/components/partsAndAccessories/Breadcrumps";

import { personalCommuter } from "@/data/headerPersonalCommuter/personalCommuter";

import Button from "../Button";
import Heading from "../Heading";

type footerBreadCrumbs = {
  title: string;
  url: string;
}[];

const Footer = () => {
  const pathname = usePathname();
  const pathnameSplit = pathname.split("/");
  const [isBreadCrump, setBreadCrump] = useState<footerBreadCrumbs>([]);

  const updateBreadCrump = () => {
    const pathnameArray: footerBreadCrumbs = pathnameSplit.map(
      (item, index) => {
        return {
          title: item.replaceAll("-", " "),
          url: pathnameSplit.slice(0, index + 1).join("/"),
        };
      }
    );
    setBreadCrump(pathnameArray);
  };

  useEffect(() => {
    if (pathname === "/personal-commuter") {
      updateBreadCrump();
      return;
    }
    setBreadCrump([]);
  }, [pathname]);

  return (
    <footer className=" flex flex-col items-center space-y-16 py-16 bg-transparent">
      {pathname === "/" && (
        <ul className="  w-11/12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Link href={"#"}>
            <li className=" relative rounded-3xl overflow-hidden aspect-[2.8/1] flex justify-center items-center text-white">
              <Image
                src={"/assets/images/samples/sample-banner.jpg"}
                fill
                alt="background"
                className={` object-cover blur-sm`}
              />
              <Heading type="h4" className="text-center z-10 font-medium">
                Parts & Accessories
              </Heading>
            </li>
          </Link>
          <Link href={"#"}>
            <li className=" relative rounded-3xl overflow-hidden aspect-[2.8/1] flex justify-center items-center text-white">
              <Image
                src={"/assets/images/samples/sample-banner.jpg"}
                fill
                alt="background"
                className={` object-cover blur-sm`}
              />
              <Heading type="h4" className="text-center z-10 font-medium">
                Services
              </Heading>
            </li>
          </Link>
        </ul>
      )}

      <ul className=" flex flex-wrap items-center justify-center gap-5">
        <li>
          <Button url="#" appearance="secondary" size={"large"}>
            Inquiry
          </Button>
        </li>
        <li>
          <Button url="#" appearance="secondary" size={"large"}>
            Find Dealer
          </Button>
        </li>
      </ul>
      <section className=" w-full flex justify-center items-center flex-col bg-primary text-white space-y-10 md:space-y-16">
        <aside className=" w-full flex flex-col items-center">
          {isBreadCrump.length > 0 && (
            <ul className=" flex items-center gap-3 w-11/12 flex-wrap text-textGray">
              {isBreadCrump.map((item, indx) => (
                <li key={indx} className=" flex items-center">
                  <Link
                    href={item.url}
                    className={`${
                      item.url === pathname && "text-white"
                    } capitalize`}
                  >
                    {indx === 0 ? "Top" : item.title}
                  </Link>{" "}
                  {indx !== isBreadCrump.length - 1 && (
                    <MdKeyboardArrowRight className="w-5 h-5 ml-5" />
                  )}
                </li>
              ))}
            </ul>
          )}
          <ul className=" flex items-center w-full gap-5">
            <li className=" border border-white flex-1"></li>
            <li>
              <Image
                src={"/assets/images/footer/footer-quote.svg"}
                width={700}
                height={200}
                alt={"footer-quote"}
              />
            </li>
            <li className=" border border-white flex-1"></li>
          </ul>
        </aside>
        {pathname.includes("/personal-commuter") && (
          <aside className=" pb-5 space-y-10 flex flex-col w-full items-center overflow-auto hide-scrollbar">
            <p className=" font-bold">Personal Commuter</p>
            <aside className=" w-full max-w-[50rem]">
              <ul className="grid grid-rows-6 grid-flow-col gap-x-10 lg:gap-x-20 gap-y-5 md:gap-y-7 overflow-auto">
                {personalCommuter.map((item, indx) => (
                  <li key={indx} className=" min-w-[7rem]">
                    <Link
                      href={`/personal-commuter/${item}`}
                      className=" text-base text-textGray"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </aside>
        )}

        <ul className=" flex flex-col sm:flex-row items-center gap-10 sm:gap-14">
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
        <div className=" flex flex-col items-center gap-5">
          <p>Copyright {"©"} 2023 Yamaha Motors Philippines Inc.</p>
          <ul className=" flex gap-10 items-center">
            <Link href={""}>
              <AiFillInstagram className=" text-3xl" />
            </Link>
            <Link href={""}>
              <AiFillYoutube className=" text-3xl" />
            </Link>
            <Link href={""}>
              <FaFacebookF className=" text-3xl" />
            </Link>
            <Link href={""}>
              <FaTiktok className=" text-3xl" />
            </Link>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
