import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiShareBold } from "react-icons/pi";

import Facebook from "@/components/Icons/SocialIcons/Facebook";
import Instagram from "@/components/Icons/SocialIcons/Instagram";
import Tiktok from "@/components/Icons/SocialIcons/Tiktok";
import Youtube from "@/components/Icons/SocialIcons/Youtube";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center flex-col bg-primary text-white pb-5 pt-10 pb-15 space-y-20">
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
      <p>Copyright {"©"} 2023 Yamaha Motors Philippines Inc.</p>
      <ul className=" flex gap-10 items-center">
        <Instagram width={33} height={33} color={"#fff"} link={"#"} />
        <Facebook width={30} height={30} color={"#fff"} link={"#"} />
        <Youtube width={30} height={30} color={"#fff"} link={"#"} />
        <Tiktok width={34} height={34} color={"#fff"} link={"#fff"} />
      </ul>
    </footer>
  );
};

export default Footer;
