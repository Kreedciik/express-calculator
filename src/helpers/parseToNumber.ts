export const parseToNumber = (str: string | undefined): number => {
  if (str) return +str;
  return 0;
};
