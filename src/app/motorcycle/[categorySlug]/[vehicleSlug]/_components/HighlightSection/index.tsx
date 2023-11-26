import LifeWithMotorcycleSection from "@/components/sections/LifeWithMotorcyleSection";
import config from "@/utils/config";
import React from "react";

type PropsType = APIVechicleHightlightType;

const HighlightSection = (props: PropsType) => {
  const withBaseUrl = (url: string) => {
    if (/^http+/.test(url)) return url;

    return `${config.imageBaseUrl}${url}`;
  };

  return (
    <LifeWithMotorcycleSection
      imageTitle={withBaseUrl(props.image)}
      desktopBgImage={withBaseUrl(props.backgroundImage)}
      mobileBgImage={withBaseUrl(props.backgroundImage)}
      description={props.description}
    />
  );
};

export default HighlightSection;
