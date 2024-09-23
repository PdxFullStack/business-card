<script lang="ts" generics="T">
  import type { OptionDto, OptionValue } from './types';

  type Props = {
    onSelect: (value: T) => void,
    options: OptionDto[],
    value: OptionValue,
  };

  import Group from './Group.svelte';
  import Option from './Option.svelte';

  let {onSelect, options, value}: Props = $props();
</script>

<Group>
  {#each options as option}
    <Option
      checked={value.toString() === option.value.toString()}
      groupName="grp"
      label={option.label}
      onSelect={(optionValue) => onSelect(optionValue as T)}
      value={option.value}
    />
  {/each}
</Group>