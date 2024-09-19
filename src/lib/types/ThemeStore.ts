import type { Theme } from "$lib/types";

export type ThemeStore = {
  get(): Theme;
  set(theme: Theme): void;
}