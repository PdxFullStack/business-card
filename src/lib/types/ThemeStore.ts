import { Theme } from "./Theme"

export type ThemeStore = {
  get(): Theme;
  set(theme: Theme): void;
}