"use client";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 300,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="flex items-center gap-5 text-white border border-[#898989] h-16 lg:h-20 px-5">
      <input
        {...props}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search Dealer Store Name"
        className="outline-none bg-transparent text-lg flex-1 placeholder:text-[#989898]"
        autoComplete="off"
      />
      <BsSearch className="text-3xl" />
    </div>
  );
}
export default DebouncedInput;
