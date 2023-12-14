"use client";

import NewsGridSection from "@/components/sections/NewsGridSection";
import useAPI from "@/hooks/useAPI";
import validateImageUrl from "@/utils/validateImageUrl";
import { useRouter } from "next/navigation";

type PropsType = {
  newsIds?: string;
};

type SubCategoryType = {
  name: string;
  slug: string;
  id: number;
};

export type NewsType = {
  banner: string;
  categoryId: string;
  datePublished: string;
  id: number;
  slug: string;
  subCategoryId: number;
  SubCategory: SubCategoryType;
  title: string;
  viewCount: number;
  newsArticleContents: {
    value: string;
    type: "text";
  }[];
};

const NewsGridSectionComponent = (props: PropsType) => {
  const { newsIds } = props;
  const router = useRouter();
  const { useGet } = useAPI(`/api/news-article?newsIds=${newsIds}`);
  const { data }: any = useGet(`news-article-${newsIds}`);

  return (
    <NewsGridSection
      news={data?.data.map((data: NewsType) => ({
        id: data?.id,
        image: validateImageUrl(data?.banner.split(",")[0]),
        date: data?.datePublished,
        title: data?.title,
        description: data.newsArticleContents[0].value,
        onClick: () =>
          router.push(`/news/${data.SubCategory.slug}/${data.slug}`),
      }))}
      onViewAll={() => router.push("/news/news-and-events")}
    />
  );
};

export default NewsGridSectionComponent;
