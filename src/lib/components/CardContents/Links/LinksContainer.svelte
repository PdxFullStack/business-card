
<script lang="ts">
  import type {WithRenderableChildren} from '$lib/types';
	import { onMount } from 'svelte';
	import type { ElementRegisterer } from './types';

  type Props = WithRenderableChildren & ElementRegisterer;

  let {registerElement, children}: Props = $props();

  let containerRef: HTMLUListElement;

  onMount(() => {
    registerElement(containerRef);
  });
</script>

<ul
  class="links-container"
  bind:this={containerRef}
>
  {@render children()}
</ul>

<style>
  .links-container {
    grid-area: links;

    display: flex;
    flex-direction: column;

    align-items: flex-end;
    gap: var(--spacing-md);
    justify-content: center;

    @media (max-width: 768px) {
      align-items: flex-start;
    }
  }
</style>
