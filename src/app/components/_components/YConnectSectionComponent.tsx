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
          image: "/assets/images/yconnect/phone-convinience.webp",
          content: [
            {
              title: "Malfunction Notification",
              description:
                "Be notified of any electrical, malfunction to your motorcycle. Gain access to your diagnostic record and service history which will be sent to your email. (email notification optional)",
            },
            {
              title: "Treatment Recommendations",
              description:
                "Be notified of any electrical, malfunction to your motorcycle. Gain access to your diagnostic record and service history which will be sent to your email. (email notification optional)",
            },
            {
              title: "Parking Location",
              description: `Be a part a bigger ride the Y-Connect app records your motorcycle's last known paired location. This allows you to easily locate where you parked. especially in unfamilliar areas\n\n*If the machine has been moved after turning off the engine, it cannot be tracked via this function. Pairing remains up to 3 meters and if connected to the internet. During 1st time use, location will be recorded after turning off the motorcycle`,
            },
          ],
        },
        {
          tab_name: "Connected",
          image: "/assets/images/yconnect/phone-connected.webp",
          content: [
            {
              title: "Phone, Email, Message Notifications",
              description: `Be notified of any important notifications on your MC dashboard`,
            },
            {
              title: "Ranking, Mileage & Eco Riding Point",
              description:
                "Achieve personal riding goals and be part of a community of riders. You can keep track of your records and share it with Y-Connect riders everywhere.\n\n*Logs of records resets every month.",
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
          ],
        },
      ]}
    />
  );
};

export default YConnectSectionComponent;
