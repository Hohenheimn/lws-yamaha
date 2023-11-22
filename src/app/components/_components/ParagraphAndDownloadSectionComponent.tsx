import React from "react";

import ParagraphAndDownloadSection from "@/components/sections/ParagraphAndDownloadSection";

const ParagraphAndDownloadSectionComponent = () => {
  return (
    <ParagraphAndDownloadSection
      paragraph={
        "YAMAHA MOTOR PHILIPPINES, INC. (YMPH) warrants the original purchaser of the unit, that motorcycle is free from any defect in material and workmanship under normal use and maintenance conditions. If a problem occurs within the warranty period, and it is proven, upon inspection of the product, that the damage is attributable to YMPH, YMPH will replace the defective part/s and/or compensate labor cost incurred in making repairs and/or adjustments. YMPH reserves the right to make the final decision on validity of warranty claims; to determine whether any alleged defect and/or service is covered by this warranty; to determine whether a defective part is to be replaced or repaired and to determine whether the owner has complied with the terms and conditions of the warranty."
      }
      downloadLink={
        "https://tse2.mm.bing.net/th?id=OIP.fSo5HMXhsaMA3S8IfAO_CAHaE7&pid=Api&P=0&h=220"
      }
    />
  );
};

export default ParagraphAndDownloadSectionComponent;
