<script lang="ts">
  import { FrameWithMasksAndThemeSelect, Root }  from '$lib'
  import '../base.css';

  const { children } = $props();
</script>


<Root>
  <FrameWithMasksAndThemeSelect>
    {@render children()}
  </FrameWithMasksAndThemeSelect>
</Root>