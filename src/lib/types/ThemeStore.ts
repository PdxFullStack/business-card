import type { Theme } from '$lib/types';

export type ThemeStore = {
	theme: Theme;
	select(theme: Theme): void;
};
