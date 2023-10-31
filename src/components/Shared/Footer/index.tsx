import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { PiShareBold } from "react-icons/pi";

import Button from "../Button";
import Heading from "../Heading";

const Footer = () => {
  return (
    <footer className=" flex flex-col items-center space-y-16 py-16">
      <ul className="  w-11/12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Link href={"#"}>
          <li className=" relative rounded-3xl overflow-hidden aspect-[2.3/1] flex justify-center items-center text-white">
            <Image
              src={"/assets/images/samples/sample-banner.jpg"}
              fill
              alt="background"
              className={` object-cover blur-sm`}
            />
            <Heading type="h3" className="text-center z-10">
              Parts & Accessories
            </Heading>
          </li>
        </Link>
        <Link href={"#"}>
          <li className=" relative rounded-3xl overflow-hidden aspect-[2.3/1] flex justify-center items-center text-white">
            <Image
              src={"/assets/images/samples/sample-banner.jpg"}
              fill
              alt="background"
              className={` object-cover blur-sm`}
            />
            <Heading type="h3" className="text-center z-10">
              Services
            </Heading>
          </li>
        </Link>
      </ul>
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
      <section className=" w-full flex justify-center items-center flex-col bg-primary text-white space-y-20">
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
      </section>
    </footer>
  );
};

export default Footer;
