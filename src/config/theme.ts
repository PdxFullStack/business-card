import type { Theme } from "$lib/types";

type ThemeConfig = {
  default: Theme;
}

export const themeConfig: ThemeConfig = {
  default: 'light',
}