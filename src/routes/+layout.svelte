<script lang="ts">
  import { VerticallyMaskedFrame, Root }  from '$lib'
  import '../base.css';

  const { children } = $props();
</script>


<Root>
  <VerticallyMaskedFrame>
    {@render children()}
  </VerticallyMaskedFrame>
</Root>