import React from "react";
import Image from "next/image";
import Link from "next/link";

type socialMediasType = {
  iconUrl: string;
  link: string;
};

const socialMedias: socialMediasType[] = [
  {
    iconUrl: "/images/social-media/instagram.png",
    link: "#",
  },
  {
    iconUrl: "/images/social-media/youtube.png",
    link: "#",
  },
  {
    iconUrl: "/images/social-media/facebook.png",
    link: "#",
  },
  {
    iconUrl: "/images/social-media/tiktok.png",
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
              alt={"instagram"}
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
