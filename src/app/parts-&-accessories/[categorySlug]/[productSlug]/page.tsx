import React from "react";
import nextApi from "@/utils/nextApi";
import config from "@/utils/config";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import PartsAndAccessoriesDetailsSection from "@/components/sections/PartsAndAccessoriesDetailsSection";
import { createMetadata } from "@/utils/helpers";
import RelatedProductListSection from "../_components/RelatedProductListSection/indexs";
import Breadcrumps from "@/components/partsAndAccessories/Breadcrumps";

type PropsType = {
  params: {
    categorySlug: string;
    productSlug: string;
  };
};

const getProductData = async (params: PropsType["params"]) => {
  try {
    const res = await nextApi.get(
      `/api/parts-and-accessories/${params.productSlug}?categorySlug=${params.categorySlug}`
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
  params,
}: PropsType): Promise<Metadata> => {
  const data = await getProductData(params);

  const metadata: Metadata = {
    title: data.name,
    description: data.description,
    keywords: data.name?.replaceAll("-", ","),
    alternates: {
      canonical:
        data.metaCanonical ||
        `${config.apiNextBaseUrl}/parts-&-accessories/${params.categorySlug}/${params.productSlug}`,
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
  const product = await getProductData(params);

  return (
    <div className="py-5 sm:py-10 px-5 flex justify-center">
      <div className="flex flex-col gap-5 sm:gap-10 w-full max-w-[1400px]">
        <Breadcrumps
          breadcrupms={[
            {
              id: 1,
              name: "Parts & Accessories",
              link: "",
            },
            {
              id: 2,
              name: product?.subCategory?.Category?.name,
              link: product?.subCategory?.Category?.slug,
            },
            { id: 3, name: product?.name, link: "" },
          ]}
          className="bg-transparent p-0"
        />
        <PartsAndAccessoriesDetailsSection product={product} />
        <RelatedProductListSection productId={product.id} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
