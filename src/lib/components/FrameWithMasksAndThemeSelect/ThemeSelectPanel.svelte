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
		bottom: var(--spacing-md);
		right: var(--spacing-xs);

		translate: 100% 0;
		transform: rotate(-90deg);
		transform-origin: left bottom;

		@media (max-width: 768px) {
			right: var(--spacing-xxs);
		}
	}
</style>
