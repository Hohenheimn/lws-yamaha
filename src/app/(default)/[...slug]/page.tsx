import React from "react";
import axios from "axios";

import Heading from "@/components/shared/Heading";

import DisplaySection from "../_components/DisplaySection";

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
  params: { slug: string[] };
};

// export async function generateMetadata() {
//   return {
//     title: "Yamaha Jomari",
//     description: "adasdasd",
//   };
// }

export const generateMetadata = async (props: PropsType) => {
  const { params } = props;
  const slug = params.slug.join("/");
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
  await axios
    .get(`http://localhost:3000/api/pages/${slug}`)
    .then((res) => {
      meta = res.data.data;
    })
    .catch((err) => {
      error = true;
    });

  return {
    title: meta?.metaTitle,
    description: meta?.metaDescription,
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
    <DisplaySection
      endpoint={`/api/page-sections?pageId=${metaId}`}
      queryName={slug}
    />
  );
};

export default SlugPage;
