<script lang="ts">
  import type {WithRenderableChildren} from '$lib/types';
  import { themeStore } from "$lib/stores/themeStore.svelte";

  let {children}: WithRenderableChildren = $props();
</script>

<div
  id="Root"
  data-theme={themeStore.theme}
>
  {@render children()}
</div>

<style>
  #Root {
    display: flex;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    font-family: var(--font-family);

    background-color: var(--primary-color);
    color: var(--primary-contrast-color-accented);

    transition: var(--transition-theme);
  }
</style>