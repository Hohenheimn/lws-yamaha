import React from "react";

import DealerSection from "@/components/sections/DealerSection";
import Hero from "@/components/sections/Hero";
import InquieryAndFindDealerButtons from "@/components/shared/InquieryAndFindDealerButtons";

const FindDealerPage = () => {
  return (
    <div>
      <Hero
        desktopBgImage={"/assets/images/samples/sample-dealer-hero.png"}
        title={"DEALER LOCATOR"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Malesuada non mauris pellentesque augue fermentum tristique nulla et. In vitae donec fringilla elit hendrerit aliquet"
        }
        textPosition={"bottom-left"}
        fullHeight={false}
      />
      <DealerSection />
      <InquieryAndFindDealerButtons />
    </div>
  );
};

export default FindDealerPage;
