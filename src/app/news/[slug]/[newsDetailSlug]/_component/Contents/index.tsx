"use client";

import React, { useState } from "react";
import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";

import { NewsType } from "@/app/[...pageSlug]/_components/NewsGridSectionComponent";

import NewsCard from "@/components/news/NewsCard";

import SectionContainer from "@/components/sections/SectionContainer";

import ArrowTitle from "@/components/shared/ArrowTitle";
import Heading from "@/components/shared/Heading";
import Loading from "@/components/shared/Loading";

import Pagination from "@/components/shared/Pagination";
import useAPI from "@/hooks/useAPI";

import validateImageUrl from "@/utils/validateImageUrl";

import { NewsContent } from "../../page";
import { format } from "date-fns";

type PropsType = {
  news: NewsContent[];
  banner: string;
  title: string;
  date: string;
};

const NewsContents = (props: PropsType) => {
  const { news, banner, title, date } = props;
  const router = useRouter();
  const pathname = usePathname();
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { useGet }: any = useAPI(
    `/api/news-article/list?category=${
      pathname.includes("news-and-events") ? "News and Events" : "Yamaha Racing"
    }&limit=${limit}&page=${currentPage}`
  );
  const { data: page, isLoading: pageLoading }: any = useGet(
    `${
      pathname.includes("news-and-events") ? "News and Events" : "Yamaha Racing"
    }-${limit}-${currentPage}`
  );
  const otherNews: NewsType[] = page?.data?.newsArticle;

  if (pageLoading) {
    return <Loading />;
  }
  return (
    <>
      <SectionContainer width={"narrow"} className="relative">
        <button
          className="mb-5 text-white text-lg font-semibold underline"
          onClick={() => router.back()}
        >
          Go&nbsp;Back
        </button>
        <div className=" space-y-10">
          <aside className=" w-full relative aspect-[3/1]">
            <Image
              src={validateImageUrl(banner)}
              fill
              alt={title}
              className=" object-cover"
            />
          </aside>
          <aside>
            <p className="text-textGray">{date}</p>
            <h1 className="text-white whitespace-pre-wrap text-[1.5rem] xl:text-[1.9rem] font-bold">
              {title}
            </h1>
          </aside>
          {news?.map((item, indx) => (
            <div key={indx} className=" w-full">
              {item.type === "images" && (
                <>
                  {item.value.split(",").length > 1 ? (
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                      {item.value.split(",").map((img, indx) => {
                        console.log({ item });
                        return (
                          <aside
                            className=" w-full relative aspect-[2/1]"
                            key={indx}
                          >
                            <Image
                              src={validateImageUrl(img)}
                              fill
                              alt={`${title} NEWS CONTENT IMAGE`}
                              className=" object-cover"
                            />
                          </aside>
                        );
                      })}
                    </div>
                  ) : (
                    <aside className=" w-full relative aspect-[3/1]">
                      <Image
                        src={validateImageUrl(item.value.split(",")[0])}
                        fill
                        alt={`${title} NEWS CONTENT IMAGE`}
                        className=" object-cover"
                      />
                    </aside>
                  )}
                </>
              )}
              {item.type === "text" && (
                <p className=" text-textGray">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>
      <ArrowTitle title={"Others"} />
      <SectionContainer width={"wide"}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 ">
          {otherNews?.map((item, indx) => (
            <NewsCard
              key={indx}
              id={item.id}
              image={validateImageUrl(item.banner.split(",")[0])}
              date={format(item.datePublished, "MMMM dd,yyyy")}
              title={item.title}
              description={`${
                item?.newsArticleContents.find(
                  (article) => !/.(webp|jpg|jpeg|png)$/i.test(article.value)
                )?.value
              }`}
              url={`/news/${
                pathname.includes("news-and-events")
                  ? "news-and-events"
                  : "yamaha-racing"
              }/${item.slug}`}
            />
          ))}
        </div>
        <div className=" pt-10 lg:pt-20">
          <Pagination
            setTablePage={setCurrentPage}
            tablePage={currentPage}
            totalPage={limit}
          />
        </div>
      </SectionContainer>
    </>
  );
};

export default NewsContents;
