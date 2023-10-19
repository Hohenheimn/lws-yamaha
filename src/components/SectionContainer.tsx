import React from "react";

type props = {
  bgImage?: string;
  bgColor?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
};

function SectionContainer({
  bgImage,
  bgColor,
  fullWidth,
  children,
  className,
}: props) {
  return (
    <section
      className=" w-full flex justify-center py-14 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg')",
      }}
    >
      <div className={`${fullWidth ? "w-full" : "w-11/12"} ${className}`}>
        {children}
      </div>
    </section>
  );
}

export default SectionContainer;
