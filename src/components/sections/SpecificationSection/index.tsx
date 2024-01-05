import Button from "@/components/shared/Button";
import classNames from "classnames";
import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

type PropsType = {
  onClickBrochure?(): void;
  specifications: Array<{
    id: number;
    category: string;
    specifications: Array<{
      id: number;
      name: string;
      value: string;
    }>;
  }>;
};

const SpecificationSection = (props: PropsType) => {
  const specs = props.specifications;
  const [isActive, setIsActive] = useState<boolean[]>([true]);

  return (
    <div className="text-white flex flex-col items-center gap-10">
      <h3 className="font-bold text-3xl">Specifications</h3>
      <div className="flex flex-col w-full max-w-5xl">
        {specs.map((spec, index) => (
          <div key={spec.id}>
            <button
              onClick={() => {
                setIsActive((prevState) => {
                  const newArray = [...prevState];
                  newArray[index] = !newArray[index];
                  return newArray;
                });
              }}
              className={`font-bold border-b-[2px] border-gray-400 text-lg flex justify-between w-full items-center px-5 py-3 `}
            >
              {spec.category} {isActive[index] ? <LuMinus /> : <LuPlus />}
            </button>

            <table
              className={classNames("w-full", !isActive[index] && "hidden")}
            >
              <tbody>
                {spec.specifications.map((data, index) => (
                  <tr key={index} className="flex">
                    <td className="text-sm border border-gray-400 pl-2 py-3 w-full md:text-base">
                      {data.name}
                    </td>
                    <td className="text-sm border border-gray-400 pr-2 py-3 w-full md:text-base text-right">
                      {data.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      {!!props.onClickBrochure && (
        <Button
          appearance={"primary"}
          size={"large"}
          onClick={props.onClickBrochure}
        >
          Brochure
        </Button>
      )}
    </div>
  );
};

export default SpecificationSection;
