import React from "react";
import Image from "next/image";
import Link from "next/link";

type socialMediasType = {
  iconUrl: string;
  link: string;
};

const socialMedias: socialMediasType[] = [
  {
    iconUrl: "/images/social-media/instagram.svg",
    link: "#",
  },
  {
    iconUrl: "/images/social-media/youtube.svg",
    link: "#",
  },
  {
    iconUrl: "/images/social-media/facebook.svg",
    link: "#",
  },
  {
    iconUrl: "/images/social-media/tiktok.svg",
    link: "#",
  },
];

function SocialMediaIcons() {
  return (
    <ul className=" flex gap-10 items-center">
      {socialMedias.map((item, indx) => (
        <li key={indx} className=" relative w-8 aspect-square">
          <Link href={item.link} target="_blank">
            <Image
              src={item.iconUrl}
              alt={""}
              fill
              className=" object-contain"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaIcons;
