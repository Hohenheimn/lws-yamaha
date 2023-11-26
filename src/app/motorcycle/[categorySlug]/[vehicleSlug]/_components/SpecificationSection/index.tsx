"use client";

import React, { useEffect, useState } from "react";
import SpecSection from "@/components/sections/SpecificationSection";
import config from "@/utils/config";
import useAPI from "@/hooks/useAPI";

type PropsType = {
  vehicleId: number;
  brochure: string;
};

const SpecificationSection = (props: PropsType) => {
  const { useGet } = useAPI(
    `${config.apiNextBaseUrl}/api/vehicle-specifications?vehicleId=${props.vehicleId}`
  );
  const { data, isError, isLoading, isSuccess }: any = useGet([
    "vehicle-specifications",
    `${props.vehicleId}`,
  ]);
  const [vehicleSpecs, setVehicleSpecs] = useState<
    Array<APIVechicleSpecificationType>
  >([]);

  useEffect(() => {
    if (data?.data && isSuccess) setVehicleSpecs(data.data);

    () => {
      return setVehicleSpecs([]);
    };
  }, [data]);

  if (isError) return;

  const downloadBrochure = (brochure: string) => {
    const anchor = document.createElement("a");
    anchor.href = `${config.imageBaseUrl}${brochure}`;
    anchor.download = `brochure-${brochure}`;
    anchor.target = "_blank";

    anchor.click();
  };

  return (
    <SpecSection
      onClickBrochure={() => downloadBrochure(props.brochure)}
      specifications={vehicleSpecs
        .filter((_) => _.vehicleSpecificationItems?.length)
        .map((spec) => ({
          id: spec.id,
          category: spec.name,
          specifications: spec.vehicleSpecificationItems.map((item) => ({
            id: item.id,
            name: item.key,
            value: item.value,
          })),
        }))}
    />
  );
};

export default SpecificationSection;
