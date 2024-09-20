import type { Theme, ThemeStore } from "$lib/types";
import { themeConfig } from "../../config/theme";

class RuneThemeStore implements ThemeStore {
  private theme = $state(themeConfig.default);

  public get() {
    return this.theme;
  }

  public set(theme: Theme) {
    this.theme = theme;
  }
}

export const themeStore: ThemeStore = new RuneThemeStore();