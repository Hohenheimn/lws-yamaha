"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

import { FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa";

import { MdKeyboardArrowRight } from "react-icons/md";

import { PiShareBold } from "react-icons/pi";

import Breadcrumps from "@/components/partsAndAccessories/Breadcrumps";

import { personalCommuter } from "@/data/headerPersonalCommuter/personalCommuter";
import useAPI from "@/hooks/useAPI";

import Button from "../Button";
import Heading from "../Heading";

type footerBreadCrumbs = {
  title: string;
  url: string;
}[];

type settingsType = {
  id: number;
  facebookUrl: string;
  instagramUrl: string;
  twitterUrl: string;
  youtubeUrl: string;
};

const Footer = () => {
  const pathname = usePathname();
  const pathnameSplit = pathname.split("/");
  const [isBreadCrump, setBreadCrump] = useState<footerBreadCrumbs>([]);

  const { useGet: useGetFooterMenu } = useAPI("/api/menu?subCategoryId=4");
  const { data: footerMenu, isLoading: footerMenuLoading }: any =
    useGetFooterMenu("footerMenu");

  const { useGet: useGetSettings } = useAPI("/api/settings");
  const { data: settings, isLoading: settingsLoading }: any =
    useGetSettings("settings-footer");

  const settingsSocial: settingsType = settings?.data;

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
    if (
      pathname.includes("/personal-commuter") ||
      pathname.includes("/sports-machine")
    ) {
      updateBreadCrump();
      return;
    }
    setBreadCrump([]);
  }, [pathname]);

  return (
    <footer className=" flex flex-col items-center space-y-16 pt-6 pb-16 bg-primary">
      <section className=" w-full flex justify-center items-center flex-col text-white space-y-10 md:space-y-16">
        <aside className=" w-full flex flex-col items-center">
          {isBreadCrump.length > 0 && (
            <ul className=" flex items-center gap-3 w-11/12 flex-wrap text-textGray mb-5">
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
        {/* {pathname.includes("/personal-commuter") && (
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
        )} */}

        <ul className=" flex flex-col sm:flex-row items-center gap-2 md:gap-10 sm:gap-14">
          {footerMenu?.data?.map(
            (item: {
              id: number;
              url: string;
              label: string;
              withLinkIcon: boolean;
            }) => (
              <li key={item?.id}>
                <Link
                  href={item?.url}
                  className={` ${
                    item?.label === "Yamaha Motor Global" &&
                    "flex gap-2 items-center"
                  }`}
                >
                  {item?.label}{" "}
                  {item?.withLinkIcon && (
                    <PiShareBold className=" text-1-2rem" />
                  )}
                </Link>
              </li>
            )
          )}
        </ul>
        <div className=" flex flex-col items-center gap-5">
          <p>Copyright {"©"} 2023 Yamaha Motors Philippines Inc.</p>

          <ul className=" flex gap-10 items-center">
            {settingsSocial?.instagramUrl && (
              <li>
                <Link href={settingsSocial?.instagramUrl}>
                  <AiFillInstagram className=" text-3xl" />
                </Link>
              </li>
            )}
            {settingsSocial?.youtubeUrl && (
              <li>
                <Link href={settingsSocial?.youtubeUrl}>
                  <AiFillYoutube className=" text-3xl" />
                </Link>
              </li>
            )}

            {settingsSocial?.facebookUrl && (
              <li>
                <Link href={settingsSocial?.facebookUrl}>
                  <FaFacebookF className=" text-3xl" />
                </Link>
              </li>
            )}
            {settingsSocial?.twitterUrl && (
              <li>
                <Link href={settingsSocial?.twitterUrl}>
                  <FaTwitter className=" text-3xl" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
