import React from "react";
import Link from "next/link";

import { ButtonPropsType } from ".";

const LinkElement = (props: ButtonPropsType) => {
  const { url, size, appearance, children } = props;
  return (
    <Link
      href={url ? url : ""}
      className={` whitespace-nowrap inline-block duration-150 text-white rounded-3xl font-medium ${
        size === "medium" && "px-5 py-2  text-base rounded-3xl"
      } ${size === "large" && " px-16 py-3  text-xl rounded-lg"}
 ${appearance === "primary" && "bg-tertiary hover:bg-hover-tertiary"} ${
        appearance === "secondary" && " bg-[#2f58cd] hover:bg-hover-quarternary"
      }`}
    >
      {children}
    </Link>
  );
};

export default LinkElement;
