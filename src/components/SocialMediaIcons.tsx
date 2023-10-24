import React from "react";
import Image from "next/image";
import Link from "next/link";

import Facebook from "./Icons/SocialIcons/Facebook";
import Instagram from "./Icons/SocialIcons/Instagram";
import Tiktok from "./Icons/SocialIcons/Tiktok";
import Youtube from "./Icons/SocialIcons/Youtube";

function SocialMediaIcons() {
  return (
    <ul className=" flex gap-10 items-center">
      <Instagram width={33} height={33} color={"#fff"} link={"#"} />
      <Facebook width={30} height={30} color={"#fff"} link={"#"} />
      <Youtube width={30} height={30} color={"#fff"} link={"#"} />
      <Tiktok width={34} height={34} color={"#fff"} link={"#fff"} />
    </ul>
  );
}

export default SocialMediaIcons;
