"use client";

import MotorcycleCardList from "@/components/sections/MotorcycleCardList";
import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";
import { useRouter } from "next/navigation";
import React from "react";

type PropsType = {
  vehicleCategoryId: number;
};

const VehicleListSection = (props: PropsType) => {
  const router = useRouter();
  const { useGet } = useAPI(
    `${config.apiNextBaseUrl}/api/categories/${props.vehicleCategoryId}/vehicles`
  );
  const { data: category, isError }: any = useGet([
    "categories",
    `${props.vehicleCategoryId}`,
    "vehicles",
  ]);

  if (isError) return;

  return (
    <MotorcycleCardList
      motorcycles={category?.data?.vehicles?.map((vehicle: any) => ({
        title: `${vehicle?.model}`,
        imageSrc: `${config.imageBaseUrl}${vehicle?.desktopImage}`,
        id: vehicle?.id,
        url: `/motorcycle/${category?.data?.slug}/${vehicle?.slug}`,
        features: vehicle?.vehicleFeatures
          ?.slice(0, 3)
          .map((feature: any) => feature?.title),
      }))}
      nowrap={false}
    />
  );
};

export default VehicleListSection;
