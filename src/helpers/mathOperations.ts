import { parseToNumber } from "./parseToNumber";

export const sum = (a: string, b: string) =>
  parseToNumber(a) + parseToNumber(b);
export const substract = (a: string, b: string) =>
  parseToNumber(a) - parseToNumber(b);
export const multiply = (a: string, b: string) =>
  parseToNumber(a) * parseToNumber(b);
export const division = (a: string, b: string) =>
  parseToNumber(a) / parseToNumber(b);
