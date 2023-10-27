import React from "react";
import Link from "next/link";

import { ButtonPropsType } from ".";

const LinkElement = (props: ButtonPropsType) => {
  const { url, size, appearance, children } = props;
  return (
    <Link
      href={url ? url : ""}
      className={` inline-block bg-tertiary hover:bg-hover-tertiary duration-150 text-white rounded-3xl font-medium ${
        size === "medium" && "px-5 py-2 text-cs-xs rounded-3xl"
      } ${size === "large" && " px-24 py-2 text-cs-sm rounded-lg"}
   ${appearance === "primary" && "bg-tertiary hover:bg-hover-tertiary"} ${
        appearance === "secondary" &&
        " bg-quarternary hover:bg-hover-quarternary"
      }`}
    >
      {children}
    </Link>
  );
};

export default LinkElement;
