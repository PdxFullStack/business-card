<script lang="ts">
  import { themeStore } from "$lib/stores/themeStore.svelte";
  import type {WithRenderableChildren} from '$lib/types';

  let {children}: WithRenderableChildren = $props();
</script>

<div id="Root" data-theme={themeStore.get()}>
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

    background-color: var(--primary-color);
    color: var(--primary-contrast-color-accented);
  }
</style>