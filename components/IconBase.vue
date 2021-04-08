<template>
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path :d="path" />
  </svg>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  }
}
</script>
