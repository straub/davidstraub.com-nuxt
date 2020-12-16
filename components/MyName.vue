<template>
  <h1 itemprop="name">
    David&nbsp;Straub
  </h1>
</template>

<style scoped>
  h1 {
    --minFontSize: 1.5rem;
    --maxFontSize: 3.15rem;
    /* https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/#for-those-who-dont-mind-that-edge-case */
    --scaler: 0.2625rem + 5.5000vw;

    font-size: clamp(var(--minFontSize), var(--scaler), var(--maxFontSize));
    font-weight: lighter;
    margin-bottom: 0;

    /* text-align: center; */

    grid-area: name;
    align-self: end;
  }
</style>
