import React from "react";
import InquieryAndFindDealerButtons from "@/components/sections/InquieryAndFindDealerButtons";
import nextApi from "@/utils/nextApi";
import config from "@/utils/config";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import HeroSection from "./_components/HeroSection";
import ProductListSection from "./_components/ProductListSection";
import { createMetadata } from "@/utils/helpers";

type PropsType = {
  params: {
    categorySlug: string;
  };
};

const getCategoryData = async (categorySlug: string) => {
  try {
    const res = await nextApi.get(
      `/api/categories/${categorySlug}?type=product`
    );
    const data = await res.data.data;

    if (!data) redirect("/404");

    return data;
  } catch (error) {
    console.error(error);
    redirect("/404");
  }
};

export const generateMetadata = async ({
  params: { categorySlug },
}: PropsType): Promise<Metadata> => {
  const data = await getCategoryData(categorySlug);

  const metadata: Metadata = {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.metaKeywords,
    alternates: {
      canonical:
        data.metaCanonical ||
        `${config.apiNextBaseUrl}/motorcycle/${categorySlug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: data.metaCanonical,
      images: [
        {
          url: `${config.imageBaseUrl}${data.metaImage}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };

  return createMetadata(metadata);
};

const ProductCategoryPage = async ({ params }: PropsType) => {
  const category = await getCategoryData(params.categorySlug);

  return (
    <div>
      <HeroSection
        {...category}
        desktopBgImage={`${config.imageBaseUrl}${category?.image}`}
      />
      <ProductListSection categoryId={category.id} />
      {/* <InquieryAndFindDealerButtons /> */}
    </div>
  );
};

export default ProductCategoryPage;
