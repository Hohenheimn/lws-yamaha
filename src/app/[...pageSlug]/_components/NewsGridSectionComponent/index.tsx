import React from "react";

import NewsGridSection from "@/components/sections/NewsGridSection";
import news from "@/data/news";
import useAPI from "@/hooks/useAPI";
import validateImageUrl from "@/utils/validateImageUrl";

type PropsType = {
  newsIds?: string;
};

export type NewsType = {
  banner: string;
  categoryId: string;
  datePublished: string;
  id: number;
  slug: string;
  subCategoryId: number;
  title: string;
  viewCount: number;
  newsArticleContents: {
    value: string;
    type: "text";
  }[];
};

const NewsGridSectionComponent = (props: PropsType) => {
  const { newsIds } = props;
  const { useGet } = useAPI(`/api/news-article?newsIds=${newsIds}`);
  const { data, isLoading }: any = useGet(`news-article-${newsIds}`);
  return (
    <NewsGridSection
      news={data?.data.map((data: NewsType) => ({
        id: data?.id,
        image: validateImageUrl(data?.banner.split(",")[0]),
        date: data?.datePublished,
        title: data?.title,
        description: data.newsArticleContents[0].value,
      }))}
      onViewAll={() => {}}
    />
  );
};

export default NewsGridSectionComponent;
