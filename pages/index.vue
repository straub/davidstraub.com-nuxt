<template>
  <div itemscope itemtype="http://www.schema.org/Person">
    <link itemprop="url" href="https://davidstraub.com/">
    <header>
      <MyPhoto />
      <MyName />
      <MyTagline />
    </header>
    <main>
      <MyBio />
      <MyConnect />
      <MySkillsSection />
      <MyExperienceTimeline />
    </main>
  </div>
</template>

<script setup>
</script>

<style>
  header {
    margin-top: 1.5rem;
  }
</style>
