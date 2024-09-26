import type { Theme, ThemeStore } from '$lib/types';
import { themeConfig } from '../../config/theme';

function createRuneThemeStore(): ThemeStore {
	let theme = $state(themeConfig.default);

	return {
		get theme() {
			return theme;
		},
		select(selectedTheme: Theme) {
			theme = selectedTheme;
		}
	};
}

export const themeStore: ThemeStore = createRuneThemeStore();
