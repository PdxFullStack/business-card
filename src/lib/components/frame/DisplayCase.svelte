<script lang="ts">
  import type {Snippet} from 'svelte';

  let {children}: {children: Snippet} = $props();
</script>

<div>{@render children()}</div>

<style>
  div {
    grid-area: display;
    border: 1px solid var(--primary-contrast-color);
  }
</style>