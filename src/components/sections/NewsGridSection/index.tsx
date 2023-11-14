"use client";

import React from "react";

import NewsCardGrid, { NewsCardGridType } from "@/components/news/NewsCardGrid";

type PropsType = {
  news: NewsCardGridType[];
};

const NewsGridSection = (props: PropsType) => {
  return (
    <div className="flex flex-col gap-10 bg-[#323232] p-5 md:p-10">
      <div className="flex items-end justify-between border-b border-[#f1f1f1] pb-4">
        <div className="hidden md:block"></div>
        <div>
          <h2 className="font-bold text-[#f1f1f1] text-3xl md:text-center">
            News
          </h2>
          <div className="flex gap-2 items-center w-full max-w-[500px]">
            <hr className="border-[#f1f1f1] border-1 w-12 hidden md:block" />
            <span className="text-[#f1f1f1]">Yamaha Motors</span>
            <hr className="border-[#f1f1f1] border-1 w-12 hidden md:block" />
          </div>
        </div>
        <button className="text-[#f1f1f1] text-lg bg-[#D52B1E] py-2 font-medium px-5 rounded-lg">
          View All
        </button>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        <div className="flex flex-col gap-4 h-full">
          {props.news?.slice(0, 2).map((news) => (
            <NewsCardGrid
              key={news.id}
              {...news}
              onClick={() => console.log(news)}
            />
          ))}
        </div>
        {!!props.news?.[2] && (
          <NewsCardGrid
            {...props.news[2]}
            onClick={() => console.log(props.news?.[2])}
            direction="column"
          />
        )}
      </div>
    </div>
  );
};

export default NewsGridSection;
