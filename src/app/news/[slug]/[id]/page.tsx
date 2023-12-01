import React from "react";
import { redirect } from "next/navigation";

import { NewsType } from "@/app/[...pageSlug]/_components/NewsGridSectionComponent";
import NewsCard from "@/components/news/NewsCard";
import SectionContainer from "@/components/sections/SectionContainer";

import ArrowTitle from "@/components/shared/ArrowTitle";
import nextApi from "@/utils/nextApi";
import validateImageUrl from "@/utils/validateImageUrl";

import NewsContents from "./_component/Contents";

export const generateMetadata = () => {
  return {
    title: "News and Events",
    description: "",
  };
};
const getNewsCardData = async (id: string) => {
  try {
    const res = await nextApi.get(`/api/news-article/${id}`);
    const data = await res.data.data;
    if (!data) redirect("/404");
    return data;
  } catch (error) {
    console.error(error);
    redirect("/404");
  }
};

export type NewsContent = {
  type: "images" | "text";
  value: string;
};

type PropsType = {
  params: {
    id: string;
  };
};
const NewsDetailPage = async (params: PropsType) => {
  const { id } = params.params;
  const news: NewsType = await getNewsCardData(id);
  return (
    <div>
      <NewsContents
        news={news?.newsArticleContents}
        banner={news?.banner}
        title={news?.title}
        date={news?.datePublished}
      />
    </div>
  );
};

export default NewsDetailPage;
