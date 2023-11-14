import ArrowTitle from "@/components/shared/ArrowTitle";
import React, { useEffect, useRef, useState } from "react";
import { MdPlayCircleFilled } from "react-icons/md";

type PropsType = {
  videoUrls: Array<string>;
  title: string;
};

const VideoSection = (props: PropsType) => {
  const { title, videoUrls } = props;
  const [isPlaying, setIsPlaying] = useState<boolean>();
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying === true) video.current?.play();
    if (isPlaying === false) video.current?.pause();
  }, [isPlaying]);

  const handleOnPlay = () => setIsPlaying(true);
  const handleOnPause = () => setIsPlaying(false);

  return (
    <div className="flex flex-col gap-5 lg:h-[90vh]">
      <ArrowTitle title={title} />
      <div className="relative w-full flex justify-center items-center flex-1 rounded-lg overflow-hidden">
        <video
          className=" relative w-full h-full object-cover"
          ref={video}
          onClick={handleOnPause}
        >
          {videoUrls.map((videoUrl) => {
            const extension = videoUrl.split(".").pop();

            if (
              !["mp4", "webm", "ogg", "mov", "mkv", "avi"].includes(
                `${extension}`
              )
            )
              return null;

            return (
              <source
                key={videoUrl}
                src={videoUrl}
                type={`video/${extension}`}
              />
            );
          })}
        </video>

        {!isPlaying && (
          <button
            className="absolute text-white cursor-pointer"
            onClick={handleOnPlay}
          >
            <MdPlayCircleFilled size={100} />
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
