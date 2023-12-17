import React from "react";
import nextApi from "@/utils/nextApi";
import config from "@/utils/config";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import PartsAndAccessoriesDetailsSection from "@/components/sections/PartsAndAccessoriesDetailsSection";
import productData from "@/data/partsAndAccessories/product";
import { createMetadata } from "@/utils/helpers";

type PropsType = {
  params: {
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
  params: { productSlug },
}: PropsType): Promise<Metadata> => {
  const data = await getProductData(productSlug);

  const metadata: Metadata = {
    title: data.name,
    description: data.description,
    keywords: data.name?.replaceAll("-", ","),
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
