export type SectionTypes = AllType &
  VehicleSectionType &
  HeroSectionType &
  NewsSectionType &
  EmbedSocialSectionType &
  ButtonCardsSectionType &
  TextSectionType &
  WarrantyGuideBookType &
  ServiceDetailSectionType &
  YamahaTechnicalAcademySectionType &
  YamahaLubeCharacteristicsType &
  VideoSectionType &
  WhyChooseTypeSectionType &
  YamahaHistorySection;
type AllType = {
  id?: number;
  sectionType: string;
};

type VehicleSectionType = {
  vehicleIds?: string[];
};

type HeroSectionType = {
  title?: string;
  description?: string;
  scrollDown?: boolean;
  alignContentVertical: "top" | "center" | "bottom";
  alignContentHorizontal: "left" | "center" | "right";
  backgroundImage?: string;
  fullScreen?: boolean;
  image?: string;
  imageContent?: string;
};

type NewsSectionType = {
  newsArticleIds?: number[];
};

type EmbedSocialSectionType = {
  embedSocials?: { name: string; embedSocialId: string }[];
};

type ButtonCardsSectionType = {
  buttonCards?: {
    url: string;
    name: string;
    backgroundImage: string;
  }[];
};

type TextSectionType = {
  title?: string;
  description?: string;
  alignContentHorizontal?: string;
  url?: string;
  urlLabel?: string;
  isUrlDownload?: true;
};

type WarrantyGuideBookType = {
  image: string;
  contents?: {
    url: string;
    title: string;
    urlLabel: string;
    isUrlDownload: true;
  }[];
};

type ServiceDetailSectionType = {
  title: string;
  description: string;
  image: string;
  alignContentHorizontal: string;
  url: string;
  urlLabel: string;
  isUrlDownload: true;
  subTitle: null;
  contents: {
    title: string;
    description: string;
  }[];
};

type YamahaTechnicalAcademySectionType = {
  title: "Two Levels";
  description: "The YTA training program is split in two levels: YTA Bronze and Silver.";
  contents: {
    url: string;
    title: string;
    description: string;
  }[];
};

type YamahaLubeCharacteristicsType = {
  title: string;
  description: string;
  image: string;
  url: string;
  contents: {
    title: string;
    description: string;
  };
};

type VideoSectionType = {
  video: string;
  title: string;
};

type WhyChooseTypeSectionType = {
  title?: string;
  description?: string;
  contents?: {
    image: string;
    title: string;
    description: string;
  }[];
};

type YamahaHistorySection = {
  contents?: {
    url: string;
    image: string;
    title: string;
    description: string;
  }[];
};
