import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PropsType = {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
};

const Heading = (props: PropsType) => {
  const { className, children, type } = props;
  return (
    <>
      {type === "h1" && (
        <h1
          className={twMerge(
            `whitespace-pre-wrap text-[3.5rem] xl:text-[4rem] font-bold`,
            className
          )}
        >
          {children}
        </h1>
      )}
      {type === "h2" && (
        <h2
          className={` whitespace-pre-wrap text-[2.5rem] xl:text-[3.5rem] font-bold ${className}`}
        >
          {children}
        </h2>
      )}
      {type === "h3" && (
        <h3
          className={` whitespace-pre-wrap text-[1.9rem] xl:text-[2.5rem] font-bold ${className}`}
        >
          {children}
        </h3>
      )}
      {type === "h4" && (
        <h4
          className={`whitespace-pre-wrap text-[1.5rem] xl:text-[1.9rem] font-bold ${className}`}
        >
          {children}
        </h4>
      )}
      {type === "h5" && (
        <h5
          className={`whitespace-pre-wrap text-[1.05rem] xl:text-[1.5rem] font-bold ${className}`}
        >
          {children}
        </h5>
      )}
      {type === "h6" && (
        <h6
          className={`whitespace-pre-wrap text-lg xl:text-[1.2rem] font-bold ${className}`}
        >
          {children}
        </h6>
      )}
    </>
  );
};

export default Heading;
