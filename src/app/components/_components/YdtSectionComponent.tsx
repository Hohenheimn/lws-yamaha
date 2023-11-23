import React from "react";

import YdtSection from "@/components/sections/YdtSection";

const YdtSectionComponent = () => {
  return (
    <YdtSection
      icon={"/assets/images/ydt/ydt-icon.png"}
      title={"Top 4 Benefits of Yamaha Diagnostic Tool 3"}
      image={"/assets/images/samples/sample-ydt-image.png"}
      content={[
        {
          title: "01",
          description:
            "Revitalized motorcycle after receiving preventive maintenance service and check-up with YDT3",
        },
        { title: "02", description: "Reduced service waiting time" },
        {
          title: "03",
          description:
            "Avoid incorrect parts replacement with accurate troubleshooting​",
        },
        {
          title: "04",
          description:
            "Availability of digital view of MC inspection and repair ",
        },
      ]}
    />
  );
};

export default YdtSectionComponent;
