export type OptionValue = { toString: () => string };
export type OptionDto = {
  label: string;
  value: OptionValue;
};