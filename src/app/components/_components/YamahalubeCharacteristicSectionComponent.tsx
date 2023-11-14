import React from "react";

import YamahalubeCharacteristicSection from "@/components/sections/YamahalubeCharacteristicSection";

const YamahalubeCharacteristicSectionComponent = () => {
  return (
    <YamahalubeCharacteristicSection
      url="#"
      title={"4 Characteristics of YAMAHALUBE"}
      image={"/assets/images/samples/sample-yamahalube.png"}
      characteristics={[
        {
          title:
            "Special locomotive oil developed by professional locomotive factory",
          description:
            "Developed by YAMAHA's professional team based on the characteristics and needs of locomotives and YAMAHA engines, so it can give full play to the best performance of YAMAHA engines.",
        },
        {
          title: "High power transmission",
          description:
            "High temperature oxidation stability, abrasion resistance, stable lubricity even under high-speed driving, and high power transmission performance.",
        },
        {
          title: "Low fuel consumption",
          description:
            "Using the most suitable base oil, in addition to suppressing the reduction in the amount of oil, it also suppresses the deterioration of the oil.",
        },
        {
          title: "Meets JASO MB specifications",
          description:
            "The JASO MB locomotive oil specification was formulated in 1998, and was revised in 2006 as a special oil test specification for locomotives. Based on the standard test of four-stroke engine oil,coupled with the friction performance test and high shear stability test standard specifically for the needs of locomotives, to ensure the quality of the manufacturer. In addition to meeting the JASO specifications, YAMALUBE has passed Yamaha’s internal standards that are stricter than the JASO specifications, so consumers can use it with peace of mind.",
          highlighted_footer:
            "(JASO = Japanese Automotive Standards Organization, Japanese Automotive Standards Organization specifications).",
        },
      ]}
    />
  );
};

export default YamahalubeCharacteristicSectionComponent;
