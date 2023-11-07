export const numberSeparator = (
  currency: string | number,
  decimal?: number
) => {
  return parseFloat(currency?.toString())
    .toFixed(decimal ?? 2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
