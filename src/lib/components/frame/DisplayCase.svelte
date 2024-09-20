<script lang="ts">
	import type { WithRenderableChildren } from "$lib/types";

  let {children}: WithRenderableChildren = $props();
</script>

<div>{@render children()}</div>

<style>
  div {
    grid-area: display;
    border: 1px solid var(--primary-contrast-color);
  }
</style>