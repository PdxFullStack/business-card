<script lang="ts">
  import type { ModuleProps } from "./types";
  import Border from "./Border.svelte";
  import DisplayCase from "./DisplayCase.svelte";
  import Grid from "./Grid.svelte";

  let {borderAreaToContent, children}: ModuleProps = $props();
</script>

<Grid>
  <Border areaToContent={borderAreaToContent} />
  <DisplayCase>
    {@render children()}
  </DisplayCase>
</Grid>
