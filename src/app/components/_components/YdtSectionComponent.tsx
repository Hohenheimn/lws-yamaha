import React from "react";

import YdtSection from "@/components/sections/YdtSection";

const YdtSectionComponent = () => {
  return (
    <YdtSection
      icon={"/assets/images/samples/sample-ydt-icon.png"}
      title={"Top 4 Benefits of Yamaha Diagnostic Tool 3"}
      image={"/assets/images/samples/sample-ydt-image.png"}
      content={[
        "Revitalized motorcycle after receiving preventive maintenance service and check-up with YDT3",
        "Reduced service waiting time",
        "Avoid incorrect parts replacement with accurate troubleshooting​",
        "Availability of digital view of MC inspection and repair ",
      ]}
    />
  );
};

export default YdtSectionComponent;
