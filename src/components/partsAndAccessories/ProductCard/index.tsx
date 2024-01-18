"use client";

import Image from "next/image";
import React from "react";

export type ProductCardType = {
  id: number;
  title: string;
  image: string;
  price: number;
  onClick(): void;
};

type PropsType = ProductCardType;

const ProductCard = (props: PropsType) => {
  const renderProductImage = () => {
    return (
      <div
        onClick={props.onClick}
        className="relative aspect-square bg-[#323232] rounded-lg cursor-pointer"
      >
        <Image
          fill
          src={props.image}
          alt={props.title}
          className="p-7 object-contain object-center"
        />
      </div>
    );
  };

  const renderProductName = () => {
    return <p className="text-[#f1f1f1]">{props.title}</p>;
  };

  const renderProductPrice = () => {
    return (
      <p className="font-bold text-[#A3A3A3]">
        {/* &#8369; */}P{" "}
        {props.price.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    );
  };

  const renderProductDetails = () => {
    return (
      <figcaption onClick={props.onClick} className="w-fit cursor-pointer">
        {renderProductName()}
        {renderProductPrice()}
      </figcaption>
    );
  };

  return (
    <figure className="flex flex-col gap-4 w-[120px] sm:w-[200px] md:w-[300px] text-sm flex-0">
      {renderProductImage()}
      {renderProductDetails()}
    </figure>
  );
};

export default ProductCard;
