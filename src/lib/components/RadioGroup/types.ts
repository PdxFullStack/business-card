import type {Renderable} from '$lib/types';

export type OptionValue = { toString: () => string };
export type OptionDto = {
  display: Renderable;
  value: OptionValue;
};