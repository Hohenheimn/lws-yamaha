"use client";

import React, { useEffect, useState } from "react";

import MotorcycleColorAndPriceSection from "@/components/sections/MotorcycleColorAndPriceSection";
import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";

type PropsType = {
  vehicleId: number;
};

const ColorAndPriceSection = (props: PropsType) => {
  const { useGet } = useAPI(
    `${config.apiNextBaseUrl}/api/vehicle-variants?vehicleId=${props.vehicleId}`
  );
  const { data, isError, isSuccess }: any = useGet([
    "vehicle-variants",
    `${props.vehicleId}`,
  ]);
  const [vechicleVariants, setVehicleVariants] = useState<
    Array<APIVechicleVariantType>
  >([]);

  useEffect(() => {
    if (data?.data && isSuccess) setVehicleVariants(data.data);

    () => {
      return setVehicleVariants([]);
    };
  }, [data]);

  if (isError) return;

  return (
    <MotorcycleColorAndPriceSection
      motorcycle_detail={vechicleVariants.map((vechicleVariant) => ({
        id: vechicleVariant?.id,
        price: vechicleVariant.price,
        color: vechicleVariant.vehicleAttributes?.[0].value,
        motorcycleImage: `${config.imageBaseUrl}${vechicleVariant.image}`,
        motorcycleName: vechicleVariant.name,
        titleImage: `${config.imageBaseUrl}${vechicleVariant.logo}`,
        desktopBgImage: `${config.imageBaseUrl}${vechicleVariant.backgroundImage}`,
        description: vechicleVariant.description,
      }))}
    />
  );
};

export default ColorAndPriceSection;
