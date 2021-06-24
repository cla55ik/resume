<template>
  
  <Head />
  <Resume/>
  <MyWay/>
  <Projects/>
  <Footer/>
</template>

<script>


import Head from '@/components/Head.vue'
import Resume from '@/components/Resume.vue'
import Projects from '@/components/Projects.vue'
import Footer from '@/components/Footer.vue'
import MyWay from '@/components/MyWay.vue'



export default {
  name: 'App',
  components: {
    Head, Resume,Projects,Footer,MyWay,
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
