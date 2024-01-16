"use client";

import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";
import React, { useEffect, useMemo, useState } from "react";
import ProductListFilter from "../ProductListFilter";
import ProductCardList from "@/components/partsAndAccessories/ProductCardList";
import { useRouter } from "next/navigation";

type PropsType = {
  categoryId: number;
};

const ProductListSection = (props: PropsType) => {
  const router = useRouter();
  const { useGet } = useAPI(
    `${config.apiNextBaseUrl}/api/sub-categories?categoryId=${props.categoryId}&include=products&tableType=product`
  );
  const { data, isError }: any = useGet([
    "sub-categories",
    "products",
    `${props.categoryId}`,
  ]);

  const [subCategories, setSubCategories] = useState<
    Array<APIProductSubCategoryType>
  >([]);
  const [subCategoryIds, setCategoryIds] = useState<Array<number>>([]);

  useEffect(() => {
    if (data) {
      setSubCategories(data?.data);
    }
  }, [data]);

  const filteredCategories = useMemo(() => {
    if (!subCategoryIds.length) return subCategories;

    return subCategories.filter((category) =>
      subCategoryIds.includes(category.id)
    );
  }, [subCategories, subCategoryIds]);

  console.log(filteredCategories);

  if (isError) return;

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-5">
      <div className="shrink-0 w-fit">
        <ProductListFilter
          onChangeFilter={setCategoryIds}
          categoryId={props.categoryId}
        />
      </div>
      <div className="flex flex-col gap-10">
        {filteredCategories.map((subCategory) => {
          return (
            <ProductCardList
              key={subCategory.id}
              title={subCategory.name}
              products={(subCategory.products || []).map((product) => ({
                title: product.name,
                id: product.id,
                price: product.productVariants?.[0]?.price || 0,
                image: `${config.imageBaseUrl}${product?.productVariants?.[0]?.images[0]}`,
                onClick: () =>
                  router.push(
                    `/parts-&-accessories/${subCategory.Category.slug}/${product.slug}`
                  ),
              }))}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListSection;
