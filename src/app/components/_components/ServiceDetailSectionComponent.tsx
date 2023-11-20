import React from "react";
import Image from "next/image";

import ServiceDetailSection from "@/components/sections/ServiceDetailSection";

const ServiceDetailSectionComponent = () => {
  return (
    <ServiceDetailSection
      image={"/assets/images/samples/sample-service-2.png"}
      imagePosition={"left"}
      title="Choose only Original"
      content={[
        {
          type: "text",
          value:
            "Lorem ipsum dolor sit amet consectetur. Sem eget in congue nisi sed lacinia viverra urna urna. Nec venenatis turpis massa vulputate egestas ultrices proin ac. Tempor gravida mattis nec tellus id sit mauris. Sit gravida massa et nisl habitant. Egestas aliquam diam mi faucibus maecenas volutpat. Velit tortor risus turpis sed pharetra aliquam morbi morbi. Tortor est varius diam tellus adipiscing.",
        },
        {
          type: "icons",
          value: [
            {
              icon: "/assets/images/samples/reliability.png",
              title: "High Reliability",
            },
            {
              icon: "/assets/images/samples/optimized.png",
              title: "Optimized Performance",
            },
            {
              icon: "/assets/images/samples/quality.png",
              title: "Worldwide High Quality",
            },
          ],
        },
        {
          type: "text",
          value:
            " Only genuine Yamaha parts can bring out 100% performance in Yamaha products.",
        },
      ]}
      url={"#"}
      urlTitle={"See Products"}
    />
  );
};

export default ServiceDetailSectionComponent;
