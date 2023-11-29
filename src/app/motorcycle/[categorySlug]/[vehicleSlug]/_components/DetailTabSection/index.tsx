"use client";

import DetailTabs from "@/components/motorcycle/DetailTabs";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type PropsType = {
  vehicleName: string;
};

const tabs: Array<{ id: string; title: string }> = [
  {
    id: "vehicleVariantSelection",
    title: "Color & Price",
  },
  {
    id: "vehicleFeatures",
    title: "Features",
  },
  {
    id: "vehicleSpecs",
    title: "Specification",
  },
  {
    id: "vehicleAccessories",
    title: "Accessories",
  },
];

const DetailTabSection = (props: PropsType) => {
  const router = useRouter();
  const path = usePathname();

  return (
    <DetailTabs
      tabs={[
        tabs[0],
        {
          id: "lifeWithMotorcycle",
          title: `Life with ${props.vehicleName}`,
        },
        ...tabs.slice(1),
      ].map((tab, index) => ({
        id: index + 1,
        name: tab.title,
        onClick: () => router.replace(`${path}#${tab.id}`),
      }))}
    />
  );
};

export default DetailTabSection;
