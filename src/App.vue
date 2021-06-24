<template>
  
  <Head />
  <Resume/>
  <Projects/>
  <Footer/>
</template>

<script>


import Head from '@/components/Head.vue'
import Resume from '@/components/Resume.vue'
import Projects from '@/components/Projects.vue'
import Footer from '@/components/Footer.vue'



export default {
  name: 'App',
  components: {
    Head, Resume,Projects,Footer
  },
  
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
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
