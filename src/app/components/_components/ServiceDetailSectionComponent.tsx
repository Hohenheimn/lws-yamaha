import React from "react";
import Image from "next/image";

import ServiceDetailSection from "@/components/sections/ServiceDetailSection";

const ServiceDetailSectionComponent = () => {
  return (
    <ServiceDetailSection
      image={"/assets/images/samples/sample-service-2.png"}
      imagePosition={"left"}
      title="Choose only Original"
      content={
        <aside className=" space-y-5">
          <p>
            The one and only choice for maintaining the performance of Yamaha
            products. Genuine Yamaha parts must meet strict standards in all
            processes, from design to quality testing and manufacturing. They
            are the one and only choice for reaching and keeping 100%
            performance of Yamaha products.
          </p>
          <ul className=" flex gap-5 flex-wrap justify-center">
            <li className=" flex flex-col items-center justify-center">
              <aside className=" w-20 aspect-square relative">
                <Image
                  src={"/assets/images/samples/reliability.png"}
                  alt="icon"
                  fill
                  sizes="(max-width: 768px) 5rem, (max-width: 1200px) 5rem, 5rem"
                  className=" object-contain"
                />
              </aside>
              High Reliability
            </li>
            <li className=" flex flex-col items-center justify-center">
              <aside className=" w-20 aspect-square relative">
                <Image
                  src={"/assets/images/samples/optimized.png"}
                  alt="icon"
                  fill
                  sizes="(max-width: 768px) 5rem, (max-width: 1200px) 5rem, 5rem"
                  className=" object-contain"
                />
              </aside>
              Optimized Performance
            </li>
            <li className=" flex flex-col items-center justify-center">
              <aside className=" w-20 aspect-square relative">
                <Image
                  src={"/assets/images/samples/quality.png"}
                  alt="icon"
                  fill
                  sizes="(max-width: 768px) 5rem, (max-width: 1200px) 5rem, 5rem"
                  className=" object-contain"
                />
              </aside>
              Worldwide High Quality
            </li>
          </ul>
          <p>
            Only genuine Yamaha parts can bring out 100% performance in Yamaha
            products.
          </p>
        </aside>
      }
      url={"#"}
      urlTitle={"See Products"}
    />
  );
};

export default ServiceDetailSectionComponent;
