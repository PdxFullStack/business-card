
<script lang="ts">
  type Props = {
    emailAddress: string;
  };

  import Link from "./Link.svelte";

  let {emailAddress}: Props = $props();
</script>


<Link
  href={`mailto:${emailAddress}`}
  label='Email'
/>
