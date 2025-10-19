<script setup>
import { ref, onMounted } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CardTask from "./components/CardTask.vue";

let userTaskName = ref("");
let userTaskDesc = ref("");
let isError = ref(false);

let taskStorage = localStorage.getItem("tasks");
let tasks = ref(JSON.parse(taskStorage) || []);

// Config ID das tarefas
let idTask = ref("");
function atualizarIdTask() {
  // Operação ternária que verifica se o array é menor que 0, se sim, ele mapeia todos os itens no array
  // e pega o maior deles com o Math.max, tem que usar o spread operator para espalhar em um array
  // Caso contrário, enviará o valor 0 para começar a contagem
  idTask.value =
    tasks.value.length > 0 ? Math.max(...tasks.value.map((m) => m.id)) : 0;
}
onMounted(() => {
  atualizarIdTask();
});

// Funções
function enviarDados() {
  let item = {
    nome: userTaskName.value,
    desc: userTaskDesc.value,
    id: (idTask.value += 1),
  };
  let nomeValido = item.nome.trim().length>0
  let descValido = item.nome.trim().length>0
  if(nomeValido && descValido){
    tasks.value.push(item);
    let taskString = JSON.stringify(tasks.value);
    localStorage.setItem("tasks", taskString);
    semErroDetectado()
    limparInputs()
    return
  }
  erroDetectado()

}
function deletandoTask(idTaskDeletar) {
  tasks.value = tasks.value.filter((tr) => tr.id != idTaskDeletar);
  let taskString = JSON.stringify(tasks.value);
  localStorage.setItem("tasks", taskString);
  atualizarIdTask();
}
function atualizandoTask(tarefaAtualizada) {
  tasks.value = tasks.value.map((task) => {
    if (task.id == tarefaAtualizada.id) {
      return tarefaAtualizada;
    }
    return task;
  });
}
function limparInputs() {
  userTaskName.value = "";
  userTaskDesc.value = "";
}
function erroDetectado() {
  isError.value = true
}
function semErroDetectado() {
  isError.value = false
}
</script>

<template>
  <Header />
  <main class="h-auto min-h-screen m-3 flex justify-center items-center">
    <div class="w-full">
      <!-- Área de escrever as tarefas -->
      <form
        @submit.prevent="enviarDados"
        :class="isError ? 'with-error' : 'no-error'"
        class="grid gap-2 max-w-md bg-gray-100 border-2 border-green-200 rounded p-5 mb-3 mx-auto"
      >
        <p class="flex justify-center items-start text-2xl ">Escreva sua tarefa</p>
        <label for="" class="flex items-end">Nome da tarefa</label>
        <input
        type="text"
        name="userTaskName"
        maxlength="40"
        v-model="userTaskName"
        class="hover:bg-gray-200 focus:bg-gray-200 text-center outline-0 rounded py-1.5 transition border-1 border-gray-300 "
        />
        <label for="" class="flex items-end">Descrição da tarefa</label>
        <input
          type="text"
          name="userTaskDesc"
          maxlength="40"
          ref="inpu"
          v-model="userTaskDesc"
          class=" hover:bg-gray-200 focus:bg-gray-200 text-center outline-0 rounded py-1.5 px-5 transition border-1 border-gray-300"
        />
        <button
          type="submit"
          class="bg-gray-200 hover:bg-gray-300 rounded text-center w-full py-2 transition"
        >
          Enviar
        </button>
        <div v-show="isError" class="flex justify-center items-end">
          <p >Preencha todos os campos</p>
        </div>
      </form>
      <!-- Área de mostrar as tarefas -->
      <div
        v-show="tasks.length > 0"
        id="mostrar-tarefa"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-1"
      >
        <CardTask
          @deletarTask="deletandoTask"
          @atualizarTask="atualizandoTask"
          v-for="task in tasks"
          :key="task.id"
          :task="task"
        >
        </CardTask>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.with-error {
  border: 2px solid oklch(80.8% 0.114 19.571) ;
  border-radius: 4px;

  #titulo{
    border-bottom: 1px solid oklch(80.8% 0.114 19.571);
  }
}
.no-error {
  border: 2px solid oklch(92.5% 0.084 155.995);
}
</style>
