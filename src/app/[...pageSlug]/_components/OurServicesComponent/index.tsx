import React from "react";

import ServicesSection from "@/components/sections/ServicesSection";
import services from "@/data/services/services";
import useAPI from "@/hooks/useAPI";

const OurServicesComponent = () => {
  const { useGet } = useAPI(`/api/service-categories/services`);
  const { data, isLoading }: any = useGet(`our-services`);
  return (
    <div>
      <ServicesSection data={services} />
    </div>
  );
};

export default OurServicesComponent;
