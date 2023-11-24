import React from "react";
import InquieryAndFindDealerButtons from "@/components/sections/InquieryAndFindDealerButtons";
import nextApi from "@/utils/nextApi";
import config from "@/utils/config";
import { redirect } from "next/navigation";
import { Metadata } from "next";

type PropsType = {
  params: {
    vehicleSlug: string;
  };
};

const getVehicleData = async (vehicleSlug: string) => {
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
          url: `${config.imageBaseUrl}${data.image.slice(1)}`,
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
      {/* <HeroSection
        {...vehicle}
        desktopBgImage={`${config.imageBaseUrl}${vehicle?.image.slice(1)}`}
      /> */}

      <InquieryAndFindDealerButtons />
    </div>
  );
};

export default MotorcycleCategoryPage;
