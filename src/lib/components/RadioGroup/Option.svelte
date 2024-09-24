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

<div class="option">
  <input
    class="option__input"
    checked={checked}
    id={id}
    name={groupName}
    onclick={onSelect}
    type="radio"
  />
  <label for={id}>
    {label}
  </label>
</div>

<style>
  .option {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm)
  }

  .option__input {
    height: var(--spacing-md);
    width: var(--spacing-md);

    border: var(--primary-border);

    transition: var(theme-transition);
  }

  .option__input:checked {
    height: var(--spacing-md);
    width: var(--spacing-md);

    background-color: var(--primary-contrast-color);
  }

  .option__input:focus-visible {
    outline: none;  
    box-shadow:
      inset 0 0 0 1px var(--primary-color),
      inset 0 0 0 2px var(--primary-contrast-color);
  }
</style>