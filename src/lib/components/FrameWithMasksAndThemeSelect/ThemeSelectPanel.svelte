<script lang="ts">
  import ThemeSelector from '$lib/components/ThemeSelector';
</script>

<div class="theme-select-panel">
  <div class="theme-select-panel__selector">
    <ThemeSelector />
  </div>
</div>

<style>
  .theme-select-panel {
    flex: 1;

    position: relative;

    /* justify-content: flex-end; */
  }

  .theme-select-panel__selector {
    position: absolute;
    bottom: 0;
    right: 0;

    translate: calc(100% - var(--spacing-xs)) calc(-1 * var(--spacing-sm));
    transform: rotate(-90deg);
    transform-origin: left bottom;
  }
</style>