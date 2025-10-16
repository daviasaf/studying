<script setup>
import { ref } from 'vue';

const contador = ref(0)
let condition = ref(false)
let mensagem = ref("")

let pessoas = [
  {nome:'Asaf',idade: 18},
  {nome:'Davi',idade: 16},
  {nome:'Irwing',idade: 16}
]

</script>

<template>
  <button @click="contador += 1" >  {{ contador }}</button>
  <ul>
    <li v-for="pessoa in pessoas"> Seu nome é {{ pessoa.nome }} e sua idade é {{ pessoa.idade }} </li>
  </ul>
  <div v-if="condition" > Sou verdadeiro</div>
  <div v-else > Sou falso </div>

  <input type="text" v-model="mensagem" >
  <p> {{ mensagem }} </p>
</template>

<style scoped>
  button{
    width: 200px;
  }
</style>