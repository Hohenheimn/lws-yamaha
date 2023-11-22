import React from "react";

import MotorcycleCarouselSection from "@/components/sections/MotorcycleCarouselSection";
import { motocycleCarousel } from "@/data/motorcycle/motorcycleCarousel";
import useAPI from "@/hooks/useAPI";

type PropsType = {
  vehicleIds: string;
  title: string;
  description: string;
  image: string;
  url: string;
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
      motorcycle={motocycleCarousel}
      desktopBgImage={image}
      url={url}
    />
  );
};

export default MotorcycleCarouselSectionComponent;
