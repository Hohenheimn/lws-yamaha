import React from "react";
import Link from "next/link";

import { ButtonPropsType } from ".";

const LinkElement = (props: ButtonPropsType) => {
  const { url, size, appearance, children, download } = props;
  return (
    <Link
      target={download ? "_blank" : "_self"}
      href={url ? url : ""}
      className={` text-center whitespace-nowrap inline-block duration-150 text-white rounded-lg font-medium ${
        size === "medium" && "px-5 py-2  text-base"
      } ${size === "large" && " px-16 py-3  text-xl"}
${appearance === "primary" && "bg-tertiary hover:bg-hover-tertiary"} ${
        appearance === "secondary" && " bg-[#2f58cd] hover:bg-hover-quarternary"
      }`}
    >
      {children}
    </Link>
  );
};

export default LinkElement;
