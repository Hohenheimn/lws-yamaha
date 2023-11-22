import React from "react";

import PolicyAndGuidedbookSection from "@/components/sections/PolicyAndGuidedbookSection";

const PolicyAndGuidedbookSectionComponent = () => {
  return (
    <PolicyAndGuidedbookSection
      image={"/assets/images/samples/sample-warranty.png"}
      warrantyList={[
        {
          title: "Fi Warranty Guide Book",
          url: "#",
          urlLabel: "Download",
          isUrlDownload: true,
        },
        {
          title: "Fi Warranty Guide Book",
          url: "#",
          urlLabel: "Download",
          isUrlDownload: true,
        },
        {
          title: "Fi Warranty Guide Book",
          url: "#",
          urlLabel: "Download",
          isUrlDownload: true,
        },
      ]}
    />
  );
};

export default PolicyAndGuidedbookSectionComponent;
