import classNames from "classnames";
import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";

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
  const [activeCategoryId, setActiveCategoryId] = useState(specs?.[0]?.id);

  const handleActiveCategoryId = (id: number) => {
    setActiveCategoryId(id);
  };

  return (
    <div className="text-white flex flex-col items-center gap-5">
      <h3 className="font-bold text-3xl">Specifications</h3>
      <div className="flex flex-col w-full max-w-5xl">
        {specs.map((spec) => (
          <div key={spec.id}>
            <button
              onClick={() => handleActiveCategoryId(spec.id)}
              className={`font-bold border-b-[2px] border-gray-400 text-lg flex justify-between w-full items-center px-5 py-3 ${classNames(
                {
                  "border-none": activeCategoryId === spec.id,
                }
              )}`}
            >
              {spec.category} {activeCategoryId !== spec.id && <LuPlus />}
            </button>
            <table
              className={`w-full ${classNames({
                hidden: activeCategoryId !== spec.id,
              })}`}
            >
              <tbody>
                {spec.specifications.map((data, index) => (
                  <tr key={index} className="flex">
                    <td className="border border-gray-400 px-5 py-3 flex-1">
                      {data.name}
                    </td>
                    <td className="border border-gray-400 px-5 py-3 flex-1 text-right">
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
        <button className="bg-red p-2 self-center w-full rounded-xl text-white font-semibold max-w-sm mt-5">
          Brochure
        </button>
      )}
    </div>
  );
};

export default SpecificationSection;
