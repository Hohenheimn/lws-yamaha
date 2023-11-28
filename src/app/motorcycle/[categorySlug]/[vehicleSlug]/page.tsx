import React from "react";
import InquieryAndFindDealerButtons from "@/components/sections/InquieryAndFindDealerButtons";
import nextApi from "@/utils/nextApi";
import config from "@/utils/config";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import MotorcycleColorAndPriceSection from "@/components/sections/MotorcycleColorAndPriceSection";
import HeroSection from "./_components/HeroSection";
import ColorAndPriceSection from "./_components/ColorAndPriceSection";
import FeaturesSection from "./_components/FeturesSection";
import DetailTabSection from "./_components/DetailTabSection";
import SpecificationSection from "./_components/SpecificationSection";
import HighlightSection from "./_components/HighlightSection";
import AccessoriesSection from "./_components/AccessoriesSection";

type PropsType = {
  params: {
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
  params: { vehicleSlug },
}: PropsType): Promise<Metadata> => {
  const data = await getVehicleData(vehicleSlug);

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
        <HighlightSection {...vehicle.highlight} />
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
