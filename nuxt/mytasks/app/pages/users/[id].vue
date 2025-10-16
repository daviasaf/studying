<script setup>
const route = useRoute();
const userId = route.params.id;
const { data, pending } = useFetch(`/api/tasks/${userId}`);
let isEditable = ref(true);
let taskName = ref("");
let taskDescription = ref("");

let task = computed(() => {
  return data.value.data[0] || null;
});

async function enviarAtualizacao() {
  await $fetch(`/api/tasks/${userId}`, {
    method: "PUT",
    body: JSON.stringify({
      name: taskName.value,
      description: taskDescription.value,
    }),
  });
}
</script>

<template>
  <div>
    <div v-if="isEditable">
      <div v-if="pending">
        <p>Carregando...</p>
      </div>
      <div v-else>
        <p>{{ task.name }}</p>
        <p>{{ task.description }}</p>
      </div>
      <button @click="isEditable = !isEditable">Editar tarefa</button>
    </div>
    <div v-else>
      <form @submit.prevent="enviarAtualizacao">
        <label for="">Atualizar nome da tarefa</label>
        <input v-model="taskName" type="text" name="" id="" />
        <label for="">Atualizar descrição da tarefa</label>
        <textarea v-model="taskDescription" name="" id=""></textarea>
        <button @click="isEditable = !isEditable">Fechar modo edição</button>
        <button type="submit">Salvar alteração</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
