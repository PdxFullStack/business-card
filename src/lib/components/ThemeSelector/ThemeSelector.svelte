<script lang="ts">
  import RadioGroup from "$lib/components/RadioGroup";
  import { themeStore } from "$lib/stores/themeStore.svelte";
  import { createOptions } from "./createOptions";
	import Rotator from "./Rotator.svelte";

  const options = createOptions();
</script>

<Rotator>
  <RadioGroup
    name="theme-selector"
    onSelect={themeStore.select}
    options={options}
    value={themeStore.theme}
  />
</Rotator>
