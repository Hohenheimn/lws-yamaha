import FeatureCard from "@/components/motorcycle/FeatureCard";
import ArrowTitle from "@/components/shared/ArrowTitle";
import Button from "@/components/shared/Button";
import React, { ComponentProps } from "react";

type PropsType = {
  features: Array<ComponentProps<typeof FeatureCard> & { id: number }>;
};

const MotorcycleFeaturesSection = (props: PropsType) => {
  const { features } = props;
  const [showAllFeatures, setShowAllFeatures] = React.useState(false);

  const handleShowAllFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  return (
    <div className="flex flex-col gap-5">
      <ArrowTitle title="Features" />
      <div className="flex flex-wrap w-full">
        {features
          .slice(0, showAllFeatures ? features.length : 3)
          .map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
      </div>
      <div className="self-center ">
        <Button
          appearance={"primary"}
          size={"large"}
          onClick={handleShowAllFeatures}
        >
          {showAllFeatures ? "Show less" : "Show more"}
        </Button>
      </div>
    </div>
  );
};

export default MotorcycleFeaturesSection;
