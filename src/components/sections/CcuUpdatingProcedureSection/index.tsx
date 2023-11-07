import React, { ReactNode } from "react";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  instructions: ReactNode[];
  notes: string[];
};

const CcuUpdatingProcedureSection = (props: PropsType) => {
  const { instructions, notes } = props;
  return (
    <SectionContainer
      width={"narrow"}
      className=" text-white flex items-center flex-col space-y-10 lg:space-y-20"
    >
      <aside>
        <Heading type="h4">CCU Updating Procedure</Heading>
        <p>How to download and install the latest CCU software</p>
      </aside>
      <div>
        <ul className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          {instructions.map((instruction, indx) => (
            <li key={indx} className="  flex gap-2">
              {indx + 1}. {instruction}
            </li>
          ))}
        </ul>
      </div>
      <aside className="w-full">
        <p className=" font-bold">Note:</p>
        <ul className=" w-full md:w-1/2 list-disc pl-[20px]">
          {notes.map((note, indx) => (
            <li key={indx}>{note}</li>
          ))}
        </ul>
      </aside>
    </SectionContainer>
  );
};

export default CcuUpdatingProcedureSection;
