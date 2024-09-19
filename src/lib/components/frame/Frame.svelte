<script lang="ts">
	import type { Snippet } from "svelte";
  import type { FrameAreasToSnippet } from "./types";

  type PropsType = {
    areasToSnippet: FrameAreasToSnippet,
    children: Snippet,
  }

  let {areasToSnippet, children}: PropsType = $props();
</script>

<div class="frame frame__grid">
  {#each areasToSnippet as [area, content] }
    <div class="frame__area" style="grid-area: {area};">
      {@render content()}
    </div>
  {/each}

  <div class="frame__area--center">
    {@render children()}
  </div>
</div>

<style>
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
</style>