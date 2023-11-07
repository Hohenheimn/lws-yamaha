import React from "react";

import CcuMyRideLinkSection from "@/components/sections/CcuMyRideLinkSection";

const CcuMyRideLinkSectionComponent = () => {
  return (
    <CcuMyRideLinkSection
      list={[
        "Launch MyRide-Link App",
        "Tap [Settings] in the bottom menu",
        'Check "App Version" in "Settings"',
      ]}
      title={"How to check MyRide-Link App Version"}
      first_description={
        "Before updating CCU software, check MyRide-Link app version by following procedure"
      }
      second_description={
        "Check that App version is the latest 2.30. If App version is before 2.30, update MyRide-Link App in App Store / Google Store"
      }
      image={"/assets/images/samples/sample-mobile.png"}
    />
  );
};

export default CcuMyRideLinkSectionComponent;
