<script lang="ts">
  import type { ChildSnippetWrapper } from "$lib/types";

  import { themeStore } from "$lib/stores/theme.svelte";

  let {children}: ChildSnippetWrapper = $props();
</script>

<div data-theme={themeStore.get()}>
  {@render children()}
</div>

<style>
  div {
    background-color: green;
  }
</style>