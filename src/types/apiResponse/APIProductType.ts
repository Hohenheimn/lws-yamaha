type APIProductType = {
  id: number;
  subCategoryId: number;
  name: string;
  slug: string;
  note: string;
  description: string;
  subCategory?: APIProductSubCategoryType;
};

type APIProductSubCategoryType = {
  id: number;
  name: string;
  slug: string;
};

type APIProductVariantType = {
  id: string;
  productId: string;
  code: string;
  price: number;
  discount: number;
  description: string;
  note: string;
  stock: 0;
  images: Array<string>;
  vehicleIds: Array<number>;
  product?: APIProductType;
};
