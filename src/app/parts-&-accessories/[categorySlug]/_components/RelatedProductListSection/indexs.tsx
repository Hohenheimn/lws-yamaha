"use client";

import ProductCardList from "@/components/partsAndAccessories/ProductCardList";
import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type PropsType = {
  productId: number;
};

const RelatedProductListSection = (props: PropsType) => {
  const router = useRouter();
  const { useGet } = useAPI(
    `${config.apiNextBaseUrl}/api/parts-and-accessories/${props.productId}/related?limit=4`
  );
  const { data, isError }: any = useGet([
    "related-products",
    `${props.productId}`,
  ]);
  const [products, setProducts] = useState<Array<APIProductType>>([]);

  useEffect(() => {
    setProducts(data?.data || []);
  }, [data?.data]);

  if (!products.length) return;

  return (
    <ProductCardList
      title={`Related Products`}
      products={products.map((product) => ({
        id: product.id,
        title: product.name,
        image: `${config.imageBaseUrl}${product.productVariants?.[0].images?.[0]}`,
        price: product.productVariants?.[0].price || 0,
        onClick: () =>
          router.push(
            `/parts-&-accessories/${product.subCategory?.Category?.slug}/${product.slug}`
          ),
      }))}
    />
  );
};

export default RelatedProductListSection;
