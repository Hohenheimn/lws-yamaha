import React from "react";
import { Metadata } from "next";
import { redirect } from "next/navigation";

import Hero from "@/components/sections/Hero";
import InquieryAndFindDealerButtons from "@/components/sections/InquieryAndFindDealerButtons";
import MotorcycleColorAndPriceSection from "@/components/sections/MotorcycleColorAndPriceSection";
import config from "@/utils/config";
import nextApi from "@/utils/nextApi";

import AccessoriesSection from "./_components/AccessoriesSection";
import ColorAndPriceSection from "./_components/ColorAndPriceSection";
import DetailTabSection from "./_components/DetailTabSection";
import FeaturesSection from "./_components/FeturesSection";
import HeroSection from "./_components/HeroSection";
import HighlightSection from "./_components/HighlightSection";
import SpecificationSection from "./_components/SpecificationSection";
import { createMetadata } from "@/utils/helpers";

type PropsType = {
  params: {
    categorySlug: string;
    vehicleSlug: string;
  };
};

const getVehicleData = async (
  vehicleSlug: string
): Promise<APIVechicleType> => {
  try {
    const res = await nextApi.get(`/api/vehicles/${vehicleSlug}`);
    const data = await res.data.data;

    if (!data) redirect("/404");

    return data;
  } catch (error) {
    console.error(error);
    redirect("/404");
  }
};

export const generateMetadata = async ({
  params: { vehicleSlug, categorySlug },
}: PropsType): Promise<Metadata> => {
  const data = await getVehicleData(vehicleSlug);

  return createMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.metaKeywords,
    alternates: {
      canonical:
        data.metaCanonical ||
        `${config.apiNextBaseUrl}/motorcycle/${categorySlug}/${vehicleSlug}`,
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
  });
};

const MotorcycleCategoryPage = async ({ params }: PropsType) => {
  const vehicle = await getVehicleData(params.vehicleSlug);

  return (
    <div>
      <HeroSection {...vehicle} />
      <div className="mt-10">
        <DetailTabSection vehicleName={vehicle.model} />
      </div>
      <div id="vehicleVariantSelection" className="w-full">
        <ColorAndPriceSection vehicleId={vehicle.id} />
      </div>
      <div id="lifeWithMotorcycle">
        <HighlightSection
          highlight={vehicle.highlight}
          vehicleGallery={vehicle.vehicleGallery}
        />
      </div>
      <div id="vehicleFeatures" className="w-full">
        <FeaturesSection vehicleId={vehicle.id} />
      </div>
      <div id="vehicleSpecs" className="mt-5 py-12">
        <SpecificationSection
          vehicleId={vehicle.id}
          brochure={vehicle.brochure}
        />
      </div>
      <div id="vehicleAccessories" className="">
        <AccessoriesSection vehicleId={vehicle.id} />
      </div>
      <InquieryAndFindDealerButtons />
    </div>
  );
};

export default MotorcycleCategoryPage;
