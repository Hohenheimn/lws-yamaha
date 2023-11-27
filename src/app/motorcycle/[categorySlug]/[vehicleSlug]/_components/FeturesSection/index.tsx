"use client";

import MotorcycleFeaturesSection from "@/components/sections/MotorcycleFeaturesSection";
import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";
import React, { useEffect, useState } from "react";

type PropsType = {
  vehicleId: number;
};

const FeaturesSection = (props: PropsType) => {
  const { useGet } = useAPI(
    `${config.apiNextBaseUrl}/api/vehicle-features?vehicleId=${props.vehicleId}`
  );
  const { data, isError, isLoading, isSuccess }: any = useGet([
    "vehicle-features",
    `${props.vehicleId}`,
  ]);
  const [vechicleFeatures, setVehicleFeatures] = useState<
    Array<APIVehicleFeatureType>
  >([]);

  useEffect(() => {
    if (data?.data && isSuccess) setVehicleFeatures(data.data);

    () => {
      return setVehicleFeatures([]);
    };
  }, [data]);

  if (isError) return;

  return (
    <MotorcycleFeaturesSection
      features={vechicleFeatures.map((feature) => ({
        id: feature.id,
        image: `${config.imageBaseUrl}${feature.backgroundImage}`,
        title: feature.title,
        description: feature.description,
      }))}
    />
  );
};

export default FeaturesSection;
