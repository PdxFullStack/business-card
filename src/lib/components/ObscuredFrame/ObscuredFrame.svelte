<script lang="ts">
	import type { Snippet } from "svelte";
  import Frame from '$lib/components/Frame';
	import { createObscuredSnippetsForFrameAreas } from "./createObscuredSnippetsForFrameAreas";

  let {children}: {children: Snippet} = $props();

  const frameAreasObscuredSnippits = createObscuredSnippetsForFrameAreas();
</script>

<Frame areasToSnippet={frameAreasObscuredSnippits}>
  {@render children()}
</Frame>
