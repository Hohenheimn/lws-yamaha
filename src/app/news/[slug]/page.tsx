import React from "react";

import NewsSlugComponents from "../_components/NewsSlugComponents";

export const generateMetadata = () => {
  return {
    title: "News",
    description: "",
  };
};

type PropsType = {
  params: {
    slug: string;
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
