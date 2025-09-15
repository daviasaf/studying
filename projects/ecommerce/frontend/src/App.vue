<!-- 
 
 ! Refazer a entrada de inputs de uma maneira mais reutilizável

-->

<template>
  <HeaderNoInformation></HeaderNoInformation>
    <router-link to="/login"></router-link>
    <router-link to="/register"></router-link>
  <main>
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<script>
import Footer from './components/Footer.vue';
import HeaderNoInformation from './components/HeaderNoInformation.vue';

export default {
  components:{
    HeaderNoInformation,Footer
  }
};
</script>

<style scoped>

</style>
