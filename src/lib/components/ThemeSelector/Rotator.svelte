<script lang="ts">
  import type {WithRenderableChildren} from '$lib/types';

  let {children}: WithRenderableChildren = $props();
</script>

<div class="theme-selector__rotator">
  {@render children()}
</div>

<style>
  .theme-selector__rotator {
    transform: rotate(90deg);
  }
</style>