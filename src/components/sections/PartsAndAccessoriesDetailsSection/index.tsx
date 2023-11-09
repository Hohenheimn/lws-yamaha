import React, { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";

const product = {
  name: "HJC Helmet",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum sed dolores possimus necessitatibus temporibus et suscipit deserunt consectetur natus nam laborum iste maiores illo dolorem sequi modi voluptatum, quasi amet quis facilis ipsum non mollitia assumenda. Ullam soluta quam veniam illum reiciendis nobis animi libero sunt, aliquid voluptatibus voluptate recusandae non assumendadolore velit enim odit, officia incidunt nulla!",
  modeUsed: [],
  variants: [
    {
      id: 1,
      color: "White",
      sizes: [
        {
          size: "M",
          code: "Y1J-L801M-00-00",
          price: 1500,
        },
        {
          size: "L",
          code: "L1G-L801M-22-01",
          price: 2500,
        },
        {
          size: "XL",
          code: "G1H-L301X-13-22",
          price: 3500,
        },
        {
          size: "XXL",
          code: "G1H-L301X-13-22",
          price: 4500,
        },
      ],
    },
    {
      id: 2,
      color: "Black",
      sizes: [
        {
          size: "XL",
          code: "G1H-L301X-13-22",
          price: 3500,
        },
        {
          size: "XXL",
          code: "G1H-L301X-13-22",
          price: 4500,
        },
      ],
    },
    {
      id: 3,
      color: "Gray",
      sizes: [
        {
          size: "M",
          code: "Y1J-L801M-00-00",
          price: 1500,
        },
        {
          size: "L",
          code: "L1G-L801M-22-01",
          price: 2500,
        },
        {
          size: "XL",
          code: "G1H-L301X-13-22",
          price: 3500,
        },
      ],
    },
  ],
};

const PartsAndAccessoriesDetailsSection = () => {
  const [currentVariantId, setCurrentVariantId] = useState<number>();
  const [currentSize, setCurrentSize] = useState<{
    size: string;
    price: number;
    code: string;
  }>();

  useEffect(() => {
    setCurrentVariantId(product.variants?.[0]?.id);
  }, [product]);

  useEffect(() => {
    setCurrentSize(product.variants?.[0]?.sizes?.[0]);
  }, [currentVariantId]);

  const renderVariants = () => {
    return (
      <div className="flex gap-3 items-center">
        <span className="font-semibold">Colors:</span>
        <div className="flex gap-2 flex-wrap">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setCurrentVariantId(variant.id)}
              className={`border-[2px] border-[#535353] py-2 px-7 ${classNames({
                "bg-[#535353]": currentVariantId === variant.id,
              })}`}
            >
              {variant.color}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderSizes = () => {
    return (
      <div className="flex gap-3 items-center">
        <span className="font-semibold">Sizes:</span>
        <div className="flex gap-2">
          {product.variants
            ?.find((variant) => variant.id === currentVariantId)
            ?.sizes?.map((size) => (
              <button
                key={size.code}
                onClick={() => setCurrentSize(size)}
                className={`border-[2px] border-[#535353] py-2 px-7`}
              >
                {size.size}
              </button>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-full text-white max-w-7xl flex flex-col gap-10">
        <div className="flex gap-10">
          <div className="relative h-[500px] w-[500px] bg-[#323232] rounded-lg cursor-pointer">
            <Image
              fill
              src={"/assets/images/placeholder.png"}
              alt={""}
              className="p-7 object-contain object-center"
            />
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-2xl">{product.name}</p>
              <p className="text-white/70">{currentSize?.code}</p>
              <p className="font-semibold text-3xl">
                P {currentSize?.price.toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {renderSizes()}
              {renderVariants()}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Product Description</p>
          <p className="bg-[#323232] p-5 lg:p-7 rounded-lg min-h-[150px]">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartsAndAccessoriesDetailsSection;
