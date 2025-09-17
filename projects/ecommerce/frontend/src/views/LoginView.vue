<template>
  <Header></Header>
  <Main>
    <LoginForm></LoginForm>
  </Main>
  <Footer></Footer>
</template>

<script setup>
import LoginForm from "@/components/auth/LoginForm.vue";
import Header from "@/components/layout/Header.vue";
import Main from "@/components/layout/Main.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<style scoped></style>
