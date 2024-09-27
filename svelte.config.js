import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: true
	},
	preprocess: [
		vitePreprocess(),
		sveltePreprocess({
			less: true,
			sourceMap: true
		})
	],
	kit: {
		adapter: adapter(),
		outDir: '.kit'
	}
};

export default config;
