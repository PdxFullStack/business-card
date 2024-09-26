<script lang="ts">
	import type { WithRenderableChildren } from '$lib/types';
	import type { FrameBorderAreasToContent } from './types';

	type ComponentProps = { borderAreasToContent: FrameBorderAreasToContent };
	type Props = ComponentProps & WithRenderableChildren;

	import Border from './Border.svelte';
	import DisplayCase from './DisplayCase.svelte';
	import Grid from './Grid.svelte';

	let { borderAreasToContent, children }: Props = $props();
</script>

<Grid>
	<Border areaToContent={borderAreasToContent} />
	<DisplayCase>
		{@render children()}
	</DisplayCase>
</Grid>
