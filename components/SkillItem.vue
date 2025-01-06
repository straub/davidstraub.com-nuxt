<template>
  <li>
    {{ skill }} -
    <small>{{ detail }}</small>
  </li>
</template>

<script>
export default {
  props: {
    skill: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
  },
};
</script>
