<script lang="ts">
  import { themeStore } from "$lib/stores/themeStore.svelte";
	import type { Snippet } from "svelte";

  let {children}: {children: Snippet} = $props();
</script>

<div data-theme={themeStore.get()}>
  {@render children()}
</div>

<style>
  div {
    display: flex;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>