import React from "react";
import Heading from "@/components/shared/Heading";
import config from "@/utils/config";
import nextApi from "@/utils/nextApi";
import { Metadata } from "next";
import { createMetadata } from "@/utils/helpers";
import DisplaySection from "./[...pageSlug]/_components/DisplaySection";

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

export const generateMetadata = async (): Promise<
  Metadata & { error: unknown; slug: unknown; metaId: unknown }
> => {
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
    .get(`/api/pages/home`)
    .then((res) => {
      meta = res.data.data;
      res.data.data ? (error = false) : (error = true);
    })
    .catch((err) => {
      console.error(err);
      error = true;
    });

  const metadata = {
    title: meta?.metaTitle,
    description: meta?.metaDescription,
    keywords: meta?.metaKeywords,
    alternates: { canonical: meta?.metaCanonical },
    openGraph: {
      title: meta?.metaTitle,
      description: meta?.metaDescription,
      images: [
        {
          url: `${config.imageBaseUrl}${meta?.metaImage}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };

  return {
    ...createMetadata(metadata),
    error: error,
    slug: "home",
    metaId: meta?.id,
  };
};

const SlugPage = async () => {
  const error = (await generateMetadata()).error;
  const slug = (await generateMetadata()).slug;
  const metaId = (await generateMetadata()).metaId;

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
        slug={`${slug}`}
      />
    </>
  );
};

export default SlugPage;
