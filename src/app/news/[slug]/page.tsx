import React from "react";
import NewsSlugComponents from "../_components/NewsSlugComponents";
import api from "@/utils/api";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { createMetadata } from "@/utils/helpers";
import config from "@/utils/config";

type PropsType = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: PropsType): Promise<Metadata> => {
  try {
    //MISSING: No news and events meta tags found in "pages" endpoint
    // const newsCategory = await api.get(`/pages/${prams.slug}`);

    const metadata: Metadata = {
      title: `${params.slug
        .split("-")
        .map(
          (_) =>
            `${_[0].toUpperCase()}${_.slice(1, _.length).toLocaleLowerCase()}`
        )
        .join(" ")}`,
      alternates: {
        canonical: `${config.apiNextBaseUrl}/news/${params.slug}`,
      },
    };

    return createMetadata(metadata);
  } catch (error) {
    console.error(error);
    redirect("/404");
  }

  return {
    title: "News",
    description: "",
  };
};

const NewsSlugPage = async (params: PropsType) => {
  const { slug } = params.params;

  return (
    <>
      <NewsSlugComponents slug={slug} />
    </>
  );
};

export default NewsSlugPage;
