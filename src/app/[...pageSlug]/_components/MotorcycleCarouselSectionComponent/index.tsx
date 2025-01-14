import React from "react";

import MotorcycleCarouselSection from "@/components/sections/MotorcycleCarouselSection";
import { motocycleCarousel } from "@/data/motorcycle/motorcycleCarousel";
import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";
import validateImageUrl from "@/utils/validateImageUrl";

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
  vehicleVariants: {
    image: string;
  }[];
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
  return (
    <MotorcycleCarouselSection
      title={title}
      description={description}
      motorcycle={vehicles?.data.map((motorcycle: motorcycleApi) => {
        return {
          title: motorcycle?.title,
          imageSrc: validateImageUrl(motorcycle?.vehicleVariants[0]?.image),
          features: motorcycle?.vehicleFeatures.map((item) => item?.title),
          url: `${url}/${motorcycle?.slug}`,
        };
      })}
      desktopBgImage={image}
      url={url}
    />
  );
};

export default MotorcycleCarouselSectionComponent;
