<script lang="ts">
	import type { OptionValue } from "./types";

  type ComponentProps = {
    checked: boolean;
    groupName: string;
    label: string;
    onSelect: (value: OptionValue) => void;
    value: OptionValue;
  };
  type Props = ComponentProps;

  let {checked, groupName, label, onSelect, value}: Props = $props();
</script>

<input
  checked={checked}
  name={groupName}
  onclick={() => onSelect(value)}
  type="radio"
/>
<label for={value.toString()}>
  {label}
</label>

<style>
  input {
    border-radius: 0;
  }
</style>