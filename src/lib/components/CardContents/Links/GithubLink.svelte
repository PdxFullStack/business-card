<script lang="ts">
	import type { ElementRegisterer } from './types';

	type Props = ElementRegisterer & {
		subdomain: string;
	};

	import Link from './Link.svelte';

	const { registerElement, subdomain }: Props = $props();
</script>

<Link href={'https://github.com' + subdomain} label="Github" {registerElement} />
