import React from "react";
import Link from "next/link";

import ButtonElement from "./ButtonElement";
import LinkElement from "./LinkElement";

export type ButtonProps = {
  children: string;
  appearance: "primary" | "secondary";
  size: "medium" | "large";
  url?: string;
  onClick?: () => void;
};

const Button = ({ children, appearance, size, url, onClick }: ButtonProps) => {
  return (
    <>
      {url ? (
        <LinkElement appearance={appearance} size={size} url={url}>
          {children}
        </LinkElement>
      ) : (
        <ButtonElement appearance={appearance} size={size} onClick={onClick}>
          {children}
        </ButtonElement>
      )}
    </>
  );
};

export default Button;
