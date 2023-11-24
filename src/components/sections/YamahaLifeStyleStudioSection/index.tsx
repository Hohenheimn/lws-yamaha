import EmbedSocialSection from "@/app/components/_components/EmbedSocialSection";
import Button from "@/components/shared/Button";
import GridEmbedSection from "@/components/shared/EmbedSocials/GridEmbedSection";
import React, { useEffect, useState } from "react";

type EmbedSocialType = {
  embedSocialId: string;
  title: string;
};

type PropsType = Partial<{
  title: string;
  subTitle: string;
  button: {
    onClick(): void;
    text: string;
  };
  embedSocials: Array<EmbedSocialType>;
}>;

const YamahaLifeStyleStudioSection = (props: PropsType) => {
  const [embedSocial, setEmbedSocial] = useState<EmbedSocialType>();

  useEffect(() => {
    setEmbedSocial(props?.embedSocials?.[0]);
  }, [props]);

  return (
    <div
      className="flex flex-col gap-10 bg-[#323232] p-5 md:p-10"
      key={embedSocial?.embedSocialId}
    >
      <div className="flex flex-wrap items-end justify-between border-b gap-5 border-[#f1f1f1] pb-4">
        <div>
          <h2 className="font-bold text-[#f1f1f1] text-3xl">{props?.title}</h2>
          <p className="text-[#f1f1f1]">{props?.subTitle}</p>
        </div>
        <Button
          appearance={"primary"}
          size={"large"}
          onClick={props?.button?.onClick}
        >
          {props?.button?.text || "Button"}
        </Button>
      </div>
      <div className="flex flex-col gap-10 items-center">
        <div className="text-[#f1f1f1] text-xl flex gap-4">
          {props?.embedSocials?.map((_) => (
            <button
              key={_.title}
              onClick={() => setEmbedSocial(_)}
              className={`${
                _.title === embedSocial?.title && "font-bold underline"
              }`}
            >
              {_.title}
            </button>
          ))}
        </div>
        <GridEmbedSection embedId={`${embedSocial?.embedSocialId}`} />
      </div>
    </div>
  );
};

export default YamahaLifeStyleStudioSection;
