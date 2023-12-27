import React, { useEffect, useRef, useState } from "react";
import ArrowTitle from "@/components/shared/ArrowTitle";
import SectionContainer from "../SectionContainer";
import Image from "next/image";
import { HiMiniPlay } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";
import config from "@/utils/config";

type PropsType = {
  title: string;
  description: string;
  youtubeUrl: string;
  imagePreview: string;
};

const VideoSection = (props: PropsType) => {
  const { title, description, youtubeUrl, imagePreview } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SectionContainer width={"widest"}>
        <div className="flex flex-col gap-5 w-full">
          <ArrowTitle title={title} description={description} />
          <div className="w-full p-5   md:p-10">
            <div className="relative aspect-video w-full bg-white/10 flex rounded-lg overflow-hidden justify-center items-center">
              {!imagePreview ? (
                <p className="text-white/30">{"Can't play the video"}</p>
              ) : (
                <>
                  <Image
                    src={
                      /^http+/.test(imagePreview)
                        ? imagePreview
                        : `${config.imageBaseUrl}${imagePreview}`
                    }
                    fill
                    alt={title}
                    className="object-cover"
                  />
                  <button
                    className="absolute p-5 bg-black/70 rounded-full"
                    onClick={() => setShowModal(true)}
                  >
                    <HiMiniPlay size={50} color="white" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>
      {showModal && (
        <div className="fixed flex flex-col justify-center gap-5 p-10 z-50 w-screen h-screen bg-black/70 backdrop-blur left-0 top-0">
          <button
            className="p-2 bg-white/10 hover:bg-white/50 transition-colors rounded-full self-end"
            onClick={() => setShowModal(false)}
          >
            <MdOutlineClose size={20} color="white" />
          </button>
          <iframe
            className="w-full lg:max-w-[90%] self-center aspect-video"
            src={youtubeUrl}
            title={props.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </>
  );
};

export default VideoSection;
