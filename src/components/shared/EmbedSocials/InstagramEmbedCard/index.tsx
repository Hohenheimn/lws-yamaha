import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

type PropsType = {
  instagramUrl: string;
};

const IntagramEmbedCard = (props: PropsType) => {
  return (
    <div className="bg-white p-1 rounded-lg h-fit overflow-hidden w-[350px]">
      <InstagramEmbed width="100%" height="100%" url={props.instagramUrl} />
    </div>
  );
};

export default IntagramEmbedCard;
