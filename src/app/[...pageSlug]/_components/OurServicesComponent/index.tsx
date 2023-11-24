import React, { ComponentProps } from "react";

import ServicesSection from "@/components/sections/ServicesSection";
import services from "@/data/services/services";
import useAPI from "@/hooks/useAPI";

type ServiceAPIType = {
  name: string;
  id: number;
  services: { id: number; name: string; timeToPerform: string }[];
}[];

const OurServicesComponent = () => {
  const { useGet } = useAPI(`/api/service-categories/services`);
  const { data, isLoading }: any = useGet(`our-services`);
  const service: ServiceAPIType = data?.data;
  return (
    <div>
      <ServicesSection
        data={service?.map((item) => {
          return {
            id: item.id,
            category: item.name,
            services: item.services.map((service) => {
              return {
                id: service.id,
                type: service.name,
                laborTime: service.timeToPerform,
              };
            }),
          };
        })}
      />
    </div>
  );
};

export default OurServicesComponent;
