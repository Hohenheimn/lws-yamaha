import DetailTabs from "@/components/motorcycle/DetailTabs";
import React from "react";

const DetailTabsComponent = () => {
  const tabs = [
    {
      id: 1,
      name: "Color & Price",
    },
    {
      id: 2,
      name: "Life with MT-10 SP",
    },
    {
      id: 3,
      name: "Specification",
    },
    {
      id: 4,
      name: "Accessories",
    },
  ];

  return (
    <DetailTabs
      tabs={tabs.map((tab) => ({
        ...tab,
        onClick: () => console.log(tab.name),
      }))}
    />
  );
};

export default DetailTabsComponent;
