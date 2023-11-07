import ArrowTitle from "@/components/shared/ArrowTitle";
import React, { useEffect, useRef, useState } from "react";
import { MdPlayCircleFilled } from "react-icons/md";

const VideoSection = () => {
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
      <ArrowTitle title="Experience YAMAHA’s High – End Technology" />
      <div className="relative w-full flex justify-center items-center flex-1 rounded-lg overflow-hidden">
        <video
          className=" relative w-full h-full object-cover"
          ref={video}
          onClick={handleOnPause}
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>

        {isPlaying === false && (
          <button
            className="absolute cursor-pointer text-white"
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
