<script lang="ts">
	import type { FrameBorderAreasToContent } from './types.ts';

	let { areaToContent }: { areaToContent: FrameBorderAreasToContent } = $props();
</script>

{#each areaToContent as [area, content]}
	<div style="grid-area: {area};">
		{@render content()}
	</div>
{/each}

<style>
	div {
		display: flex;
	}
</style>
