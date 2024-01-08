"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import ImageViewer from "react-simple-image-viewer";
import SectionContainer from "../SectionContainer";
import GalleryItem from "./GalleryItem";

type PropsType = {
  imageTitle: string;
  desktopBgImage: string;
  mobileBgImage?: string;
  description: string;
  gallery: {
    src: string;
    indx: number;
  }[];
};

const LifeWithMotorcycleSection = (props: PropsType) => {
  const { imageTitle, desktopBgImage, mobileBgImage, description, gallery } =
    props;
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <SectionContainer className=" flex items-end flex-col" width="widest">
        <section className="relative min-h-[80vh] flex items-center justify-end w-[95.83%]">
          <aside className=" w-[85%] h-full">
            <ul className=" relative w-full h-full columns-1 md:columns-2 lg:columns-4 gap-5">
              <li className=" absolute top-0 left-0  h-full w-[5rem] z-10 bg-gradient-to-r from-[#131313] via-[#1313136a] to-[#13131300]"></li>
              {gallery?.slice(0, 2).map((gallery, indx) => (
                <GalleryItem
                  key={indx}
                  imageUrl={gallery?.src}
                  onClick={() => {
                    openImageViewer(gallery?.indx);
                  }}
                  className={`${
                    indx % 2 === 0 ? "h-[10rem] md:h-3/5" : "h-[10rem] md:h-2/5"
                  }`}
                />
              ))}
              {gallery?.slice(2, 4).map((gallery, indx) => (
                <GalleryItem
                  key={indx}
                  imageUrl={gallery?.src}
                  onClick={() => {
                    openImageViewer(gallery?.indx);
                  }}
                  className={`${
                    indx % 2 === 0 ? "h-[10rem] md:h-2/5" : "h-[10rem] md:h-3/5"
                  }`}
                />
              ))}
              {gallery?.slice(4, 6).map((gallery, indx) => (
                <GalleryItem
                  key={indx}
                  imageUrl={gallery?.src}
                  onClick={() => {
                    openImageViewer(gallery?.indx);
                  }}
                  className={`${
                    indx % 2 === 0 ? "h-[10rem] md:h-3/5" : "h-[10rem] md:h-2/5"
                  }`}
                />
              ))}
              {gallery?.slice(6, 8).map((gallery, indx) => (
                <GalleryItem
                  key={indx}
                  imageUrl={gallery?.src}
                  onClick={() => {
                    openImageViewer(gallery?.indx);
                  }}
                  className={`${
                    indx % 2 === 0 ? "h-[10rem] md:h-2/5" : "h-[10rem] md:h-3/5"
                  }`}
                />
              ))}
            </ul>
          </aside>
          <aside className=" absolute w-11/12 max-w-[30rem] left-0 top-[50%] translate-y-[-50%] z-10 space-y-10">
            <Image
              src={imageTitle}
              width={400}
              height={300}
              alt="Be One With Speed"
              className="object-contain"
            />
            <p className=" text-xl text-white ">{description}</p>
          </aside>
        </section>
      </SectionContainer>
      {isViewerOpen && (
        <ImageViewer
          src={gallery?.map((gallery) => gallery?.src)}
          currentIndex={currentImage}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
};

export default LifeWithMotorcycleSection;
