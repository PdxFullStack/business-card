
<script lang="ts">
	import type { WithRenderableChildren } from "$lib/types";

  let {children}: WithRenderableChildren = $props();
</script>


<div class="layout">
  {@render children()}
</div>


<style>
  .layout {
    display: grid;

    grid-template-columns: var(--spacing-xl) auto auto auto var(--spacing-xl);
    grid-template-rows: var(--spacing-lg) auto;
    grid-template-areas:
      ". . . . ."
      ". about . links .";
  }
</style>
