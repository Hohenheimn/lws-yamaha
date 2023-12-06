import React from "react";

export type DetailTab = {
  id: number;
  name: string;
  onClick(): void;
};

type PropsType = {
  tabs: DetailTab[];
};

const DetailTabs = (props: PropsType) => {
  const { tabs } = props;

  return (
    <div className="flex justify-center w-full p-2">
      <div className="flex text-[#f1f1f1] text-lg gap-2 md:gap-9 flex-wrap justify-center">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={tab.onClick}
            className="flex gap-2 md:gap-9"
          >
            <span className="hover:opacity-80">{tab.name}</span>
            {idx < tabs.length - 1 && "|"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DetailTabs;
