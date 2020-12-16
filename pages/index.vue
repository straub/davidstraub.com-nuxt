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
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
