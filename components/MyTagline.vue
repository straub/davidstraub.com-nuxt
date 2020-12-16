<template>
  <h2 itemprop="description">
    Leader,&nbsp;Engineer, &amp;&nbsp;Architect
  </h2>
</template>

<style scoped>
  h2 {
    --minFontSize: 1.2rem;
    --maxFontSize: 2rem;
    /* https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/#for-those-who-dont-mind-that-edge-case */
    --scaler: 0.6000rem + 2.6667vw;

    font-size: clamp(var(--minFontSize), var(--scaler), var(--maxFontSize));
    margin-top: 0;

    /* text-align: center; */

    color: #f70;
    grid-area: tagline;
    align-self: start;
  }

  @media (min-width: 640px) {
    h2 {
      white-space: nowrap;
    }
  }
</style>
