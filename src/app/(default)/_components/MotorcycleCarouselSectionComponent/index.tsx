import React from "react";

import MotorcycleCarouselSection from "@/components/sections/MotorcycleCarouselSection";
import { motocycleCarousel } from "@/data/motorcycle/motorcycleCarousel";
import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";

type PropsType = {
  vehicleIds?: string;
  title: string;
  description: string;
  image: string;
  url: string;
};

type motorcycleApi = {
  brochure: string;
  categoryId: number;
  description: string;
  desktopImage: string;
  horizontalAlignment: string;
  id: 3;
  mobileImage: string;
  model: string;
  slug: string;
  status: number;
  title: string;
  verticalAlignment: "left";
  vehicleFeatures: vehicleFeatureType[];
};

type vehicleFeatureType = {
  id: number;
  vehicleId: number;
  title: string;
  description: string;
  backgroundImage: string;
};

const MotorcycleCarouselSectionComponent = (props: PropsType) => {
  const { title, description, image, url, vehicleIds } = props;
  const { useGet } = useAPI(`/api/vehicles?vehicleIds=${vehicleIds}`);
  const { data: vehicles, isLoading: vehicleLoading }: any = useGet(
    `motorcycle-carousel-${vehicleIds}`
  );
  const imageBaseUrl = config.imageBaseUrl;
  return (
    <MotorcycleCarouselSection
      title={title}
      description={description}
      motorcycle={vehicles?.data.map((motorcycle: motorcycleApi) => {
        return {
          title: motorcycle?.title,
          imageSrc: motorcycle?.desktopImage?.includes("http")
            ? motorcycle?.desktopImage
            : `${imageBaseUrl}${motorcycle?.desktopImage}`,
          features: motorcycle?.vehicleFeatures.map((item) => item?.title),
          url: "#",
        };
      })}
      desktopBgImage={image}
      url={url}
    />
  );
};

export default MotorcycleCarouselSectionComponent;
