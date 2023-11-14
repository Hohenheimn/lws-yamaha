import React, { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";

type VariantType = {
  id: number;
  color: string;
  sizes: Array<SizeType>;
};

type SizeType = {
  id: number;
  size: string;
  code: string;
  price: number;
  image: string;
};

type PropsType = {
  product: {
    name: string;
    description: string;
    modeUsed: Array<string>;
    variants: Array<VariantType>;
  };
};

const PartsAndAccessoriesDetailsSection = (props: PropsType) => {
  const { product } = props;
  const [currentVariant, setCurrentVariant] = useState<VariantType>();
  const [currentSize, setCurrentSize] = useState<SizeType>();

  useEffect(() => {
    setCurrentVariant(product.variants?.[0]);
  }, [product]);

  useEffect(() => {
    if (currentVariant) {
      setCurrentSize(currentVariant.sizes?.[0]);
    }
  }, [currentVariant?.id]);

  const renderVariants = () => {
    return (
      <div className="flex gap-3 items-center">
        <span className="font-semibold w-[55px] text-right">Colors:</span>
        <div className="flex gap-2 flex-wrap">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setCurrentVariant(variant)}
              className={`border-[2px] border-[#535353] py-2 px-7 ${classNames({
                "bg-[#535353]": currentVariant?.id === variant.id,
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
        <span className="font-semibold w-[55px] text-right">Sizes:</span>
        <div className="flex gap-2">
          {currentVariant?.sizes?.map((_) => (
            <button
              key={_.id}
              onClick={() => setCurrentSize(_)}
              className={`border-[2px] border-[#535353] py-2 px-7`}
            >
              {_.size}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-full text-white max-w-[1400px] flex flex-col gap-10">
        <div className="flex gap-10 flex-wrap">
          <div className="relative h-[300px] w-full sm:h-[500px] sm:w-[500px] bg-[#323232] rounded-lg cursor-pointer">
            {currentSize?.image && (
              <Image
                fill
                src={currentSize.image}
                alt={currentSize.code}
                className="p-7 object-contain object-center"
              />
            )}
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-2xl">{product.name}</p>
              <p className="text-white/70">{currentSize?.code}</p>
              <p className="font-semibold text-3xl">
                P{" "}
                {(currentSize?.price || 0).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
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
