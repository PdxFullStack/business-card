import type { Theme, ThemeStore } from "$lib/types";

class RuneThemeStore {
  private theme = $state<Theme>('light');

  public get() {
    return this.theme;
  }

  public set(theme: Theme) {
    this.theme = theme;
  }
}

export const themeStore: ThemeStore = new RuneThemeStore();