import React from "react";
import axios from "axios";

import ParagraphAndDownloadSection from "@/components/sections/ParagraphAndDownloadSection";
import TitleAndParagraphSection from "@/components/sections/TitleAndParagraphSection";
import Heading from "@/components/shared/Heading";
import config from "@/utils/config";
import nextApi from "@/utils/nextApi";

import DisplaySection from "./_components/DisplaySection";

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
};

export const generateMetadata = async (props: PropsType) => {
  const { params } = props;
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
    .get(`/api/pages/${slug === "homepage" ? "home" : slug}`)
    .then((res) => {
      meta = res.data.data;
      res.data.data ? (error = false) : (error = true);
    })
    .catch((err) => {
      console.log(err);
      error = true;
    });
  return {
    title: meta ? meta?.metaTitle : "404 Page",
    description: meta ? meta?.metaDescription : "This page does not exist",
    error: error,
    slug: slug,
    metaId: meta?.id,
  };
};

const SlugPage = async (props: PropsType) => {
  const error = (await generateMetadata(props)).error;
  const slug = (await generateMetadata(props)).slug;
  const metaId = (await generateMetadata(props)).metaId;

  console.error("Error" + error);
  console.log("Params" + props.params);

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
