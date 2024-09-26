export type OptionValue<T> = T & { toString: () => string };
export type OptionDto<T> = {
	label: string;
	value: OptionValue<T>;
};
