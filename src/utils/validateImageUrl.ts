import React from "react";

import config from "./config";

const validateImageUrl = (url?: string) => {
  const imageBaseUrl = config.imageBaseUrl;
  if (url?.includes("http") || url?.includes("/assets/images")) {
    return url;
  } else {
    return `${imageBaseUrl}${url}`;
  }
};

export default validateImageUrl;
