<script lang="ts">
  import { ObscuredFrame, Root }  from '$lib'
  import './base.css';

  const { children } = $props();
</script>


<Root>
  <ObscuredFrame>
    {@render children()}
  </ObscuredFrame>
</Root>