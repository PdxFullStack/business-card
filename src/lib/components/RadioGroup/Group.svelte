<script lang="ts">
	import type { WithRenderableChildren } from '$lib/types';

	let { children }: WithRenderableChildren = $props();
</script>

<fieldset>
	{@render children()}
</fieldset>

<style>
	fieldset {
		flex: auto;

		display: flex;
		flex-direction: inherit;
		align-items: center;
		gap: var(--spacing-md);
	}
</style>
