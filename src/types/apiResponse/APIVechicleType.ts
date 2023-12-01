type APIVechicleType = {
  id: number;
  categoryId: number;
  subCategoryId: number;
  model: string;
  title: string;
  description: string;
  horizontalAlignment: "left" | "center" | "right";
  verticalAlignment: "top" | "center" | "bottom";
  slug: string;
  desktopImage: string;
  mobileImage: string;
  brochure: string;
  metaCanonical: string;
  metaDescription: string;
  metaKeywords: string;
  metaTitle: string;
  metaImage: string;
  status: 1 | 0;
  highlight: APIVechicleHightlightType;
  vehicleGallery: {
    image: string;
  }[];
};

type APIVechicleHightlightType = {
  image: string;
  description: string;
  backgroundImage: string;
};

type APIVechicleVariantType = {
  id: number;
  vehicleId: number;
  name: string;
  image: string;
  versionName: string;
  logo: string;
  price: number;
  status: 1 | 0;
  title: string;
  description: string;
  backgroundImage: string;
  vehicleAttributes: [
    {
      value: string;
      vehicleAttribute: {
        name: "Color";
      };
    }
  ];
};

type APIVehicleFeatureType = {
  id: number;
  vehicleId: number;
  order: number;
  title: string;
  description: string;
  backgroundImage: string;
};

type APIVechicleSpecificationType = {
  id: number;
  vehicleId: number;
  name: "ENGINE";
  order: number;
  vehicleSpecificationItems: Array<APIVechicleSpecificationItemType>;
};

type APIVechicleSpecificationItemType = {
  id: number;
  vehicleId: number;
  vehicleSpecificationId: number;
  key: string;
  value: string;
};
