import React, { useEffect, useRef, useState } from "react";
import { MdPlayCircleFilled } from "react-icons/md";

import ArrowTitle from "@/components/shared/ArrowTitle";

import SectionContainer from "../SectionContainer";

type PropsType = {
  title: string;
  description: string;
  youtubeUrl: string;
};

const VideoSection = (props: PropsType) => {
  const { title, description, youtubeUrl } = props;
  const [isPlaying, setIsPlaying] = useState<boolean>();
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying === true) video.current?.play();
    if (isPlaying === false) video.current?.pause();
  }, [isPlaying]);

  const handleOnPlay = () => setIsPlaying(true);
  const handleOnPause = () => setIsPlaying(false);

  return (
    <SectionContainer width={"widest"}>
      <div className="flex flex-col gap-10 lg:h-[80vh]">
        <ArrowTitle title={title} description={description} />
        <div className="relative w-full p-10 flex justify-center items-center flex-1 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={props.youtubeUrl}
            title={props.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default VideoSection;
