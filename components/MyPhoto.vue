<template>
  <img
    :srcset="`${gravatarUrl}?s=${size},
              ${gravatarUrl}?s=${size * 1.5} 1.5x,
              ${gravatarUrl}?s=${size * 2} 2x`"
    :src="`${gravatarUrl}?s=${size}`"
    :width="size"
    :height="size"
    itemprop="image"
    alt="Photo of David Straub"
  >
</template>

<script>
export default {
  data: () => ({
    gravatarUrl: 'https://s.gravatar.com/avatar/bebb4160fe6f0fdf2ad371ddf5df9ffa',
    size: 144,
  }),
};
</script>

<style scoped>
  img {
    object-fit: cover;
    border-radius: 50%;
    background: hsl(0, 0%, 95%);
    grid-area: photo;
    width: 90%;
    height: auto;
    box-sizing: border-box; /* does this make any difference? */

    justify-self: center;

    box-shadow:
      0 0 0 3px hsl(204, 33%, 80%),
      0 0 0 6px hsl(204, 66%, 65%),
      0 0 0 9px hsl(204, 100%, 50%);
  }
</style>
