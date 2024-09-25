
<script lang="ts">
  import type {WithRenderableChildren} from '$lib/types';

  let {children}: WithRenderableChildren = $props();
</script>

<ul class="links-container">
  {@render children()}
</ul>

<style>
  .links-container {
    grid-area: links;

    display: flex;
    flex-direction: column;

    align-items: flex-end;
    gap: var(--spacing-sm);
  }
</style>
