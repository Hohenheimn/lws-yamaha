import React, { ComponentProps } from "react";

import Link from "next/link";

import AccessoryCard from "@/components/shared/AccessoryCard";

import Button from "@/components/shared/Button";

import Heading from "@/components/shared/Heading";

import SectionContainer from "../SectionContainer";

type PropsType = {
  accessories: Array<ComponentProps<typeof AccessoryCard>>;
};

const AccessoriesSection = (props: PropsType) => {
  const { accessories } = props;
  return (
    <SectionContainer
      className=" flex flex-col justify-center items-center space-y-10"
      bgColor="#1f1f1f"
      width="wide"
    >
      <Heading type={"h3"} className=" text-white">
        Accessories
      </Heading>
      <ul className=" flex flex-wrap justify-center gap-10">
        {accessories.map((accessory, indx) => (
          <li key={indx}>
            <AccessoryCard
              accessoryImage={accessory.accessoryImage}
              title={accessory.title}
              url={accessory.url}
            />
          </li>
        ))}
      </ul>
      <Button appearance={"primary"} size={"large"}>
        Other Accessories
      </Button>
    </SectionContainer>
  );
};

export default AccessoriesSection;
