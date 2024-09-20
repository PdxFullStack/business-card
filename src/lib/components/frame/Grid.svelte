<script lang="ts">
  import type {WithRenderableChildren} from '$lib/types';

  let {children}: WithRenderableChildren = $props();
</script>

<div class="frame__grid">
  {@render children()}
</div>

<style>
  .frame__grid {
    display: grid;
    grid-template-columns: minmax(20px, 4vh) 1fr minmax(20px, 4vh);
    grid-template-rows: minmax(20px, 4vh) 1fr minmax(20px, 4vh);
    grid-template-areas: 
      /* Keep this set of areas synced with FrameBorderAreas in types.ts */
      "top top top"
      "left display right"
      "bottom bottom bottom";

    flex: 1;
    align-self: stretch;
  }
</style>