<script lang="ts">
	import type { Theme } from '$lib/types';

	import RadioGroup from '$lib/components/RadioGroup';
	import { themeStore } from '$lib/stores/themeStore.svelte';
	import { createOptions } from './createOptions';

	const options = createOptions();
</script>

<RadioGroup
	name="theme-selector"
	onSelect={(value) => themeStore.select(value as Theme)}
	{options}
	value={themeStore.theme}
/>
