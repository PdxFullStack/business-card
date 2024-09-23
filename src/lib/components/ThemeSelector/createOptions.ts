import type { Theme } from "$lib/types";

type Option = {
  label: string;
  value: Theme
}

export function createOptions(): Option[] {
  return [{
    label: 'LIGHT',
    value: 'light',
  }, {
    label: 'DARK',
    value: 'dark',
  }];
}