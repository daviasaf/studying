<template>
  <form>
    <h1>Login do usuário</h1>
    <div>
      <BaseInputText
      name-input="user"
      name-label="Usuário"
      ve-model-name='username'"
      >
     </BaseInputText>
    </div>
    <div>
      <BaseInputText
        name-input="senha"
        name-label="Senha"
        type-input="password"
      >
      </BaseInputText>
    </div>
    <BaseButton>Enviar</BaseButton>
    <router-link to="/register">Não tem login?</router-link>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import BaseInputText from '../global/BaseInputText.vue'
import BaseButton from "../global/BaseButton.vue";

</script>

<style scoped lang="scss">
@use "../../styles/abstracts/variables";

form {
  border-top: 7px solid variables.$cor-principal;
  border-bottom: 7px solid variables.$cor-principal;
  border-radius: 5px;
  background-color: variables.$cor-clara;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3,50px) 50px auto;
  padding: 10px;
  gap: 1rem;
  div {
    display: flex;
    flex-flow: column;
  }
}

a {
  text-decoration: none;
  color: variables.$cor-principal;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  margin-bottom: 0.6rem;
  &:hover {
    color: #953b1a;
  }
}

h1 {
  margin-top: 10px ;
  color: variables.$cor-principal;
  text-align: center;
}
</style>
