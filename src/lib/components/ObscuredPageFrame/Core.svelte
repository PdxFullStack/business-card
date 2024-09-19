<script lang="ts">
  const areasToContent = new Map<FrameArea, Snippet>();
</script>

<div id="ObsPageFrame__Base" >
  {#each sections as section}
    <div 
      class={`obsPageFrame__${section} obsPageFrame__mask`}
    ></div>
  {/each}

  <div id="ObsPageFrame__Content">
    {@render children()}
  </div>
</div>