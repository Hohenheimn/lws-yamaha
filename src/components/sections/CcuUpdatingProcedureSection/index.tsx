import React, { ReactNode } from "react";

import Image from "next/image";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

export type instructions = {
  content: content;
}[];

type PropsType = {
  instructions: instructions;
  notes: string[];
};

type content = stepProcedure[];

type stepProcedure = {
  value: string;
  type: "highlight" | "image" | "text";
};

const CcuUpdatingProcedureSection = (props: PropsType) => {
  const { instructions, notes } = props;
  return (
    <SectionContainer
      width={"narrow"}
      bgColor="#131313"
      className=" text-white flex items-center flex-col space-y-5"
    >
      <aside>
        <Heading type="h4">CCU Updating Procedure</Heading>
        <p>How to download and install the latest CCU software</p>
      </aside>
      <div>
        <ul className="columns columns-1 md:columns-2 gap-5">
          {instructions.map((instruction, indx) => (
            <li key={indx} className="p-5 flex gap-2">
              {indx + 1}.
              <aside className="space-y-2">
                {instruction.content.map((cont, indx) => (
                  <div key={indx}>
                    {cont.type === "text" && <p>{cont.value}</p>}
                    {cont.type === "highlight" && (
                      <p className=" font-bold">&quot;{cont.value}&quot;</p>
                    )}
                    {cont.type === "image" && (
                      <Image
                        src={cont.value}
                        alt="image"
                        width={250}
                        height={250}
                      />
                    )}
                  </div>
                ))}
              </aside>
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
