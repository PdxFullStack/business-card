<script lang="ts" generics="T">
	import type { OptionDto, OptionValue } from './types';

	type Props = {
		name: string;
		onSelect: (value: OptionValue<T>) => void;
		options: OptionDto<T>[];
		value: OptionValue<T>;
	};

	import Group from './Group.svelte';
	import Option from './Option.svelte';

	let { name, onSelect, options, value }: Props = $props();
</script>

<Group>
	{#each options as option, i}
		<Option
			checked={value.toString() === option.value.toString()}
			groupName={name}
			id={`${name}-${i}`}
			label={option.label}
			onSelect={() => onSelect(option.value)}
		/>
	{/each}
</Group>
