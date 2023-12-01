import React from "react";

import CcuMyRideLinkSection from "@/components/sections/CcuMyRideLinkSection";

const CcuMyRideLinkSectionComponent = () => {
  return (
    <CcuMyRideLinkSection
      content={[
        {
          type: "text",
          value:
            "Before updating CCU software, check MyRide-Link app version by following procedure",
        },
        {
          type: "list",
          value: [
            {
              title: "1. Launch MyRide-Link App",
              description: "",
            },
            {
              title: "2. Tap [Settings] in the bottom menu",
              description: "",
            },
            {
              title: `3. Check "App Version" in "Settings`,
              description: "",
            },
          ],
        },
        {
          type: "text",
          value:
            "Check that App version is the latest 2.30. If App version is before 2.30, update MyRide-Link App in App Store / Google Store",
        },
      ]}
      title={"How to check MyRide-Link App Version"}
      image={"/assets/images/ccu-updating-procedure/ccu-phone.png"}
    />
  );
};

export default CcuMyRideLinkSectionComponent;
