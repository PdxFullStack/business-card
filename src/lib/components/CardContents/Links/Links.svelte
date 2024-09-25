
<script lang="ts">
	import LinkedInLink from './LinkedInLink.svelte';
	import EmailLink from './EmailLink.svelte';
	import GithubLink from './GithubLink.svelte';
  import LinksContainer from './LinksContainer.svelte';
	import { personalInfoService } from '$lib/services/localJsonPersonalInfoService';

  const {links} = personalInfoService.get();
</script>


<LinksContainer>
  <!-- <EmailLink emailAddress={links.emailAddress} /> -->
  <GithubLink subdomain={links.githubSubdomain} />
  <LinkedInLink subdomain={links.linkedInSubdomain} />
</LinksContainer>
