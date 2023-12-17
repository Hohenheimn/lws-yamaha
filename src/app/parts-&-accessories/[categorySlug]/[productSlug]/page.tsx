import React from "react";
import nextApi from "@/utils/nextApi";
import config from "@/utils/config";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import PartsAndAccessoriesDetailsSection from "@/components/sections/PartsAndAccessoriesDetailsSection";
import { createMetadata } from "@/utils/helpers";

type PropsType = {
  params: {
    categorySlug: string;
    productSlug: string;
  };
};

const getProductData = async (productSlug: string) => {
  try {
    const res = await nextApi.get(`/api/parts-and-accessories/${productSlug}`);
    const data = await res.data.data;

    if (!data) redirect("/404");

    return data;
  } catch (error) {
    console.error(error);
    redirect("/404");
  }
};

export const generateMetadata = async ({
  params: { productSlug, categorySlug },
}: PropsType): Promise<Metadata> => {
  const data = await getProductData(productSlug);

  const metadata: Metadata = {
    title: data.name,
    description: data.description,
    keywords: data.name?.replaceAll("-", ","),
    alternates: {
      canonical:
        data.metaCanonical ||
        `${config.apiNextBaseUrl}/parts-&-accessories/${categorySlug}/${productSlug}`,
    },
    openGraph: {
      title: data.name,
      description: data.description,
      images: [
        {
          url: `${config.imageBaseUrl}${data?.productVariants?.[0]?.images?.[0]}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };

  return createMetadata(metadata);
};

const ProductDetailsPage = async ({ params }: PropsType) => {
  const product = await getProductData(params.productSlug);

  return (
    <div className="py-10 px-5">
      <PartsAndAccessoriesDetailsSection product={product} />
    </div>
  );
};

export default ProductDetailsPage;
