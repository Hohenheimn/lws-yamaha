import React from "react";
import Image from "next/image";

import SectionContainer from "../SectionContainer";

export type BlogType = {
  id: number;
  backgroundImage: string;
  title: string;
  description: string;
};

type PropsType = {
  blog: BlogType;
};

const BlogSection = (props: PropsType) => {
  return (
    <SectionContainer width={"wide"} bgImage={props.blog.backgroundImage}>
      {/* bg-gradient-to-r from-black to-transparent */}
      <div className="relative flex flex-col gap-4 p-5 md:p-10 whitespace-pre-wrap text-[#f1f1f1]">
        <h2 className="text-xl font-semibold">{props.blog.title}</h2>
        <p className="lg:w-[70%]">{props.blog.description}</p>
      </div>
    </SectionContainer>
  );
};

export default BlogSection;
