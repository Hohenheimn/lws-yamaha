import { ComponentProps } from "react";

import FeaturedNewsSection from "@/components/sections/FeaturedNewsSection";

export const featuredNews: ComponentProps<typeof FeaturedNewsSection>["news"] =
  [...Array(4)].map((_, index) => ({
    id: index + 1,
    image: "/assets/images/samples/sample-news.jpg",
    title: "The Yamaha Reconditioning Program 2022",
    date: "",
    url: "",
  }));

export const raceYourFlagNews: ComponentProps<
  typeof FeaturedNewsSection
>["news"] = [...Array(4)].map((_, index) => ({
  id: index + 1,
  image: "/assets/images/samples/sample-news.jpg",
  title: "Solid Showing for Yamaha’s Kyle Paz in Round 1 of FIM JRGP",
  date: "",
  url: "",
}));
