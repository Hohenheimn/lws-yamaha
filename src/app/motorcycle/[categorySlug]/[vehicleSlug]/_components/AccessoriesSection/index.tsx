"use client";

import React, { useEffect, useState } from "react";
import AccessoriesComponent from "@/components/sections/AccessoriesSection";
import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";
import { useRouter } from "next/navigation";

type PropsType = {
  vehicleId: number;
};

const AccessoriesSection = (props: PropsType) => {
  const router = useRouter();

  const { useGet } = useAPI(
    `${config.apiNextBaseUrl}/api/parts-and-accessories/variants?vehicleId=${props.vehicleId}&limit=3`
  );
  const { data, isError, isSuccess }: any = useGet([
    "product-variants",
    "vehicle",
    `${props.vehicleId}`,
  ]);
  const [productVariants, setProductVariants] = useState<
    Array<APIProductVariantType>
  >([]);

  useEffect(() => {
    if (data?.data && isSuccess) setProductVariants(data.data);

    () => {
      return setProductVariants([]);
    };
  }, [data]);

  if (isError) return;

  return (
    <AccessoriesComponent
      onClick={() => router.push(`/parts-&-accessories/accessories`)}
      accessories={productVariants.map((productVariant) => ({
        accessoryImage: `${config.imageBaseUrl}${productVariant.images?.[0]}`,
        title: `${productVariant?.product?.name}`,
        url: `/parts-&-accessories/${productVariant?.product?.subCategory?.slug}/${productVariant?.product?.slug}`,
      }))}
    />
  );
};

export default AccessoriesSection;
