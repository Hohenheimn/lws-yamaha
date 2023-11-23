import React from "react";

import NewsGridSection from "@/components/sections/NewsGridSection";
import news from "@/data/news";
import useAPI from "@/hooks/useAPI";

type PropsType = {
  newsIds?: string;
};

const NewsGridSectionComponent = (props: PropsType) => {
  const { newsIds } = props;
  const { useGet } = useAPI(`/api/news-article?newsIds=${newsIds}`);
  const { data, isLoading }: any = useGet(`news-article-${newsIds}`);
  return (
    <NewsGridSection
      news={news.map((data) => ({
        ...data,
        onClick: () => console.log(data),
      }))}
      onViewAll={() => {}}
    />
  );
};

export default NewsGridSectionComponent;
