
<script lang="ts">
  type Props = {
    subdomain: string;
  };

  import Link from "./Link.svelte";

  const {subdomain}: Props = $props();
</script>


<Link
  href={'https://linkedin.com' + subdomain}
  label='LinkedIn'
/>
