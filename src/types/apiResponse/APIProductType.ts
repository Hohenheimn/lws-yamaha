type APIProductType = {
  id: number;
  subCategoryId: number;
  name: string;
  slug: string;
  note: string;
  description: string;
  productVariants?: Array<APIProductVariantType>;
  subCategory?: APIProductSubCategoryType;
};

type APITProductCategoryType = {
  id: number;
  name: string;
  slug: string;
  type: string;
  description: string;
  image: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  metaCanonical: string;
  metaImage: string;
  subCategories?: Array<APIProductSubCategoryType>;
};

type APIProductSubCategoryType = {
  id: number;
  name: string;
  tableType: string;
  slug: string;
  products?: Array<APIProductType>;
  Category: APITProductCategoryType;
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
  productVariantAttributes?: Array<APIProductVariantAttribute>;
};

type APIProductVariantAttribute = {
  attributeId: number;
  id: number;
  productVariantId: number;
  value: string;
  attribute: {
    description: string; //Description of the attribute e.g. name: UOM, description: Unit of Measurement
    id: number;
    name: string;
  };
};
