<script lang="ts">
	type Props = ElementRegisterer & {
		emailAddress: string;
	};

	import Link from './Link.svelte';
	import type { ElementRegisterer } from './types';

	let { registerElement, emailAddress }: Props = $props();
</script>

<Link href={`mailto:${emailAddress}`} label="Email" {registerElement} />
