import React from "react";
import AccessoriesSection from "@/components/sections/AccessoriesSection";
import Hero from "@/components/sections/Hero";
import LifeWithMotorcycleSection from "@/components/sections/LifeWithMotorcyleSection";
import MotorcycleColorAndPriceSection from "@/components/sections/MotorcycleColorAndPriceSection";
import MotorcycleFeaturesSection from "@/components/sections/MotorcycleFeaturesSection";
import SpecificationSection from "@/components/sections/SpecificationSection";
import InquieryAndFindDealerButtons from "@/components/sections/InquieryAndFindDealerButtons";
import nextApi from "@/utils/nextApi";
import config from "@/utils/config";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "./_components/HeroSection";
import axios from "axios";

const VehicleListSection = dynamic(
  () => import("./_components/VehicleListSection")
);

type PropsType = {
  params: {
    categorySlug: string;
  };
};

const getCategoryData = async (categorySlug: string) => {
  try {
    const res = await nextApi.get(
      `/api/categories/${categorySlug}?type=vehicle`
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

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.metaKeywords,

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
};

const MotorcycleCategoryPage = async ({ params }: PropsType) => {
  const category = await getCategoryData(params.categorySlug);

  return (
    <div>
      <HeroSection
        {...category}
        desktopBgImage={`${config.imageBaseUrl}${category?.image}`}
      />
      {!!category?.id && (
        <VehicleListSection vehicleCategoryId={category?.id} />
      )}
      <InquieryAndFindDealerButtons />
    </div>
  );
};

export default MotorcycleCategoryPage;
