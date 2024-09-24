<script lang="ts">
	import type { Snippet } from "svelte";
  import Frame from '$lib/components/Frame';
	import { createMaskAndThemeSelectAreas } from "./createMaskAndThemeSelectAreas.svelte";

  let {children}: {children: Snippet} = $props();

  const maskAndThemeSelectAreas = createMaskAndThemeSelectAreas();
</script>

<Frame borderAreasToContent={maskAndThemeSelectAreas}>
  {@render children()}
</Frame>
