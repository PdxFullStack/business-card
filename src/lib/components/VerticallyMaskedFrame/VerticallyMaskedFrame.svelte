<script lang="ts">
	import type { Snippet } from "svelte";
  import Frame from '$lib/components/Frame';
	import { createMasksForVerticalBorderAreas } from "./createMasksForVerticalBorderAreas";

  let {children}: {children: Snippet} = $props();

  const frameAreasObscuredSnippits = createMasksForVerticalBorderAreas();
</script>

<Frame borderAreasToContent={frameAreasObscuredSnippits}>
  {@render children()}
</Frame>
