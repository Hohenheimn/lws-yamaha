import React from "react";

import { NewsType } from "@/app/[...pageSlug]/_components/NewsGridSectionComponent";
import NewsCard from "@/components/news/NewsCard";
import YamahaHistoryCard from "@/components/news/YamahaHistoryCard";

import validateImageUrl from "@/utils/validateImageUrl";

import SectionContainer from "../SectionContainer";

type PropsType = {
  newsData: {
    url: string;
    image: string;
    title: string;
    description: string;
  }[];
};

const YamahaHistorySection = (props: PropsType) => {
  const { newsData } = props;

  return (
    <SectionContainer className="" width={"wide"}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10 ">
        {newsData?.map((news, indx) => (
          <YamahaHistoryCard
            id={indx}
            image={validateImageUrl(news.image)}
            key={indx}
            title={news.title}
            description={news.description}
            externalLink={news.url}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default YamahaHistorySection;
