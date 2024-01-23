"use client";

import { format, isValid } from "date-fns";
import { useRouter } from "next/navigation";

import NewsGridSection from "@/components/sections/NewsGridSection";
import useAPI from "@/hooks/useAPI";
import validateImageUrl from "@/utils/validateImageUrl";

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
  datePublished: number | Date;
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
        date: isValid(data?.datePublished)
          ? format(data?.datePublished, "MMMM dd,yyyy")
          : "",
        title: data?.title,
        description: data?.newsArticleContents.find(
          (article) => !/.(webp|jpg|jpeg|png)$/i.test(article.value)
        )?.value,
        onClickUrl: `/news/${data.SubCategory.slug}/${data.slug}`,
        onClick: () =>
          router.push(`/news/${data.SubCategory.slug}/${data.slug}`),
      }))}
      onViewAll={() => router.push("/news/news-and-events")}
      onViewAllUrl="/news/news-and-events"
    />
  );
};

export default NewsGridSectionComponent;
