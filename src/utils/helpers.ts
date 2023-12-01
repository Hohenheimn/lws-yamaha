import { saveAs } from "file-saver";

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
