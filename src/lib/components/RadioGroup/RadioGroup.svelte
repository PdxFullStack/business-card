<script lang="ts">
  import type { WithRenderableChildren } from '$lib/types';
  import type { OptionDto, OptionValue } from './types';

  type ComponentProps = {initialValue: OptionValue, options: OptionDto[]};
  type Props = ComponentProps & WithRenderableChildren

  import Group from './Group.svelte';
  import Option from './Option.svelte';
	import StateManager from './StateManager';

  let {initialValue, options}: Props = $props();

  const stateManager = new StateManager({value: initialValue});
</script>

<Group>
  {#each options as {display, value}}
    <Option
      currValue={stateManager.value}
      groupName="grp"
      onSelect={stateManager.onSelect}
      value={value}
    >
      {@render display()}
    </Option>
  {/each}
</Group>