import React from "react";
import { Controller } from "react-hook-form";

type Props = {
  control: any;
  errors: any;
  name: string;
  rules?: any;
  label: string;
  type:
    | "select"
    | "text"
    | "file"
    | "checkbox"
    | "number"
    | "radio"
    | "password"
    | "email"
    | "textarea"
    | "date";
  selectOptions?: string[] | number[];
  radioOptions?: {
    label: string;
    value: any;
  }[];
};

const inputStyle =
  "border border-textGray bg-transparent text-white rounded-md px-2 py-2 h-16 outline-none w-full";

function ControllerField({
  control,
  errors,
  name,
  label,
  rules,
  type,
  selectOptions,
  radioOptions,
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <aside className="flex flex-col">
          <label htmlFor={name} className=" text-[.9rem] text-white mb-1">
            {label}
          </label>
          {type !== "select" &&
            type !== "textarea" &&
            type !== "radio" &&
            type !== "checkbox" && (
              <input
                id={name}
                type={type}
                //   placeholder={placeholder}
                {...field}
                className={inputStyle + "appearance-none"}
              />
            )}
          {type === "checkbox" && (
            <div className="w-full">
              <input
                id={name}
                type={type}
                //   placeholder={placeholder}
                {...field}
                checked={field.value}
              />
            </div>
          )}
          {type === "textarea" && (
            <textarea
              id={name}
              //   placeholder={placeholder}
              {...field}
              rows={10}
              className={
                "border border-textGray rounded-md bg-transparent text-white px-2 py-2 outline-none w-full"
              }
            ></textarea>
          )}
          {type === "select" && selectOptions && (
            <select
              id={name}
              {...field}
              defaultValue={selectOptions[0]}
              className={inputStyle}
            >
              {selectOptions?.map((item, index) => (
                <option key={index} value={item} className=" bg-secondary">
                  {item}
                </option>
              ))}
            </select>
          )}
          {type === "radio" && (
            <ul className=" space-y-2">
              {radioOptions?.map((item, index) => (
                <li
                  key={index}
                  className=" flex items-center justify-start gap-2"
                >
                  <input
                    id={name + item.label}
                    type={type}
                    value={item.value}
                    onChange={() => {}}
                    checked={field.value === item.value}
                    onClick={() => field.onChange(item.value)}
                  />
                  <label htmlFor={name + item.label}>{item.label}</label>
                </li>
              ))}
            </ul>
          )}
          {errors[name]?.message && (
            <span className=" text-[.9rem] text-[#dd0000]">
              {errors[name]?.message}
            </span>
          )}
        </aside>
      )}
    />
  );
}

export default ControllerField;
