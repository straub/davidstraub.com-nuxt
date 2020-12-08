<template>
  <main>
    <MyName />
    <MyTagline />
    <MyBio />
  </main>
</template>

<script>
import MyName from '@/components/MyName.vue'

export default {
  name: 'HomePage',

  components: {
    MyName
  }
}
</script>
