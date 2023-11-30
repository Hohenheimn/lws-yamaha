"use client";

import React from "react";

import SectionContainer from "@/components/sections/SectionContainer";
import FacebookEmbedCard from "@/components/shared/EmbedSocials/FacebookEmbedCard";
import InstagramEmbedCard from "@/components/shared/EmbedSocials/InstagramEmbedCard";

// import InstagramEmbedCard from "@/components/shared/EmbedSocials/InstagramEmbedCard";

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

const EmbedSocialSection = () => {
  const [activeEmbedId, setActiveEmbedId] = React.useState(1);

  const renderInstagramEmbedCardList = () => {
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {instagramUrls.map((instagramUrl, index) => (
          <InstagramEmbedCard key={index + 1} instagramUrl={instagramUrl} />
        ))}
      </div>
    );
  };

  const renderFacebookEmbedCardList = () => {
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {facebookUrls.map((facebookUrl, index) => (
          <FacebookEmbedCard key={index + 1} facebookUrl={facebookUrl} />
        ))}
      </div>
    );
  };

  return (
    <SectionContainer width={"wide"}>
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
    </SectionContainer>
  );
};

export default EmbedSocialSection;
