import React from "react";

import ProductCard, { ProductCardType } from "../ProductCard";

export type ProductCardListType = {
  title: string;
  products: ProductCardType[];
  noWrap?: boolean;
};

type PropsType = ProductCardListType;

const ProductCardList = (props: PropsType) => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-[#f1f1f1] font-semibold">{props.title}</h3>
      <div className={`flex gap-6 ${!props.noWrap && "flex-wrap"}`}>
        {props.products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
        {props.products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;
