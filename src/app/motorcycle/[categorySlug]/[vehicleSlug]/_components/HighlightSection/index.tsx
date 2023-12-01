import React from "react";

import LifeWithMotorcycleSection from "@/components/sections/LifeWithMotorcyleSection";
import config from "@/utils/config";

type PropsType = {
  highlight: APIVechicleHightlightType;
  vehicleGallery: {
    image: string;
  }[];
};

const HighlightSection = (props: PropsType) => {
  const { highlight, vehicleGallery } = props;
  const withBaseUrl = (url: string) => {
    if (/^http+/.test(url)) return url;

    return `${config.imageBaseUrl}${url}`;
  };

  return (
    <LifeWithMotorcycleSection
      imageTitle={withBaseUrl(highlight.image)}
      desktopBgImage={withBaseUrl(highlight.backgroundImage)}
      mobileBgImage={withBaseUrl(highlight.backgroundImage)}
      description={highlight.description}
      gallery={vehicleGallery?.map((item, indx) => {
        return {
          src: withBaseUrl(item.image),
          indx: indx,
        };
      })}
    />
  );
};

export default HighlightSection;
