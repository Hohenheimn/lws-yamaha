import FeatureCard from "@/components/motorcycle/FeatureCard";
import ArrowTitle from "@/components/shared/ArrowTitle";
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
    <div className="flex flex-col gap-10">
      <ArrowTitle title="Features" />
      <div className="flex flex-wrap w-full">
        {features
          .slice(0, showAllFeatures ? features.length : 3)
          .map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
      </div>
      <button
        onClick={handleShowAllFeatures}
        className="bg-red p-2 self-center w-full rounded-xl text-white font-semibold max-w-sm"
      >
        See more
      </button>
    </div>
  );
};

export default MotorcycleFeaturesSection;
