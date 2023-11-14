import React from "react";
import Image from "next/image";

import CcuUpdatingProcedureSection from "@/components/sections/CcuUpdatingProcedureSection";
import { ccuUpdateProcedure } from "@/data/ccuUpdateProcedure";

const CcuUpdatingProcedureSectionComponenet = () => {
  return (
    <CcuUpdatingProcedureSection
      instructions={ccuUpdateProcedure}
      notes={[
        "It takes 10 to 15 minutes to update the software.",
        "To avoid draining the battery, please keep a charger connected to the battery while the software is updating.",
        " If you don't have a battery charger, please ask a Yamaha dealer, or run the engine while the software is updating.",
      ]}
    />
  );
};

export default CcuUpdatingProcedureSectionComponenet;
