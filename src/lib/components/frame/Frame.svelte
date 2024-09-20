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

<!-- <div class="frame frame__grid">
  {#each areasToSnippet as [area, content] }
    <div class="frame__area" style="grid-area: {area};">
      {@render content()}
    </div>
  {/each}

  <div class="frame__area--center">
    {@render children()}
  </div>
</div> -->

<!-- <style>
  .frame__grid {
    display: grid;
    grid-template-columns: 32px 1fr 32px;
    grid-template-rows: 32px 1fr 32px;
    grid-template-areas: 
      "top top top"
      "left center right"
      "bottom bottom bottom";
  }

  .frame {
    flex: 1;
    align-self: stretch;
  }

  .frame__area {
    display: flex;
  }

  .frame__area--center {
    grid-area: center;

    border: 1px solid black;
  }
</style> -->