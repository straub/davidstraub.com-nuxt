<template>
  <section>
    <a href="http://www.linkedin.com/in/davidstraub" rel="me external" aria-label="LinkedIn">
      <svg class="icon icon-linkedin" viewBox="0 0 24 24" aria-hidden="true">
        <path :d="$options.mdiLinkedin" />
      </svg>
    </a>
    <a href="https://github.com/straub" rel="me external" aria-label="GitHub">
      <svg class="icon icon-github" viewBox="0 0 24 24" aria-hidden="true">
        <path :d="$options.mdiGithub" />
      </svg>
    </a>
  </section>
</template>

<script>
import { mdiLinkedin, mdiGithub } from '@mdi/js'
export default {
  mdiLinkedin,
  mdiGithub
}
</script>

<style scoped>
  section {
    text-align: center;
  }

  .icon {
    height: 3rem;
  }
</style>
