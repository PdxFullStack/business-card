<script lang="ts">
  import type {ChildSnippetWrapper} from '$lib/types/ChildSnippetWrapper';

  const {children}: ChildSnippetWrapper = $props();
</script>

<div class="mask">
  {@render children?.()}
</div>

<style>
  .mask {
    flex: 1;
    align-self: stretch;
    background-color: var(--primary-barkground-color);
    opacity: var(--mask-opacity);
  }
</style>