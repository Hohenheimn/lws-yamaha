import React from "react";

import Link from "next/link";

import SectionContainer from "@/components/sections/SectionContainer";

const InquieryAndFindDealerButtons = () => {
  return (
    <SectionContainer width={"wide"} className="flex justify-center">
      <ul className=" flex flex-wrap items-center justify-center gap-5">
        <li>
          <Link
            href={"/contact-&-inquiry"}
            className={` text-xl w-64 text-center py-3 whitespace-nowrap inline-block duration-150 text-white font-medium rounded-lg  bg-[#2f58cd] hover:bg-hover-quarternary`}
          >
            Inquiry
          </Link>
        </li>
        <li>
          <Link
            href={"https://find-dealer.yamaha-motor.com.ph"}
            className={` text-xl w-64 text-center py-3 whitespace-nowrap inline-block duration-150 text-white font-medium rounded-lg  bg-[#2f58cd] hover:bg-hover-quarternary`}
          >
            Find Dealer
          </Link>
        </li>
      </ul>
    </SectionContainer>
  );
};

export default InquieryAndFindDealerButtons;
