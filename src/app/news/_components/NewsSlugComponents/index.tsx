"use client";

import React, { useState } from "react";

import { format, isValid } from "date-fns";

import { usePathname } from "next/navigation";

import { NewsType } from "@/app/[...pageSlug]/_components/NewsGridSectionComponent";
import GridEmbedSocialSection from "@/app/components/_components/GridEmbedSocialSection";
import NewsCard from "@/components/news/NewsCard";
import FeaturedNewsSection from "@/components/sections/FeaturedNewsSection";
import SectionContainer from "@/components/sections/SectionContainer";
import ArrowTitle from "@/components/shared/ArrowTitle";
import Loading from "@/components/shared/Loading";
import Pagination from "@/components/shared/Pagination";
import useAPI from "@/hooks/useAPI";
import validateImageUrl from "@/utils/validateImageUrl";

type PropTypes = {
  slug: string;
};

const NewsSlugComponents = (props: PropTypes) => {
  const { slug } = props;
  const pathname = usePathname();
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const { useGet }: any = useAPI(
    `/api/news-article/list?category=${
      slug === "news-and-events" ? "News and Events" : "Yamaha Racing"
    }&limit=${limit}&page=${currentPage}`
  );
  const {
    data: page,
    isLoading: pageLoading,
    isError,
  }: any = useGet(
    `${
      pathname.includes("news-and-events") ? "News and Events" : "Yamaha Racing"
    }-${limit}-${currentPage}`
  );
  const newsData: NewsType[] = page?.data?.newsArticle;

  if (pageLoading) {
    return <Loading />;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <FeaturedNewsSection
        title={
          slug === "news-and-events" ? "The World of Yamaha" : "Race Your Flag"
        }
        subTitle={
          slug === "news-and-events"
            ? "Stay updated with the latest news"
            : "Feeling lap. Riding beyond bounderies"
        }
        news={newsData?.slice(0, 4).map((news, indx) => {
          return {
            id: Number(indx + 1),
            image: `${validateImageUrl(news.banner.split(",")[0])}`,
            title: `${news.title}`,
            date: format(news?.datePublished, "MMMM dd,yyyy"),
            url: `/news/${slug}/${news.slug}`,
          };
        })}
      />

      {slug === "yamaha-racing" && (
        <GridEmbedSocialSection
          embedId={"46528e56967326dd63c84579774f6e7ad836c217"}
        />
      )}

      <ArrowTitle title={"Others"} />
      <SectionContainer className="" width={"wide"}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 ">
          {newsData?.slice(4).map((news, indx) => (
            <NewsCard
              key={indx}
              id={news?.id}
              image={`${validateImageUrl(news.banner.split(",")[0])}`}
              date={
                isValid(news?.datePublished)
                  ? format(news?.datePublished, "MMMM dd,yyyy")
                  : ""
              }
              title={news?.title}
              description={`${
                news?.newsArticleContents.find(
                  (article) => !/.(webp|jpg|jpeg|png)$/i.test(article.value)
                )?.value
              }`}
              url={`/news/${slug}/${news.slug}`}
            />
          ))}
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="pt-10 lg:pt-20">
            <Pagination
              setTablePage={setCurrentPage}
              tablePage={currentPage}
              totalPage={Number(page?.data?.totalPage)}
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default NewsSlugComponents;
