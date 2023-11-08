import React from "react";

import PolicyAndGuidedbookSection from "@/components/sections/PolicyAndGuidedbookSection";

const PolicyAndGuidedbookSectionComponent = () => {
  return (
    <PolicyAndGuidedbookSection
      image={"/assets/images/samples/sample-warranty.png"}
      warrantyList={[
        {
          downloadUrl: "#",
          title: "Fi Warranty Guide Book",
        },
        {
          downloadUrl: "#",
          title: "Carburetor Warranty Guide Book",
        },
        {
          downloadUrl: "#",
          title: "Sports Machines Warranty Guide Book",
        },
      ]}
    />
  );
};

export default PolicyAndGuidedbookSectionComponent;
