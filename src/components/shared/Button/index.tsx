import React from "react";
import Link from "next/link";

import ButtonElement from "./ButtonElement";
import LinkElement from "./LinkElement";

export type ButtonPropsType = {
  children: string;
  appearance: "primary" | "secondary";
  size: "medium" | "large";
  url?: string;
  onClick?: () => void;
  download?: boolean;
};

const Button = ({
  children,
  appearance,
  size,
  url,
  onClick,
  download,
}: ButtonPropsType) => {
  return (
    <>
      {url ? (
        <LinkElement
          appearance={appearance}
          size={size}
          url={url}
          download={download}
        >
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
