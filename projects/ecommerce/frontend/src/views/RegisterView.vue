<template>
  <Header></Header>
  <Main>
    <RegisterForm></RegisterForm>
  </Main>
  <Footer></Footer>
</template>

<script setup>
import RegisterForm from "@/components/auth/RegisterForm.vue";
import Header from "@/components/layout/Header.vue";
import Main from "@/components/layout/Main.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<style scoped></style>
