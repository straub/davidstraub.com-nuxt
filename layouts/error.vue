<template>
  <main>
    <svg class="icon icon-alert-circle" viewBox="0 0 24 24" aria-hidden="true">
      <path :d="$options.mdiAlertCircle" />
    </svg>
    <div v-if="error.statusCode === 404">
      <h1>Not found <span>:(</span></h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
    </div>
    <h1 v-else>
      An error has occurred
    </h1>
    <nuxt-link to="/">
      Back to the home page
    </nuxt-link>
  </main>
</template>
<script>
import { mdiAlertCircle } from '@mdi/js'

export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },

  mdiAlertCircle
}
</script>

<style scoped>
  main {
    text-align: center
  }
  .icon {
    width: 20%;
    max-width: 180px;
    margin: 0 auto;
    display: block;
  }
</style>
