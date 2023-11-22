import React from "react";

import ImageLinks from "@/components/sections/ImageLinks";

const ButtonCardSection = () => {
  return (
    <ImageLinks
      imageLinks={[
        {
          backgroundImage: "personal-commuter/sniper155/banner.webp",
          name: "Part & Accessories",
          url: "",
        },
        {
          backgroundImage: "personal-commuter/sniper155/banner.webp",
          name: "Service",
          url: "",
        },
      ]}
    />
  );
};

export default ButtonCardSection;
