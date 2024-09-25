
<script lang="ts">
  type Props = {
    href: string;
    label: string;
  };

  let {href, label}: Props = $props();
</script>


<li>
  <a
    {href}
    target="_blank"
  >
    {label}
  </a>
</li>


<style>
  .link {

  }
</style>
