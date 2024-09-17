<script lang="ts" context="module">
  import type { Snippet } from 'svelte';
</script>

<script lang="ts">
  export let {}: {children: Snippet} = $props()
</script>

