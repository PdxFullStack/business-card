<script lang="ts">
  import { personalInfoService } from "$lib/services/localJsonPersonalInfoService";

  const {name, slogan, title} = personalInfoService.get();
</script>

<div class="about">
  <h1 class="about__header">
    {name}
  </h1>
  <h2 class="about__subheader">
    {title}
  </h2>
  <h3 class="about__description">
    {slogan}
  </h3>
</div>

<style>
  .about {
    grid-area: about;

    display: flex;
    flex-direction: column;
  }

  .about__header {
    font-size: var(--font-size-xxxl);
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: var(--font-size-xxl);
    }
  }

  .about__subheader {
    font-size: var(--font-size-xl);
    text-transform: capitalize;

    margin-top: var(--spacing-sm);

    @media (max-width: 768px) {
      font-size: var(--font-size-lg);
    }
  }

  .about__description {
    font-size: var(--font-size-lg);
    text-transform: lowercase ;

    margin-top: var(--spacing-md);

    @media (max-width: 768px) {
      font-size: var(--font-size-lg);
    }
  }
</style>
