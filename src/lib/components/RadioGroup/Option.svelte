<script lang="ts">
	type ComponentProps = {
		checked: boolean;
		groupName: string;
		id: string;
		label: string;
		onSelect: () => void;
	};
	type Props = ComponentProps;

	let { checked, groupName, id, label, onSelect }: Props = $props();
</script>

<div class="option">
	<input class="option__input" {checked} {id} name={groupName} onclick={onSelect} type="radio" />
	<label for={id}>
		{label}
	</label>
</div>

<style lang="less">
	@import '$lib/mixins/focused.less';

	.option {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);

		&__input {
			height: var(--spacing-md);
			width: var(--spacing-md);
			border: var(--primary-border);
			transition: var(--transition-theme);

			&:checked {
				height: var(--spacing-md);
				width: var(--spacing-md);
				background-color: var(--primary-contrast-color);
			}

			&:focus-visible {
				.focused();
			}
		}
	}
</style>
