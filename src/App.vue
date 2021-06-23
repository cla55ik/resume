<template>
  
  <Head />
  <Resume/>
</template>

<script>
import Head from '@/components/Head.vue'
import Resume from '@/components/Resume.vue'

export default {
  name: 'App',
  components: {
    Head, Resume
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

body{
  margin: 0px 15px;
}
</style>
