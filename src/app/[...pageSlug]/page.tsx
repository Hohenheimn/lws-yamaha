import React from "react";
import axios from "axios";
import ParagraphAndDownloadSection from "@/components/sections/ParagraphAndDownloadSection";
import TitleAndParagraphSection from "@/components/sections/TitleAndParagraphSection";
import Heading from "@/components/shared/Heading";
import config from "@/utils/config";
import nextApi from "@/utils/nextApi";

import DisplaySection from "./_components/DisplaySection";
import { Metadata } from "next";

type Meta = {
  id?: number;
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  metaCanonical: string;
  metaImage: string;
};

type PropsType = {
  params: { pageSlug: string[] };
  searchParams: any;
};

export const generateMetadata = async (props: PropsType) => {
  const { params, searchParams } = props;
  const slug: string = params.pageSlug.filter(
    (item, indx) => params.pageSlug.length === indx + 1
  )[0];
  let error = false;
  let meta: Meta = {
    name: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    metaCanonical: "",
    metaImage: "",
  };

  await nextApi
    .get(`/api/pages/${slug}`)
    .then((res) => {
      meta = res.data.data;
      res.data.data ? (error = false) : (error = true);
    })
    .catch((err) => {
      console.log(err);
      error = true;
    });
  return {
    title: meta?.metaTitle,
    description: meta?.metaDescription,
    keywords: meta?.metaKeywords,
    openGraph: {
      title: meta?.metaTitle,
      description: meta?.metaDescription,
      url: meta?.metaCanonical,
      images: [
        {
          url: `${config.imageBaseUrl}${meta?.metaImage}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    error: error,
    slug: slug,
    metaId: meta?.id,
  };
};

const SlugPage = async (props: PropsType) => {
  const error = (await generateMetadata(props)).error;
  const slug = (await generateMetadata(props)).slug;
  const metaId = (await generateMetadata(props)).metaId;
  if (error) {
    return (
      <section className=" h-[90vh] flex justify-center items-center">
        <aside className=" text-white text-center">
          <Heading type={"h1"}>404</Heading>
          <p>This page could not be found.</p>
        </aside>
      </section>
    );
  }
  return (
    <>
      <DisplaySection
        endpoint={`/api/page-sections?pageId=${metaId}`}
        queryName={`${slug}-${metaId}`}
      />
    </>
  );
};

export default SlugPage;
