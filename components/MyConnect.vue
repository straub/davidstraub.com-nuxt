<template>
  <section>
    <a href="http://www.linkedin.com/in/davidstraub" rel="me external" aria-label="LinkedIn">
      <IconBase :path="$options.mdiLinkedin" />
    </a>
    <a href="https://github.com/straub" rel="me external" aria-label="GitHub">
      <IconBase :path="$options.mdiGithub" />
    </a>
    <a href="https://hachyderm.io/@straub" rel="me external" aria-label="Mastodon">
      <IconBase :path="$options.mdiMastodon" />
    </a>
  </section>
</template>

<script>
import { mdiLinkedin, mdiGithub, mdiMastodon } from '@mdi/js';
export default {
  mdiLinkedin,
  mdiGithub,
  mdiMastodon,
};
</script>

<style scoped>
  section {
    text-align: center;
  }

  .icon {
    height: 3rem;
  }
</style>
