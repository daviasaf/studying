<script setup>
import { ref } from "vue";
const emit = defineEmits(["deletarTask", "atualizarTask"]);
const props = defineProps(["task"]);

let taskName = ref(props.task.nome);
let taskDesc = ref(props.task.desc);

let isError = ref(false)

let openConfig = ref(false);
let openEdit = ref(false);

function deletarTarefa() {
  emit(`deletarTask`, props.task.id);
}
function atualizarTarefa() {
  if (taskName.value && taskDesc.value) {
    emit("atualizarTask", {
      nome: taskName.value,
      desc: taskDesc.value,
      id: props.task.id,
    });
    semErroDetectado()
  } else {
    erroDetectado()
  }
}
function switchDisplayConfig() {
  openConfig.value = !openConfig.value;
}
function switchDisplayEdit() {
  openEdit.value = !openEdit.value;
}
function erroDetectado(){
  isError.value = true
}
function semErroDetectado(){
  isError.value = false
}
</script>

<template>
  <div :class=" isError ? 'with-error' : 'no-error'" class="bg-red-300 rounded-xl grid grid-cols-1 p-3 min-w-3/4">
    <h1 class="text-lg text-center border-b">
      {{ task.nome }} - ID {{ task.id }}
    </h1>
    <p class="text-center py-3">{{ task.desc }}</p>
    <button
      @click="switchDisplayConfig"
      ref="botaoConfig"
      class="transition bg-purple-300 hover:bg-purple-400 p-1"
    >
      Configuração
    </button>
    <p v-if="isError" class="text-center"> Não deixe nada vazio </p>
    <div v-show="openConfig" class="grid grid-cols-2">
      <button
        @click="deletarTarefa"
        class="transition bg-emerald-300 hover:bg-emerald-400"
      >
        Apagar
      </button>
      <button
        @click="switchDisplayEdit"
        class="transition bg-emerald-300 hover:bg-emerald-400"
      >
        Editar
      </button>
    </div>
    <div
      v-if="openEdit"
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-300 p-4 rounded shadow-lg"
    >
      <label for=""> Nome - </label>
      <input type="text" v-model="taskName" class="bg-green-400" />
      <input type="text" v-model="taskDesc" class="bg-green-400" />
      <button @click="switchDisplayEdit" class="bg-fuchsia-400">Sair</button>
      <button @click="atualizarTarefa" class="bg-purple-400">Salvar</button>
    </div>
  </div>
</template>

<style scoped>
.with-error{
  border: 3px solid red
}
.no-error{
  border:none
}
</style>
