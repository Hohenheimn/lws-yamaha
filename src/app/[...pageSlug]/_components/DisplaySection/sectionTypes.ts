export type SectionTypes = All &
  vehicleSectionType &
  heroSectionType &
  newsSectionType &
  embedSocialSectionType &
  buttonCardsSectionType &
  textSection &
  warrantyGuideBook &
  serviceDetailSection &
  yamahaTechnicalAcademySection;

type All = {
  id?: number;
  sectionType: string;
};

type vehicleSectionType = {
  vehicleIds?: string[];
};

type heroSectionType = {
  title?: string;
  description?: string;
  scrollDown?: boolean;
  alignContentVertical: "top" | "center" | "bottom";
  alignContentHorizontal: "left" | "center" | "right";
  backgroundImage?: string;
  fullScreen?: boolean;
  image?: string;
};

type newsSectionType = {
  newsArticleIds?: number[];
};

type embedSocialSectionType = {
  embedSocials?: { name: string; embedSocialId: string }[];
};

type buttonCardsSectionType = {
  buttonCards?: {
    url: string;
    name: string;
    backgroundImage: string;
  }[];
};

type textSection = {
  title?: string;
  description?: string;
  alignContentHorizontal?: string;
  url?: string;
  urlLabel?: string;
  isUrlDownload?: true;
};

type warrantyGuideBook = {
  image: string;
  contents?: {
    url: string;
    title: string;
    urlLabel: string;
    isUrlDownload: true;
  }[];
};

type serviceDetailSection = {
  title: string;
  description: string;
  image: string;
  alignContentHorizontal: string;
  url: string;
  urlLabel: string;
  isUrlDownload: true;
  subTitle: null;
  contents: [];
};

type yamahaTechnicalAcademySection = {
  title: "Two Levels";
  description: "The YTA training program is split in two levels: YTA Bronze and Silver.";
  contents: {
    url: string;
    title: string;
    description: string;
  }[];
};
