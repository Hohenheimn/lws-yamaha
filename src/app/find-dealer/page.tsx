import React from "react";

import DealerSection from "@/components/sections/DealerSection";
import InquieryAndFindDealerButtons from "@/components/sections/InquieryAndFindDealerButtons";

export const generateMetadata = () => {
  return {
    title: "Find Dealer",
    description: "",
  };
};

const FindDealer = () => {
  return (
    <>
      <DealerSection />
      <InquieryAndFindDealerButtons />
    </>
  );
};

export default FindDealer;
