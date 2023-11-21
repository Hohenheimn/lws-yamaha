import React from "react";

import ServicesSection from "@/components/sections/ServicesSection";
import services from "@/data/services/services";

const ServiceSlugPage = () => {
  return (
    <div>
      <ServicesSection data={services} />
    </div>
  );
};

export default ServiceSlugPage;
