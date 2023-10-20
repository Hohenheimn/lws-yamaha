import React from "react";
import Link from "next/link";

type props = {
  children: string;
  appearance: "primary" | "secondary";
  size: "medium" | "large";
  url?: string;
  onClick?: () => void;
};

function Button({ children, appearance, size, url, onClick }: props) {
  return (
    <>
      {url ? (
        <Link
          href={url}
          className={` inline-block bg-tertiary hover:bg-hover-tertiary duration-150 text-white rounded-3xl font-montserrat-medium ${
            size === "medium" && "px-5 py-2 text-cs-xs rounded-3xl"
          } ${size === "large" && " px-24 py-2 text-cs-sm rounded-lg"}
           ${
             appearance === "primary" && "bg-tertiary hover:bg-hover-tertiary"
           } ${
            appearance === "secondary" &&
            " bg-quarternary hover:bg-hover-quarternary"
          }`}
        >
          {children}
        </Link>
      ) : (
        <button
          className={` inline-block bg-tertiary hover:bg-hover-tertiary duration-150 text-white rounded-3xl text-cs-xs font-montserrat-medium ${
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
      )}
    </>
  );
}

export default Button;
