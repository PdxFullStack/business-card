
<script lang="ts">
	import LinkedInLink from './LinkedInLink.svelte';
	import EmailLink from './EmailLink.svelte';
	import GithubLink from './GithubLink.svelte';
  import LinksContainer from './LinksContainer.svelte';
	import { personalInfoService } from '$lib/services/localJsonPersonalInfoService';
	import { createTabNavFacilitatorFromTabCount } from './createTabNavFacilitatorFromTabCount.svelte';

  const {links} = personalInfoService.get();

  const { registerGroup, registerTab } = createTabNavFacilitatorFromTabCount(2);
</script>


<LinksContainer registerElement={registerGroup}>
  <!-- <EmailLink emailAddress={links.emailAddress} /> -->
  <GithubLink
    registerElement={registerTab}
    subdomain={links.githubSubdomain}
  />
  <LinkedInLink
    registerElement={registerTab}
    subdomain={links.linkedInSubdomain}
  />
</LinksContainer>
