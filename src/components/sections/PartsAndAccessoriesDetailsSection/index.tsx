"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import config from "@/utils/config";
import useAPI from "@/hooks/useAPI";

type PropsType = {
  product: APIProductType;
};

const PartsAndAccessoriesDetailsSection = (props: PropsType) => {
  const [vehicleIds, setVehicleIds] = useState<Array<number>>([]);
  const { useGet } = useAPI(
    `${config.apiNextBaseUrl}/api/vehicles?vehicleIds=${vehicleIds.join(",")}`
  );
  const { data: vehicles }: any = useGet([
    "products",
    "vehicles",
    `${vehicleIds.join("-")}`,
  ]);
  const { product } = props;
  const [currentVariant, setCurrentVariant] = useState<APIProductVariantType>();
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>();
  // const [currentSize, setCurrentSize] = useState<SizeType>();

  //Set all the variants
  useEffect(() => {
    setCurrentVariant(product.productVariants?.[0]);
  }, [product]);

  // sett eh vehicle IDs once everytime the current variant changes
  useEffect(() => {
    setVehicleIds(currentVariant?.vehicleIds || []);
  }, [currentVariant]);

  useEffect(() => {
    setImagePreviewUrl(`${config.imageBaseUrl}${currentVariant?.images?.[0]}`);
  }, [currentVariant]);

  console.log(currentVariant);

  // const renderVariants = () => {
  //   return (
  //     <div className="flex gap-3 items-center">
  //       <span className="font-semibold w-[55px] text-right">Colors:</span>
  //       <div className="flex gap-2 flex-wrap">
  //         {product.productVariants?.map((variant) => (
  //           <button
  //             key={variant.id}
  //             onClick={() => setCurrentVariant(variant)}
  //             className={`border-[2px] border-[#535353] py-2 px-7 ${classNames({
  //               "bg-[#535353]": currentVariant?.id === variant.id,
  //             })}`}
  //           >
  //             {variant.color}
  //           </button>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  // const renderSizes = () => {
  //   return (
  //     <div className="flex gap-3 items-center">
  //       <span className="font-semibold w-[55px] text-right">Sizes:</span>
  //       <div className="flex gap-2">
  //         {currentVariant?.sizes?.map((_) => (
  //           <button
  //             key={_.id}
  //             onClick={() => setCurrentSize(_)}
  //             className={`border-[2px] border-[#535353] py-2 px-7`}
  //           >
  //             {_.size}
  //           </button>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  // const renderAttributes = () => {
  //   return (
  //     <div className="flex gap-3 items-center">
  //       <span className="font-semibold w-[55px] text-right">Attributes:</span>
  //       <div className="flex gap-2">
  //         {currentVariant?.attributes?.map((_) => (
  //           <div
  //             key={_.id}
  //             className={`border-[2px] border-[#535353] py-2 px-7`}
  //           >
  //             {_.attribute}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  const renderImagePreview = () => {
    return (
      <div className="flex flex-col gap-5">
        <div className="relative h-[300px] w-full sm:h-[500px] sm:w-[500px]  bg-[#323232] rounded-lg cursor-pointer">
          {currentVariant?.images?.length && (
            <Image
              fill
              src={`${imagePreviewUrl}`}
              alt={currentVariant?.code}
              className="p-5 object-contain object-center"
            />
          )}
        </div>
        <div className="flex gap-5 flex-wrap">
          {currentVariant?.images.map((image, key) => (
            <div
              onClick={() =>
                setImagePreviewUrl(`${config.imageBaseUrl}${image}`)
              }
              key={key}
              className="w-[100px] h-[100px] cursor-pointer transition-transform hover:scale-110 origin-center relative bg-[#323232] overflow-hidden rounded-md"
            >
              <Image
                fill
                src={`${config.imageBaseUrl}${image}`}
                alt={currentVariant?.code}
                className="p-2 object-contatn object-center"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderVariants = useMemo(() => {
    return (
      <div className="flex gap-5 flex-wrap py-10">
        {product.productVariants?.map((variant) => (
          <div
            onClick={() => setCurrentVariant(variant)}
            key={variant.id}
            className="w-[100px] h-[100px] cursor-pointer transition-transform hover:scale-110 origin-center relative bg-[#323232] overflow-hidden rounded-md"
          >
            <Image
              fill
              src={`${config.imageBaseUrl}${variant?.images?.[0]}`}
              alt={variant?.code}
              className="p-2 object-contatn object-center"
            />
          </div>
        ))}
      </div>
    );
  }, [product]);

  const renderModelsUsed = () => {
    if (!vehicles?.data?.length) return;

    return (
      <p className="text-white/70">
        <b>Model Used: </b>
        {vehicles?.data?.map((v: any) => v.model).join(", ")}
      </p>
    );
  };

  const renderPrice = () => {
    return (
      <p className="font-semibold text-3xl">
        P{" "}
        {(currentVariant?.price || 0).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-full text-white max-w-[1400px] flex flex-col gap-10">
        <div className="flex gap-10 flex-wrap">
          {renderImagePreview()}
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-2xl">{product.name}</p>
              <p className="text-white/70">{currentVariant?.code}</p>
              {renderModelsUsed()}
              {renderPrice()}
              {renderVariants}

              <div className="flex gap-3 items-center">
                <span className="font-semibold w-[55px] text-right">
                  Colors:
                </span>
                <div className="flex gap-2 flex-wrap">
                  {currentVariant?.productVariantAttributes?.map((_) => (
                    <button
                      key={_.id}
                      onClick={() => {}}
                      // className={`border-[2px] border-[#535353] py-2 px-7 ${classNames({
                      //   "bg-[#535353]": currentVariant?.id === variant.id,
                      // })}`}
                    >
                      {_.value}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-white/70">{currentVariant?.note}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Product Description</p>
          <p className="bg-[#323232] p-5 lg:p-7 rounded-lg min-h-[150px]">
            {product?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartsAndAccessoriesDetailsSection;
