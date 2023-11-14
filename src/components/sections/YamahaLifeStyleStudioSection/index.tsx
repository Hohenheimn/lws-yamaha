"use client";

import React from "react";

import FacebookEmbedCard from "@/components/shared/EmbedSocials/FacebookEmbedCard";
import InstagramEmbedCard from "@/components/shared/EmbedSocials/InstagramEmbedCard";

const facebookUrls = [
  "https://www.facebook.com/ph.yamaha/posts/pfbid02dqcMenHYcyiLzgyGjASbM8j7zGnMRbuprKjenHKESmFQT2gf3GstmeoxcyfcqWcml",
  "https://www.facebook.com/ph.yamaha/posts/pfbid02hvhuA1TMx7STLssDtooe1hD4NG19unQh8ukGPFvDAGtSFTZjxqkr8qyh74BTtAG1l",
  "https://www.facebook.com/ph.yamaha/videos/1034674134348030",
];
const instagramUrls = [
  "https://www.instagram.com/reel/Cy0YoIhShcj",
  "https://www.instagram.com/p/Cv_vvsXSsWJ/",
  "https://www.instagram.com/p/Cv_vs1QyKAi/",
];

const YamahaLifeStyleStudioSection = () => {
  const [activeEmbedId, setActiveEmbedId] = React.useState(1);

  const renderInstagramEmbedCardList = () => {
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {instagramUrls.map((instagramUrl, index) => (
          <InstagramEmbedCard key={index} instagramUrl={instagramUrl} />
        ))}
      </div>
    );
  };

  const renderFacebookEmbedCardList = () => {
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {facebookUrls.map((facebookUrl, index) => (
          <FacebookEmbedCard key={index} facebookUrl={facebookUrl} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-10 bg-[#323232] p-5 md:p-10">
      <div className="flex items-end justify-between border-b border-[#f1f1f1] pb-4">
        <div>
          <h2 className="font-bold text-[#f1f1f1] text-3xl">
            Yamaha Lifestyle Studio
          </h2>
          <p className="text-[#f1f1f1]">
            Lorem ipsum dolor sit amet consectetur. Vel nisl tellus nec diam.
          </p>
        </div>
        <button className="text-[#f1f1f1] text-lg bg-[#D52B1E] py-2 font-medium px-5 rounded-lg">
          YamahaLifestyle Studio
        </button>
      </div>
      <div className="flex flex-col gap-10 items-center">
        <div className="text-[#f1f1f1] text-xl flex gap-4">
          <button
            onClick={() => setActiveEmbedId(1)}
            className={`${activeEmbedId === 1 && "font-bold underline"}`}
          >
            Instagram
          </button>
          <button
            onClick={() => setActiveEmbedId(2)}
            className={`${activeEmbedId === 2 && "font-bold underline"}`}
          >
            Facebook
          </button>
        </div>
        {activeEmbedId === 1
          ? renderInstagramEmbedCardList()
          : renderFacebookEmbedCardList()}
      </div>
    </div>
  );
};

export default YamahaLifeStyleStudioSection;
