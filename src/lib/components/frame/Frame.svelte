<script lang="ts">
  const { children, areasToContent } = $props();
</script>

<div id="Frame__Grid">
  {#each areasToContent as [area, content] }
    <div class="frame__area--{area}">
      {@render content()}
    </div>
  {/each}

  <div class="frame__area--center">
    
  </div>
</div>

<style>
  #Frame__Grid {
    --frame-bumper-side: minmax(20px, auto)

    display: grid;
    grid-template-columns: var(--frame-bumper-side) 1fr var(--frame-bumper-side);
    grid-template-rows: var(--frame-bumper-side) 1fr var(--frame-bumper-side);
    grid-template-areas: 
      "top top top"
      "left center right"
      "bottom bottom bottom";
  }
</style>