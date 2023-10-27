import React, { ReactNode } from "react";

type PropsType = {
  type: "h1" | "h2" | "h3" | "h4" | "h5";
  children: ReactNode;
  className?: "";
};

const Heading = (props: PropsType) => {
  const { className, children, type } = props;
  return (
    <>
      {type === "h1" && (
        <h1
          className={`whitespace-pre-wrap text-cs-2xl xl:text-cs-3xl font-bold ${className}`}
        >
          {children}
        </h1>
      )}
      {type === "h2" && (
        <h2
          className={` whitespace-pre-wrap text-cs-xl xl:text-cs-2xl font-bold ${className}`}
        >
          {children}
        </h2>
      )}
      {type === "h3" && (
        <h3
          className={` whitespace-pre-wrap text-cs-lg xl:text-cs-xl font-bold ${className}`}
        >
          {children}
        </h3>
      )}
      {type === "h4" && (
        <h4
          className={`whitespace-pre-wrap text-cs-md xl:text-cs-lg font-bold ${className}`}
        >
          {children}
        </h4>
      )}
      {type === "h5" && (
        <h5
          className={`whitespace-pre-wrap text-cs-sm xl:text-cs-md font-bold ${className}`}
        >
          {children}
        </h5>
      )}
    </>
  );
};

export default Heading;
