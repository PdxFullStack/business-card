<script lang="ts">
	import type { WithRenderableChildren } from '$lib/types';

  let {children}: WithRenderableChildren = $props();
</script>

<fieldset>
  {@render children()}
</fieldset>

<style>
  fieldset {
    display: flex;
    flex-direction: inherit;

    flex: auto;
  }
</style>