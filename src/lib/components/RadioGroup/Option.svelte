<script lang="ts">
  import type {WithRenderableChildren} from '$lib/types';
	import type { OptionValue } from './types';

  type ComponentProps = {
    currValue: OptionValue,
    groupName: string,
    onSelect: (value: OptionValue) => void,
    value: OptionValue,
  };
  type Props = ComponentProps & WithRenderableChildren;

  let {children, currValue, groupName, onSelect, value}: Props = $props();
</script>

<input
  checked={currValue === value}
  name={groupName}
  onclick={() => onSelect(value)}
  type="radio"
  value={value.toString()}
/>
<label for={value.toString()}>
  {@render children()}
</label>