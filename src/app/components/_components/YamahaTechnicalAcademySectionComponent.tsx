import React from "react";

import YamahaTechnicalAcademySection from "@/components/sections/YamahaTechnicalAcademySection";

const YamahaTechnicalAcademySectionComponent = () => {
  return (
    <YamahaTechnicalAcademySection
      icon={"/assets/images/samples/sample-academy-star.png"}
      title={"Two Level"}
      description={
        "The YTA training program is split in two levels: YTA Bronze and Silver."
      }
      boxes={[
        {
          url: "/assets/images/samples/sample-academy-star-bronze.png",
          title: "YTA Bronze",
          description:
            "YTA Bronze is a self-paced, correspondence training course designed to be completed by the candidate technician. To successfully complete this course, he must pass a wide-ranging test that covers the engine, drive-train, electrical and chassis systems and service procedures on Yamaha motorcycles.",
        },
        {
          url: "/assets/images/samples/sample-academy-star-silver.png",
          title: "YTA Silver",
          description:
            "YTA Silver is a more comprehensive training course which focuses on advance system diagnosis and troubleshooting, providing hands-on learning using the latest products, tools and troubleshooting techniques.",
        },
      ]}
    />
  );
};

export default YamahaTechnicalAcademySectionComponent;
