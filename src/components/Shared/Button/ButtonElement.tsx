import React from "react";
import Link from "next/link";

import { ButtonProps } from ".";

const ButtonElement = (props: ButtonProps) => {
  const { url, size, appearance, children, onClick } = props;
  return (
    <button
      className={` inline-block bg-tertiary hover:bg-hover-tertiary duration-150 text-white rounded-3xl text-cs-xs font-medium ${
        size === "medium" && "px-5 py-2"
      } ${size === "large" && "px-10 py-1"}
             ${
               appearance === "primary" && "bg-tertiary hover:bg-hover-tertiary"
             } ${
        appearance === "secondary" &&
        " bg-quarternary hover:bg-hover-quarternary"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonElement;
