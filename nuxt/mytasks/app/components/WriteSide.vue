<script setup>
let taskName = ref('')
let taskDescription = ref('')
async function enviarDados(){
   await $fetch('/api/user', {
        method:'POST',
        body:JSON.stringify({
            nome:taskName.value,
            idade:taskDescription.value
        })
    })
}


</script>


<template>
  <div>
    <form @submit.prevent="enviarDados" >
        <label for="task">Nome</label>
        <input v-model="taskName" type="text" id="nome" name="nome">
        <label for="description">Idade</label>
        <textarea v-model="taskDescription" name="idade" id="idade"></textarea>
        <button type="submit">Enviar</button>
    </form>
        <slot></slot>
  </div>
</template>

<style scoped>
    div{
         background-color: rgb(0, 49, 30);
        margin: 10px;
   }
   form{
    background-color: rgb(188, 221, 188);
    padding: 15px;
    display: grid;

   }
   textarea{
    resize: none;
   }
</style>
