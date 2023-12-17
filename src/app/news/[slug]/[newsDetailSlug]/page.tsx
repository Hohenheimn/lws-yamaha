import React from "react";
import { redirect } from "next/navigation";
import { NewsType } from "@/app/[...pageSlug]/_components/NewsGridSectionComponent";
import nextApi from "@/utils/nextApi";
import NewsContents from "./_component/Contents";
import { createMetadata } from "@/utils/helpers";
import { Metadata } from "next";
import config from "@/utils/config";

type PropsType = {
  params: {
    newsDetailSlug: string;
  };
};

export const generateMetadata = async ({
  params,
}: PropsType): Promise<Metadata> => {
  try {
    const res = await nextApi.get(`/api/news-article/${params.newsDetailSlug}`);
    const data = await res.data.data;

    const metadata: Metadata = {
      title: `${data.title}`,
      description: `${data.description}`,
      openGraph: {
        images: [
          {
            url: `${config.imageBaseUrl}${data.banner}`,
          },
        ],
      },
    };

    return createMetadata(metadata);
  } catch (error) {
    console.error(error);
    redirect("/404");
  }

  console.log();

  return createMetadata({
    title: "News and Events",
    description: "",
  });
};

const getNewsCardData = async (newsDetailSlug: string) => {
  try {
    const res = await nextApi.get(`/api/news-article/${newsDetailSlug}`);
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

const NewsDetailPage = async (params: PropsType) => {
  const { newsDetailSlug } = params.params;
  const news: NewsType = await getNewsCardData(newsDetailSlug);
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
