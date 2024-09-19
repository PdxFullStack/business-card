<script lang="ts">
  import type { ChildSnippetWrapper } from "$lib/types";
  import Root from '$lib/components/Root';
  import ObscuredPageFrame from '$lib'
  import './base.css';

  const { children }: ChildSnippetWrapper = $props();
</script>


<Root>
  {@render children()}
</Root>