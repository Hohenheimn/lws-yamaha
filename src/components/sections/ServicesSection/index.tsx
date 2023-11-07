import Heading from "@/components/shared/Heading";
import React from "react";

type PropsType = {
  data: Array<{
    category: string;
    id: number;
    services: Array<{
      id: number;
      type: string;
      laborTime: string;
    }>;
  }>;
};
const ServicesSection = (props: PropsType) => {
  const { data } = props;

  return (
    <div className="flex flex-col text-white gap-5">
      <div className="text-center">
        <Heading type="h4">Our Services</Heading>
        <p>Note: Applicable for selected models only.</p>
      </div>
      <div className="flex flex-col items-center gap-5">
        {data.map((_) => (
          <div
            key={_.id}
            className="flex flex-col items-center gap-4 p-6 lg:py-10 lg:px-[100px] border rounded-2xl max-w-6xl w-full"
          >
            <h2 className="text-center text-xl font-semibold">{_.category}</h2>
            <div className="flex flex-col w-full">
              <div className="font-semibold flex py-2">
                <div className="flex-[2] md:flex-[10]">Service Type</div>
                <div className="flex-1 md:flex-[2]">Labor Time</div>
              </div>
              {_.services.map((service) => (
                <div
                  key={service.id}
                  className="border-b-[2px] border-gray-400 py-2 text-gray-400 flex"
                >
                  <div className="flex-[2] md:flex-[10]">{service.type}</div>
                  <div className="flex-1 md:flex-[2]">{service.laborTime}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
