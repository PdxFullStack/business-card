<script lang="ts">
	import { onMount } from 'svelte';
	import type { ElementRegisterer } from './types';

	type Props = ElementRegisterer & {
		href: string;
		label: string;
	};

	let { href, label, registerElement }: Props = $props();

	let anchorRef: HTMLAnchorElement;

	onMount(() => {
		registerElement(anchorRef);
	});
</script>

<li class="link">
	<a class="link__anchor" {href} target="_blank" bind:this={anchorRef}>
		{label}
	</a>
</li>

<style lang="less">
	@import '$lib/mixins/focused.less';

	.link {
		font-size: var(--font-size-lg);
	}

	.link__anchor {
		color: var(--primary-contrast-color);

		&:focus-visible {
			.focused();
		}
	}
</style>
