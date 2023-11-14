import FeaturedNewsSection from "@/components/sections/FeaturedNewsSection";
import { ComponentProps } from "react";

export const featuredNews: ComponentProps<typeof FeaturedNewsSection>["news"] =
  [...Array(4)].map((_, index) => ({
    id: index + 1,
    image: "/assets/images/samples/sample-news.jpg",
    title: "The Yamaha Reconditioning Program 2022",
    date: new Date(),
  }));

export const raceYourFlagNews: ComponentProps<
  typeof FeaturedNewsSection
>["news"] = [...Array(4)].map((_, index) => ({
  id: index + 1,
  image: "/assets/images/samples/sample-news.jpg",
  title: "Solid Showing for Yamaha’s Kyle Paz in Round 1 of FIM JRGP",
  date: new Date(),
}));
