export const formatCompactNumber = (
  number: number,
  maximumFractionDigits: number = 1
): string => {
  const suffixes = ["", "K", "M", "B", "T"];
  let tier = Math.floor(Math.log10(Math.abs(number)) / 3);

  if (tier === 0) return number.toString();

  tier = Math.min(tier, suffixes.length - 1);

  const scaled = number / Math.pow(1000, tier);

  return scaled.toFixed(maximumFractionDigits) + suffixes[tier];
};
