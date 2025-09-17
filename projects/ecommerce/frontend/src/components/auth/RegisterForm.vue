<template>
  <form>
    <h1>Registro do usuário</h1>
    <div>
      <BaseInputText name-input="name" name-label="Usuário"> </BaseInputText>
    </div>
    <div>
      <BaseInputText name-input="email" name-label="Email"> </BaseInputText>
    </div>
    <div>
      <BaseInputText
        name-input="senha"
        name-label="Senha"
        type-input="password"
      >
      </BaseInputText>
    </div>
    <div>
      <BaseInputText
        name-input="senha-repetida"
        name-label="Repita a senha"
        type-input="password"
      >
      </BaseInputText>
    </div>
    <BaseButton>Enviar</BaseButton>
    <router-link to="/login">Já se registrou antes?</router-link>
  </form>
</template>

<script setup>
import BaseButton from "../global/BaseButton.vue";
import BaseInputText from "../global/BaseInputText.vue";
</script>

<style scoped lang="scss">
@use "../../styles/abstracts/variables";

form {
  border-radius: 5px;
  background-color: variables.$cor-clara;
  border-top: 7px solid variables.$cor-principal;
  border-bottom: 7px solid variables.$cor-principal;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 50px) 50px auto;
  padding: 10px;
  gap: 1rem;
}

form > div {
  display: flex;
  flex-flow: column;
}

a {
  text-decoration: none;
  color: #e96637;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  margin-bottom: 0.6rem;
}
a:hover {
  color: #953b1a;
}
h1 {
  margin-top: 10px;
  color: variables.$cor-principal;
  text-align: center;
}
</style>
