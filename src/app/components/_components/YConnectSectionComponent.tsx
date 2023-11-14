import React from "react";

import YConnectSection from "@/components/sections/YConnectSection";

const YConnectSectionComponent = () => {
  return (
    <YConnectSection
      headingText={
        "Y-Connect is Yamahas latest innovation that connects man and machine digitally. This application is a brand exclusive that links your smart phone directly to your Yamaha motorcycle."
      }
      tabs={[
        {
          tab_name: "Stay Updated",
          image: "/assets/images/samples/sample-y-phone.png",
          content: [
            {
              title: "Convenience",
              description:
                "Provides everything you need to maximize your riding experience (RPM, economical driving acceleration, intake manifold temp & radiator water temp and more)",
            },
            {
              title: "Fuel Consumption Tracker",
              description:
                "Track your fuel usage when you ride and plot re-fueling stops for your trips. Previous logs can also be tracked for efficient planning of your next ride.",
            },
          ],
        },
        {
          tab_name: "Convenience",
          image: "/assets/images/samples/sample-y-phone.png",
          content: [
            {
              title: "Stay Updated",
              description:
                "Provides everything you need to maximize your riding experience (RPM, economical driving acceleration, intake manifold temp & radiator water temp and more)",
            },
            {
              title: "Fuel Consumption Tracker",
              description:
                "Track your fuel usage when you ride and plot re-fueling stops for your trips. Previous logs can also be tracked for efficient planning of your next ride.",
            },
          ],
        },
        {
          tab_name: "Connected",
          image: "/assets/images/samples/sample-y-phone.png",
          content: [
            {
              title: "Connected",
              description:
                "Provides everything you need to maximize your riding experience (RPM, economical driving acceleration, intake manifold temp & radiator water temp and more)",
            },
            {
              title: "Fuel Consumption Tracker",
              description:
                "Track your fuel usage when you ride and plot re-fueling stops for your trips. Previous logs can also be tracked for efficient planning of your next ride.",
            },
          ],
        },
        {
          tab_name: "Y-Connect Features",
          image: "/assets/images/samples/sample-y-phone.png",
          content: [
            {
              title: "Convenience",
              description:
                "Provides everything you need to maximize your riding experience (RPM, economical driving acceleration, intake manifold temp & radiator water temp and more)",
            },
            {
              title: "Fuel Consumption Tracker",
              description:
                "Track your fuel usage when you ride and plot re-fueling stops for your trips. Previous logs can also be tracked for efficient planning of your next ride.",
            },
          ],
        },
      ]}
    />
  );
};

export default YConnectSectionComponent;
