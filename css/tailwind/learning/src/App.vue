<script setup>
import { ref, onMounted } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CardTask from "./components/CardTask.vue";

let userTaskName = ref("");
let userTaskDesc = ref("");

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
  tasks.value.push(item);
  let taskString = JSON.stringify(tasks.value);
  localStorage.setItem("tasks", taskString);
  limparInputs()
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
</script>

<template>
  <Header />
  <main class="h-auto min-h-screen m-3 flex justify-center items-center">
    <div class="w-full">
      <!-- Área de escrever as tarefas -->
      <form
        @submit.prevent="enviarDados"
        class="grid grid-rows-4 gap-1.5 max-w-md  bg-gray-100 border-2 border-green-200 rounded p-5 mb-3 mx-auto"
      >
        <p class="text-center">Escreva sua tarefa</p>
        <input
          type="text"
          name="userTaskName"
          maxlength="40"
          v-model="userTaskName"
          class="hover:bg-gray-200 focus:bg-gray-200 text-center outline-0 rounded py-1.5 transition "
        />
        <input
          type="text"
          name="userTaskDesc"
          maxlength="40"
          ref="inpu"
          v-model="userTaskDesc"
          class=" hover:bg-gray-200 focus:bg-gray-200 text-center outline-0 rounded py-1.5 px-5 transition"
        />
        <button
          type="submit"
          class="bg-green-200 hover:bg-green-300 rounded text-center w-full transition"
        >
          Enviar
        </button>
      </form>
      <!-- Área de mostrar as tarefas -->
      <div
        v-show="tasks.length > 0"
        id="mostrar-tarefa"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1"
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

<style scoped></style>
