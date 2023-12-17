import { saveAs } from "file-saver";
import { Metadata } from "next";

export const numberSeparator = (
  currency: string | number,
  decimal?: number
) => {
  return parseFloat(currency?.toString())
    .toFixed(decimal ?? 2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const downloadUrl = (fileUrl: string) => {
  saveAs(fileUrl);
};

export const shareUrl = async (shareData: {
  title: string;
  text: string;
  url: string;
}) => {
  await navigator.share(shareData);
};

export default downloadUrl;

export const createMetadata = (metadata: Metadata): Metadata => {
  let metaTitle = metadata.title;

  if (metaTitle !== "Yamaha Motor Philippines Official Website") {
    metaTitle = `${metaTitle} | Yamaha Motor Philippines Official Website`;
  }

  return {
    ...metadata,
    title: metaTitle,
    openGraph: {
      ...metadata.openGraph,
      title: metaTitle,
      type: "website",
      url: `${metadata.alternates?.canonical}`,
      siteName: metaTitle,
    },
  };
};
