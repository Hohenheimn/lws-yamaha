import Button from "@/components/shared/Button";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
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
  const [activeCategoryId, setActiveCategoryId] = useState<number>();

  useEffect(() => {
    if (props.specifications?.length) {
      setActiveCategoryId(specs?.[0]?.id);
    }
  }, [props.specifications]);

  const handleActiveCategoryId = (id: number) => {
    if (id !== activeCategoryId) return setActiveCategoryId(id);

    setActiveCategoryId(undefined);
  };

  return (
    <div className="text-white flex flex-col items-center gap-10">
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
              {spec.category}{" "}
              {activeCategoryId !== spec.id ? <LuPlus /> : <LuMinus />}
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
