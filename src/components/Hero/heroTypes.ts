export type heroTypes = {
  imageSrc: string;
  title: React.ReactNode;
  description: string;
  textPosition: "center" | "bottom-left" | "bottom-right" | "bottom-center";
  height: "medium" | "large";
  scrollTo?: string;
};
