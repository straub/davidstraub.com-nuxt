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
      <!-- <MySkills /> -->
      <!-- <MyExperience /> -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
  header {
    margin-top: 1.5rem;
  }
</style>
