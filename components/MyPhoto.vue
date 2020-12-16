<template>
  <img
    src="https://s.gravatar.com/avatar/bebb4160fe6f0fdf2ad371ddf5df9ffa?s=250"
    width="250"
    height="250"
    itemprop="image"
    alt="Photo of David Straub"
  >
</template>

<style scoped>
  img {
    object-fit: cover;
    border-radius: 50%;
    background: hsl(0, 0%, 95%);
    grid-area: photo;
    width: 90%;
    height: auto;

    justify-self: center;

    box-shadow:
      0 0 0 3px hsl(204, 33%, 80%),
      0 0 0 6px hsl(204, 66%, 65%),
      0 0 0 9px hsl(204, 100%, 50%);
  }
</style>
