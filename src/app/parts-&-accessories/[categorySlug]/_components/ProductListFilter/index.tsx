"use client";

import ProductFilter from "@/components/partsAndAccessories/ProductFilter";
import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type PropsType = {
  categoryId: number;
  onChangeFilter: (subCategoryIds: Array<number>) => void;
};

const ProductListFilter = (props: PropsType) => {
  const router = useRouter();
  const { useGet } = useAPI(
    `${config.apiNextBaseUrl}/api/categories?type=product&includeSubCategories=true`
  );
  const { data, isError }: any = useGet([
    "sub-categories",
    `${props.categoryId}`,
    "filter",
  ]);

  const [categories, setCategories] = useState<Array<APITProductCategoryType>>(
    []
  );

  useEffect(() => {
    if (data) {
      setCategories(data?.data);
    }
  }, [data]);

  if (isError) return;

  return (
    <div>
      <ProductFilter
        onClickCategory={(catId) => {
          const slug = categories.find(({ id }) => id === catId)?.slug;

          router.push(`/parts-&-accessories/${slug}`);
        }}
        categories={categories.map((category) => ({
          id: category.id,
          name: category.name,
          subCategories: category.subCategories?.map((subCategory) => ({
            id: subCategory.id,
            name: subCategory.name,
          })),
        }))}
        onChangeFilter={props.onChangeFilter}
        activeCategoryId={props.categoryId}
      />
    </div>
  );
};

export default ProductListFilter;
