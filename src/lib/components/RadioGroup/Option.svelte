<script lang="ts">
  type ComponentProps = {
    checked: boolean;
    groupName: string;
    id: string;
    label: string;
    onSelect: () => void;
  };
  type Props = ComponentProps;

  let {checked, groupName, id, label, onSelect}: Props = $props();
</script>

<input
  class="radio-group__option"
  checked={checked}
  id={id}
  name={groupName}
  onclick={() => onSelect()}
  type="radio"
/>
<label for={id}>
  {label}
</label>

<style>
  .radio-group__option {
    height: var(--spacing-md);
    width: var(--spacing-md);

    border: var(--primary-border);
  }

  .radio-group__option:checked {
    height: var(--spacing-md);
    width: var(--spacing-md);

    background-color: var(--primary-contrast-color);
  }
</style>